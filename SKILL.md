---
name: dra-julia
description: Tudo o que se cria para a Dra. Julia Sahão (médica, plantas medicinais, aula ao vivo "Chá do jeito certo", @drajuliasahao) — a linha de comunicação (conhecimento ancestral das plantas + problema e solução, bio, pauta, séries, ganchos, copy de LP e anúncio), vídeos (Reels, anúncios 9:16 e 4:5, cartelas, edição dos takes dela) no nível de motion dos vídeos do estúdio, e estáticos (posts de feed, anúncios, carrosséis, capas de reel, stories) na identidade "Bancada na mata" da LP, com contexto do produto, regras de conversão/engajamento e de publicidade médica (CFM 2.336/2023). Use SEMPRE que pedirem comunicação, bio, pauta, gancho, ideia de conteúdo, vídeo, reel, anúncio, post, estático, carrossel, story, capa, legenda, copy ou edição para a Dra. Julia / Julia Sahão / "a Dra" / "chá do jeito certo".
---

# Criativos da Dra. Julia Sahão (vídeo e estático)

**Comece por `references/contexto.md`** (quem ela é, o produto, as datas, o público) **e `references/comunicacao.md`** (a linha de comunicação desde 26-10-2026: ancestralidade + problema e solução, crença central, 5 estilos, ganchos, como ser forte sem quebrar o CFM). Para qualquer texto (copy, legenda, gancho, bio, LP, roteiro), `comunicacao.md` manda no tom e no ângulo; o método de escrita está em `references/copy-pesquisa.md` e `references/copy-mestres.md`. Esta skill junta:
1. **A identidade da LP** ("Bancada na mata"): papel creme, verde-mata, planta recortada de verdade que brota da borda, etiqueta de pote com nome científico, fonte da Anvisa na tela. → `references/marca.md`
2. **O nível de motion dos vídeos do estúdio**, feitos com o motor de quadro (cada quadro = função pura de F, HTML → Chromium → ffmpeg), com tempos medidos nos vídeos da CUREON, N5 e Lunet. → `references/motion.md`, `engine/`
3. **As regras de publicidade médica** que ela precisa seguir. → `references/conformidade.md`
4. **O que converte e engaja** (estudo de 100+ anúncios de curso, vídeo e estático, + pesquisa com 66 fontes). → `references/criativos.md`
5. **Estáticos** (feed, anúncio, carrossel, capa, story): regras + 10 modelos editáveis exportados em PNG 1080 px. → `references/estaticos.md`, `templates/estaticos/pecas.html`

**Leia `references/conformidade.md` antes de escrever qualquer texto de tela.** Ela é médica: um verbo de efeito ("acalma", "desincha") ou uma doença como alvo invalida a peça.

## Quando usar o quê

| Pedido | Caminho |
|---|---|
| Anúncio/Reel montado (motion, cartelas, sem precisar de take novo) | `scripts/novo_video.py` + template + receitas de `lib/julia.js` (seção 2) |
| Editar takes reais dela (G1/G2/G3) | Pipeline de edição por texto (Whisper → EDL → legendas → cor → mix → XML DaVinci), seguindo `references/edicao.md`; o motion (tarja, etiqueta, lower third, cartela) sai deste motor como PNG com alfa ou overlay |
| Post de feed, anúncio estático, carrossel, capa de reel, story | `templates/estaticos/pecas.html` (copie, edite o texto) → `node scripts/exportar_estaticos.mjs pecas.html saida/` · regras em `references/estaticos.md` |
| Copy de anúncio / legenda de post / bio / LP / roteiro | `references/comunicacao.md` (linha, estilos, ganchos, tradução do "agressivo") + `references/criativos.md` (formato e números) + `references/conformidade.md` + método em `references/copy-pesquisa.md` e `copy-mestres.md` |
| Pauta do perfil, série, stories, enquete, grupo VIP | `references/comunicacao.md` seções 3 a 6 e 10 |

## 1. Regras inegociáveis

- **Nome com credencial** em toda peça: "Dra. Julia Sahão · MÉDICA · CRM [UF] [nº]" (≥ 22 px no 1080; lower third nos primeiros 1–5 s e na cartela final). O placeholder `[UF] [nº]` fica em `brand.js` (`BRAND.crm`) e é trocado antes de publicar.
- **Nunca** efeito na saúde, doença/sintoma/órgão como alvo, "faz mal" como alarme (só como pergunta do público com fonte), "segredo", urgência falsa, preço riscado, replay/gravação, curso de R$ 297 em anúncio, babosa perto de copo, alecrim com cabelo/pele, marca de terceiros.
- **Dados oficiais:** aula quarta 11-11-2026, 20h (Brasília), Google Meet, ~90 min, sem gravação · lote 1 R$ 57 de 19-10 a 01-11 · lote 2 R$ 87 de 02-11 a 10-11 · garantia de 7 dias pela Kiwify.
- **Planta certa:** hibisco do chá = *Hibiscus sabdariffa* (cálice), cravo = *Syzygium aromaticum*. Toda planta nomeada leva o nome científico (Instrument Serif itálico).
- **Calmo-premium:** ritmo do institucional da CUREON, sem a energia do Reels dela. Vetado: tremor, flash branco, split cromático, glitch, escala de entrada > 1,08, motion blur > 40 px.
- **Plantas ancoradas:** toda planta brota de uma borda, de trás de uma foto/cartão ou de um "canteiro" na base. Nunca solta no meio do quadro.
- **Sem cara de IA:** foto gerada só como inserto ou cartela. Nunca vídeo gerado do rosto dela.

## 2. Fazer um vídeo com o motor

```bash
# 1) monte a pasta FORA do OneDrive (a sincronização trava milhares de PNG)
python <skill>/scripts/novo_video.py C:/Users/frank/render_tmp/<peca> --template anuncio-faz-mal --seg 20
cd C:/Users/frank/render_tmp/<peca>
npm i                                  # playwright (ou use o global)
# 2) edite shots/*.js (e shots/manifest.js); confira quadros soltos (máx. 15 por chamada)
node render.mjs stills 0,30,90,150 --out out/teste       # index.html?guias=1 mostra a zona segura
# 3) render completo (3 blocos paralelos) e encode
bash tools/render_all.sh                                   # → C:/Users/frank/render_tmp/<peca>/... 
python tools/encode.py <pasta-dos-png> peca.mp4 audio/mix.wav
```
Formatos: 9:16 = `--w 1080 --h 1920` (padrão) · 4:5 = `--w 1080 --h 1350`. Zona segura 9:16: texto e rosto em x 65–888 (Meta+Shorts) ou x 90–990 (só Meta), y 288–1248; os 672 px de baixo ficam livres.

### Contrato do motor (não quebre)
- Cada shot: `SHOT({id, f0, f1, z?, render(lf, F) → string HTML})`. Shots podem se sobrepor (é assim que se faz transição). `J.finish(F)` num shot de z 99 cobrindo o vídeo todo (grão + vinheta, uma vez só).
- **Proibido:** `Math.random`, `Date`, timers, `transition`/`animation` CSS, `<video>`. Para variação use `C.hash`, `C.noise1` ou `J.nz`.
- `C.measure`/`C.fontMetrics` só dentro do `render` (depois das fontes).
- Imagens em `assets/img/fotos/` e `assets/img/recortes/` (caminho relativo `J.IMG('recortes/folha-camomila.png')`).
- Erros: `render.mjs` imprime "erros na página: N". No Git Bash o `console.log` do node às vezes não aparece; redirecione para arquivo (`> log.txt 2>&1`).

### Receitas (`window.J`, detalhes e números em `references/motion.md`)
`paper` `forest` `finish` `leak` · `cam`/`breath` (câmera que respira) · `slide` (papel desliza) · `say` (palavra a palavra; `*chave*` com sublinhado de folha, `_científico_`; com voz use `times` do Whisper) · `title` (caixa alta sobe da máscara) · `search` (busca digitada) · `plant` (planta brota) · `label` (etiqueta de pote com mola) · `teaFill` (o chá enche a tela) · `arch` (arco revela foto) · `photo` (push; `herbario:true` = duotom → cor) · `sci` (nome científico como anotação) · `hand` (nota manuscrita) · `source` (pílula de fonte) · `steam` (vapor) · `tarja` (tarja dela) · `signature` (assinatura brota) · `cta` (botão com toque) · `ticket` (ingresso do lote).

Easings: `E.apple` (entrada), `E.outCubic`, `E.inCubic` (saída), `E.inOutSine` (câmera), `E.inOutQuint` (forma), `E.outBackSoft` (único overshoot).

## 3. Verificar antes de entregar

1. Stills de cada transição (primeiro e último quadro, 2–3 quadros dentro) e **olhe as imagens**. Monte uma folha de contato.
2. `?guias=1` em 3 quadros: nada de texto ou rosto fora da zona segura.
3. Conformidade: leia todo texto de tela e a legenda do post contra `references/conformidade.md`.
4. Vídeo final: 30 fps, bt709, H.264, áudio −14 LUFS / −1 dBTP (quando houver), música com licença registrada.

## Arquivos

- `references/contexto.md` · quem ela é, produto, datas, público, funil
- `references/comunicacao.md` · **a linha de comunicação** (ancestralidade + problema e solução, 26-10-2026): crença central, 3 atos, 4 pilares, 5 estilos, série "Receita de família", banco de ganchos, LP, checklist
- `references/copy-pesquisa.md` + `references/copy-mestres.md` · dossiês de copy (ordem de trabalho, clareza, psicologia, mestres, microtécnicas, LP que converte)
- `references/marca.md` · tokens, fontes, plantas, componentes
- `references/motion.md` · as 20 receitas com números e origem
- `references/conformidade.md` · CFM 2.336/2023 + Meta + decisões do briefing + trechos dos takes G1 já mapeados
- `references/edicao.md` · direção de edição dos takes dela (legenda, cortes, cor, áudio, referências)
- `references/criativos.md` · ângulos, formatos, regras de conversão e engajamento (estudo de anúncios + pesquisa)
- `references/estaticos.md` · medidas, hierarquia, modelos e checklist de estáticos/carrosséis/stories
- `references/estudo-anuncios-meta.md` · estudo completo de 152 anúncios (vídeo e estático), com 25 conceitos prontos
- `references/estudo-pesquisa-uxui.md` · pesquisa de UX/UI e motion em criativos (66 fontes, checklist de 40 regras)
- `engine/` · motor (core.js do kit do estúdio, render.mjs, lib/julia.js, tools/)
- `templates/anuncio-faz-mal/` · anúncio de 20 s com quase todas as receitas (ROTEIRO.md explica quadro a quadro)
- `templates/estaticos/pecas.html` · 10 peças: pergunta com fonte, lote, carrossel (capa/interna/final), programa da aula, capa de reel, story de abertura, story da virada, cartela final
- `assets/fonts/` (OFL) · `assets/img/fotos/` (geradas a partir de fotos reais dela) · `assets/img/recortes/` (plantas com fundo transparente)
- `scripts/novo_video.py` · monta uma pasta de vídeo pronta
- `scripts/exportar_estaticos.mjs` · exporta as peças estáticas em PNG 1080 px
