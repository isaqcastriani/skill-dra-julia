"""timing.py VOZ.mp3 [--off 0.15] — alinha a transcrição (faster-whisper, tempo por palavra) às 64 palavras do roteiro e
gera shots/timing.js (WT = [{w, f, e}] em quadros a 30 fps, com o deslocamento da voz no mix).
Palavra que o Whisper não ouviu herda o tempo vizinho; o início de cada palavra é refinado pela energia (pula silêncio)."""
import sys, os, json, re, subprocess, unicodedata
import numpy as np
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, r"C:\Users\frank\.claude\knowledge\motion-saas\work")
SCRIPT = ("Tem dia que sua agenda parece um mapa. Reunião em uma cidade. Visita em outra. E ainda tem aquele compromisso "
          "que não pode começar atrasado. Quando o dia exige movimento, o transporte precisa acompanhar seu ritmo. Rota planejada. "
          "Horário combinado. Acompanhamento durante o trajeto. Você cuida da agenda. A AA .MG cuida do caminho. Onde você "
          "precisa estar hoje? Fale com a AA .MG.").split()
src = sys.argv[1]; off = float(sys.argv[sys.argv.index('--off') + 1]) if '--off' in sys.argv else 0.15
def norm(s):
    s = unicodedata.normalize('NFD', s.lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9]', '', s)
wj = os.path.splitext(src)[0] + '.words.json'
if not os.path.exists(wj):
    import gpuwhisper
    m = gpuwhisper.model("medium")
    segs, _ = m.transcribe(src, language="pt", word_timestamps=True, vad_filter=True)
    W = [{"w": w.word.strip(), "s": round(w.start, 3), "e": round(w.end, 3)} for s in segs for w in s.words]
    json.dump(W, open(wj, 'w', encoding='utf-8'), ensure_ascii=False)
W = json.load(open(wj, encoding='utf-8'))
# energia 10 ms
raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', src, '-ac', '1', '-ar', '16000', '-f', 'f32le', '-'], capture_output=True).stdout
x = np.frombuffer(raw, np.float32); h = 160
en = 20 * np.log10(np.array([np.sqrt(np.mean(x[i:i + h] ** 2)) for i in range(0, len(x) - h, h)]) + 1e-9)
thr = np.percentile(en, 60) - 22
out = []; j = 0
for tok in SCRIPT:
    n = norm(tok); hit = None
    for k in range(j, min(len(W), j + 4)):
        if norm(W[k]['w']) == n or (n and norm(W[k]['w']).startswith(n)) or (n == 'mg' and 'mg' in norm(W[k]['w'])):
            hit = k; break
    if hit is not None:
        s, e = W[hit]['s'], W[hit]['e']; j = hit + 1
    else:
        s = out[-1]['e_s'] if out else 0.0; e = s + 0.15
    # refina o início: primeiro trecho acima do limiar dentro da palavra
    a, b = int(s * 100), max(int(s * 100) + 1, int(e * 100))
    seg = en[a:b]; idx = np.argmax(seg > thr) if (seg > thr).any() else 0
    s2 = s + idx / 100.0 if (e - s) > 0.6 and idx < (b - a) * 0.7 else s   # só palavras esticadas sobre silêncio
    out.append({'w': tok, 's_s': s2, 'e_s': e, 'miss': hit is None})
WT = [{'w': o['w'], 'f': round((o['s_s'] + off) * 30, 1), 'e': round((o['e_s'] + off) * 30, 1)} for o in out]
open(os.path.join(ROOT, 'shots', 'timing.js'), 'w', encoding='utf-8').write(
    f'/* gerado por tools/timing.py de {os.path.basename(src)} (+{off} s) — índice = palavra do roteiro */\nwindow.WT = ' + json.dumps(WT, ensure_ascii=False) + ';\n')
print(len(WT), 'palavras; faltando:', [o['w'] for o in out if o['miss']])
print(' '.join(f"{w['w']}[{w['f']:.0f}]" for w in WT))
print('fim da voz (s):', round(out[-1]['e_s'] + off, 2))
