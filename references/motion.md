# Motion · receitas da Dra. Julia (com números medidos)

Base: estudo dos vídeos do estúdio feitos no motor de quadro (CUREON institucional 14-10 e Reels 15-10, N5/memo 07-10, BFA 05-10, Lunet 27-09, AAMG 08-10). Estudo completo: `Dra Julia Sahao/estudos/estudo-motion-remakes.md`.
Quadros a 30 fps (1 s = 30 F). `J.x` = função em `engine/lib/julia.js`.

## Régua

- **Ritmo do institucional da CUREON, acabamento do Reels da CUREON.** Planos de 3–6 s, quase nenhum corte seco, transições que nascem do objeto (folha, xícara, pote, vapor, papel). Algo pequeno acontece a cada compasso; nada fica parado mais de ~2 s (a câmera sempre respira).
- **Easings da casa:** entrada `E.apple` (≈ cubic-bezier(.22,1,.36,1)) ou `outCubic` · saída `inCubic` · câmera `inOutSine` · troca de forma `inOutQuint` · único overshoot `E.outBackSoft` (c1 0,9).
- **Vetado (é hype, não é ela):** tremor de câmera, split cromático, flash branco cheio, pancada de escala > 1,08, whip com blur > 40 px, contador frenético, partículas "tech", glitch.
- **Acabamento:** papel `#F4EFE4` com manchas de luz lentas (`J.paper`), grão 0,06 em overlay + vinheta de tinta 0,22 por cima de tudo, uma vez (`J.finish`), luz quente mostarda 0,2–0,35 (`J.leak`).

## As receitas

| # | Receita | Números | Função |
|---|---|---|---|
| 1 | **Busca digitada** (gancho do ângulo "faz mal?") | pílula .94→1 + opacidade 14 F apple · 20 car/s · cursor urucum pisca a cada 15 F parado · Enter: 1→.94 (3 F outQuad)→1 (9 F outBack) | `J.search` |
| 2 | **Frase palavra a palavra + sublinhado de folha** | cada palavra 18 F outCubic, blur 12→0, sobe 18 px; com voz: 3 F antes da palavra falada (Whisper); palavra-chave 800 + traço oliva desenhando 20 F apple, 4 F depois de assentar; saída 14 F inCubic, 1 F entre palavras | `J.say` (`*chave*`, `_científico_`) |
| 3 | **Título que sobe da máscara** | 16 F outExpo, desloc. 0,95×corpo, blur 8→0, stagger 3 F; caixa alta Epilogue 300 + 800 | `J.title` |
| 4 | **Etiqueta de pote com mola** | 1,06→1 outBackSoft 10 F, blur 10(1−p)², desce 30 px; pouso 1→1,02→1 (2 + 8 F); brilho a 110° em 16 F, 4 F depois; balança ±0,6° | `J.label` |
| 5 | **Planta que brota da âncora** | clip de baixo para cima 28 F apple + escala .92→1 da base; balança ±1,2° (`noise(F·0,02)`); respira 1,5 % em 90 F; sombra suave | `J.plant` |
| 6 | **O chá que enche** (transição) | onda amp 14 px, λ 360 px; cobre a tela em 22 F inOutQuint, segura 4 F, escoa 14 F inCubic; mostarda → âmbar `#C98A3A` | `J.teaFill` (shot com z alto) |
| 7 | **Arco que revela** | máscara sobe 36 F apple com topo em arco; foto com push 1,035→1,10 no plano (inOutSine) | `J.arch` |
| 8 | **Herbário vira cor** | foto em duotom tinta/folha (`#herbario`) → cor real por máscara radial r 0→1650 em 52 F inOutSine | `J.photo({herbario:true})` |
| 9 | **Nome científico como anotação** | linha 18 F apple; nome Instrument Serif itálico com tracking .08→0 em 20 F, blur 6→0; legenda 6 F depois | `J.sci` |
| 10 | **Nota manuscrita** (1 por vídeo) | Caveat a 13 car/s, linha de base ±1 px por letra; seta desenha 14 F outCubic | `J.hand` |
| 11 | **Pílula de fonte** | outBackSoft 17 F, .86→1, blur 12→0. "Fonte: *Memento Fitoterápico*, Anvisa, p. X" | `J.source` |
| 12 | **Vapor** (ambiente) | 4 fios, ciclo 70 F, sobem ~170 px, blur 8 px, alfa ≤ .32 | `J.steam` |
| 13 | **Tarja dela** (reels) | barra branca varre da esquerda 10 F outCubic; texto 5 F depois; Montserrat 800 urucum + colchete preto | `J.tarja` |
| 14 | **Câmera que respira** | push +3–6 % no plano (inOutSine) + deriva 5–6 px `noise(F·0,012)`; roll 0 | `J.cam` / `J.breath` |
| 15 | **Papel que desliza** (troca de cena) | pan de 1 tela em 16 F inOutQuint, antecipação 24 px/10 F; motion blur ≤ 32 px no meio | `J.slide` + `C.mblur` |
| 16 | **Cartão que abre** (igual à LP) | `clip-path inset(0 4% round 180px 180px 0 0)` → `inset(0)` em 18 F apple | inline (ver template, cena S5) |
| 17 | **Assinatura que brota** | folha 0,06→1 outBackSoft 22 F; letras de "Julia Sahão" .7→1, blur 16→0, 28 F apple, 2,5 F entre letras; CRM 18 F | `J.signature` |
| 18 | **Ingresso do lote** | cartão sobe 40 px + .96→1 outBackSoft 14 F; lote vigente em folha | `J.ticket` |
| 19 | **CTA com toque** | botão .94→1 outBack(1,2) 12 F; dedo chega 20 F inOutQuad; toque 1→.94→1; onda r 120 outExpo; o "chá" enche o botão 18 F inOutQuint e a seta gira −45° | `J.cta` |
| 20 | **Cartela final** | foto `final.jpg` com véu de mata; "Te vejo na bancada." (title); ingresso; CTA; "DRA. JULIA SAHÃO · MÉDICA · CRM" | template S5 |

Receitas do estudo que **não** entram em anúncio: "medida que conta (dose e temperatura)". Dose é conteúdo da aula, não argumento de venda (briefing, seção 10.5). Pode entrar em corte da própria aula, com a fonte na tela, se o Victor aprovar.

## Linha do tempo modelo (Reel/anúncio 20 s · música 70–90 BPM)

`templates/anuncio-faz-mal/ROTEIRO.md`: busca (0–3,7 s) → papel desliza → planta certa + nome científico (3,3–8,7 s) → chá enche → mãos + etiqueta + fonte (8,6–13,5 s) → arco + aula ao vivo + assinatura (13–17 s) → cartela com ingresso e toque (16,7–20 s).

## Som (quando houver)

- Música orgânica/acústica 70–90 BPM, licença comercial registrada (URL + licença em `audio/LICENCA.txt`). Cortes e acentos no **compasso**, não em cada batida.
- Voz dela sempre por cima: ducking −9 dB, ataque 80 ms, release 400 ms. Master −14 LUFS, pico ≤ −1 dBTP.
- SFX discretos e afinados no tom da trilha: papel, colher na porcelana, água vertendo, tampa de vidro, "tick" de digitação na busca. Nada de "boom" ou "whoosh" agressivo.
- Modelo de mix: `estudos/engine-base/tools/audio/mix_cureon_reels.py` (adaptar a tabela de SFX).
