"""novo_video.py DESTINO [--template NOME] [--w 1080 --h 1920 --seg 20]

Monta uma pasta de vídeo pronta para renderizar: motor (engine/), fontes, imagens da marca e um template.
Crie FORA do OneDrive (ex.: C:/Users/frank/render_tmp/<peça>): a sincronização trava a escrita de milhares de PNG.

Templates disponíveis: pasta templates/ da skill (ex.: anuncio-faz-mal). Sem --template = shots vazios.
"""
import os, shutil, sys, json

SK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
a = sys.argv[1:]
if not a or a[0].startswith('--'):
    sys.exit(__doc__)
dest = os.path.abspath(a[0])
opt = lambda k, d=None: a[a.index(k) + 1] if k in a else d
tpl = opt('--template')

if os.path.exists(dest) and os.listdir(dest):
    sys.exit(f'destino já existe e não está vazio: {dest}')
shutil.copytree(os.path.join(SK, 'engine'), dest, dirs_exist_ok=True)
shutil.copytree(os.path.join(SK, 'assets', 'fonts'), os.path.join(dest, 'fonts'), dirs_exist_ok=True)
shutil.copytree(os.path.join(SK, 'assets', 'img'), os.path.join(dest, 'assets', 'img'), dirs_exist_ok=True)
os.makedirs(os.path.join(dest, 'shots'), exist_ok=True)
if tpl:
    src = os.path.join(SK, 'templates', tpl)
    if not os.path.isdir(src):
        sys.exit(f'template não encontrado: {tpl} (veja {os.path.join(SK, "templates")})')
    shutil.copytree(src, dest, dirs_exist_ok=True)
else:
    with open(os.path.join(dest, 'shots', 'manifest.js'), 'w', encoding='utf-8') as f:
        f.write("/* manifest.js — liste aqui os arquivos de shots, em ordem. */\n['video.js'].forEach(f => document.write(`<script src=\"shots/${f}\"><\\/script>`));\n")
    with open(os.path.join(dest, 'shots', 'video.js'), 'w', encoding='utf-8') as f:
        f.write("(function () {\n  const C = window.C, J = window.J, SHOT = window.SHOT, T = J.T;\n"
                "  SHOT({ id: 'S1', f0: 0, f1: C.TOTAL - 1, render: (lf, F) => J.paper(F) + J.title(['Chá do', '*jeito certo*'], lf, { y: 700 }) });\n"
                "  SHOT({ id: 'FIN', f0: 0, f1: C.TOTAL - 1, z: 99, render: (lf, F) => J.finish(F) });\n})();\n")

# formato
sys.path.insert(0, os.path.join(dest, 'tools'))
from _proj import proj, salvar_proj  # noqa: E402
import _proj  # noqa: E402
_proj.ROOT = dest
P = proj()
if opt('--w'): P['W'] = int(opt('--w'))
if opt('--h'): P['H'] = int(opt('--h'))
if opt('--seg'): P['TOTAL'] = round(float(opt('--seg')) * P['FPS_NUM'] / P['FPS_DEN'])
salvar_proj(P)
print(f"pronto: {dest}\n  {P['W']}×{P['H']} · {P['TOTAL']} quadros ({P['TOTAL'] / 30:.1f} s)\n"
      f"  cd \"{dest}\" && npm i && node render.mjs stills 0,60,120 --out out/teste")
