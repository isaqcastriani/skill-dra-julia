# Direção de edição de vídeo · Dra. Julia Sahão

Para: Claude (edição) e Victor (acabamento no DaVinci Resolve). Versão de 16-10-2026.
Escrito para ser executado ao pé da letra: toda regra tem número, toda exceção está escrita. Quando este documento e um pedido vago divergirem, vale este documento.

**Ferramentas:**
- Takes reais dela (reels G1/G2/G3): pipeline de edição por texto (Whisper por palavra → EDL → legendas → cor → mix → XML para o DaVinci).
- Motion, cartelas e anúncios montados: a skill **`video-dra-julia`**. Ela traz o motor de quadro dos vídeos do estúdio, a biblioteca de receitas da marca (`lib/julia.js`) e um anúncio-modelo de 20 s.
- Sistema visual: `conceito-artistico.md`. Conformidade: seção 9 deste arquivo e `skill/.../references/conformidade.md`.

---

## 0. A ideia em uma linha

**O vídeo é a LP em movimento:** papel creme, verde-mata, planta de verdade que brota da borda, etiqueta de pote com nome científico, fonte da Anvisa na tela. O ritmo é calmo e o acabamento é de estúdio, como o institucional da CUREON: planos de 3 a 6 s, transições que nascem do objeto (folha, xícara, vapor) e a câmera sempre respirando. **Nada de hype:** sem tremor, sem flash, sem pancada de zoom.

## 1. Formato e duração

| Peça | Formato | Duração-alvo | Observação |
|---|---|---|---|
| Reel de storytelling (G1/G2/G3) | 9:16 · 1080×1920 · 30 fps | **60–100 s** (os brutos têm 1min30–2min50) | Começa na história curiosa, passa ao preparo e ao cuidado, fecha na história. O briefing pedia 2–4 min, mas o material bruto não chega lá e a pesquisa mostra que 60–100 s seguram mais. Decisão final do Victor |
| Corte de anúncio (do mesmo bruto) | 9:16 + 4:5 (1080×1350) | **15–30 s** | Gancho + 1 ponto técnico com fonte + ponte para a aula + cartela com lote. Um bruto gera **3 versões**: storytelling longo, anúncio de 30 s e anúncio de 15 s |
| Anúncio montado (motion, sem rosto ou com foto) | 9:16 + 4:5 | 15–20 s | Skill, template `anuncio-faz-mal` |
| Lembrete/remarketing | 9:16 | 6–10 s | Uma mensagem: data, hora, lote |
| Story | 9:16 | ≤ 15 s por card | Gravado no dia, só legenda + tarja |

Exporte o master 9:16 também em **1440×2560** para a Meta (resolução recomendada por ela). O 4:5 é um reenquadramento: rosto e texto dentro do quadrado central y 285–1635 do 9:16.

## 2. Os primeiros 3 segundos

Pesquisa: quem tem a mensagem-chave nos 3 primeiros segundos domina os vídeos de maior CTR (TikTok: ≥ 63 %). No Facebook/Nielsen, 47 % do valor de um vídeo está nos primeiros 3 s.

1. **Quadro 0 nunca vazio.** Ou ela já falando com a planta na mão, ou a tarja já cheia. Proibido abrir com fade de preto ou com logo.
2. **Texto na tela desde o quadro 0:** a tarja dela (fundo branco, colchete preto, texto urucum, Montserrat ExtraBold, no terço de cima, y 300–560) com o gancho **escrito diferente da fala** (ex.: fala "O livro do Pedro Coelho, de 1902, traz a medida do chá de camomila. Em colher."; tarja "1902: a medida do chá era em colher").
3. **Imagem antes da fala:** não. Ela fala desde o quadro 0. Exceção: no anúncio "busca digitada" (receita 1), a busca abre e a fala dela entra no quadro 20.
4. **Testar as duas aberturas gravadas:** sempre **duas versões** do mesmo vídeo, idênticas a partir do segundo 4. Nome dos arquivos: `camomila_A.mp4`, `camomila_D.mp4` (a letra da abertura do teleprompter).
5. Lower third "Dra. Julia Sahão · MÉDICA · CRM [UF] [nº]" entra no **segundo 1,0** e fica **4 s** (seção 7).

## 3. Ritmo e cortes

| Regra | Número | Exceção |
|---|---|---|
| Silêncio entre frases | corte todo silêncio **> 250 ms**, deixando **120 ms** de ar | depois de uma pergunta ("faz mal?") deixe **400 ms**; depois do nome científico, **300 ms** |
| Respiração | remova respirações audíveis entre frases; mantenha a do início de uma frase longa | — |
| Pausa interna (dentro da frase) | > 220 ms vira 140 ms | não comprima pausa dramática da história (ex.: "Até 2002.") |
| Jump cut | sim, no talking head, para tirar pausa e tropeço | nunca no meio de palavra (confira o ataque de /t/, /s/, /k/) |
| Punch-in (zoom de corte) | alternar **100 % ↔ 112 %** a cada jump cut; **118 %** para a frase-chave | nunca passe de 120 % (a imagem do iPhone amolece) |
| Mudança de enquadramento ou inserto | gancho: a cada **0,7–1,5 s** · corpo: a cada **2–4 s** | trecho de cuidado/contraindicação: até **5 s** parado (é o momento de seriedade) |
| Câmera virtual | **sempre** um push lento de +3 % a +5 % por plano (inOutSine), como no institucional da CUREON | nunca parada por completo; nunca tremida |
| Take repetido | use o que tem **a frase inteira sem tropeço**; em empate, o de olhar mais firme para a lente | se só um tem a informação correta, use esse mesmo com tropeço e corrija na legenda |
| Tropeço de fala | corte a palavra tropeçada e emende no take bom; se não houver, mantenha e **corrija só a legenda** | — |
| Ordem | **mantenha a ordem gravada**, com uma exceção fixa: **cuidados e "quem não deve usar" vão para o fim do corpo**, logo antes do fechamento (ex.: cavalinha, IMG_1715 depois do 1717 e do 1718) | — |

Notas dos brutos G1 (briefing 12.3): camomila, cortar o IMG_1632 em ~30 s e emendar o IMG_1633 (que corrige "sonho" → "sono"); babosa, usar o IMG_1726 e não o 1724; hibisco, encurtar a parte da Malásia para no máximo 40 s.

## 4. Legenda

A pesquisa (Schotter, Tran & Rayner, 2014) mostra que **palavra por palavra prejudica a compreensão** de texto denso. Por isso a legenda tem dois modos:

| Modo | Quando | Como |
|---|---|---|
| **Gancho** | primeiros 5 s e frases de efeito | blocos de **1–3 palavras**, cada um disparado **3 quadros antes** de ser falado (Whisper por palavra), entrada 18 quadros: blur 12→0 px, sobe 18 px, `outCubic` |
| **Corrido** | resto do vídeo, sobretudo dose, tempo e cuidado | frase inteira em **até 2 linhas, ≤ 32 caracteres por linha, ≤ 17 caracteres por segundo**; a linha aparece inteira e a palavra falada ganha destaque |

Especificação fixa:
- **Fonte:** Epilogue ExtraBold (800), caixa normal (não alta), com pontuação, tracking −0,03 em.
- **Tamanho:** **62 px** no 1080×1920 (entrelinha 1,08). Mínimo absoluto 48 px.
- **Cor:** creme `#FBF6EA` sobre imagem; a **palavra falada** (modo gancho) ou a **palavra-chave** (modo corrido) em **marca-texto folha** `#BCC68D` com texto mata `#1F2D1D` (raio 10 px, padding 0 10 px).
- **Sem contorno, sem sombra na letra.** Se não ler, escureça o fundo: degradê mata `#1F2D1D` de 0 % a 70 % de opacidade nos 45 % de baixo do quadro.
- **Posição:** centro da legenda em **y = 1180 px** (61 % da altura), largura máxima **860 px** (x 110–970). Nunca abaixo de y 1248 (zona de botões da Meta).
- **Nome científico:** sempre em **Instrument Serif itálico**, cor folha, no mesmo tamanho. Ex.: *Matricaria chamomilla*.
- **Erro de fala:** a legenda **corrige** concordância, palavra trocada e número dito errado ("tesouro arqueológico" → "tesouro paleontológico" só se o Victor aprovar a troca de sentido; erros de concordância corrija sempre).
- **Toda fala tem legenda.** Antes de entregar, confira: nenhum trecho falado > 0,5 s sem texto na tela.

## 5. Tarja e textos na tela

| Elemento | Texto | Entra | Fica | Posição | Animação |
|---|---|---|---|---|---|
| **Tarja dela** (mantida: o público reconhece) | o gancho escrito, ≤ 6 palavras, 2 linhas | quadro 0 | até o segundo 4 e volta na virada da história | x 100, y 300–560 | a barra branca varre da esquerda em 10 quadros (`outCubic`), o texto entra 5 quadros depois. Saída: some em 8 quadros (`inCubic`). Função `J.tarja` |
| **Etiqueta de pote** | nome popular · *científico* · parte · preparo · fonte | quando ela **nomeia a planta** pela primeira vez | 4–6 s | x 110, y 300–720 (terço de cima, longe do rosto se ela estiver à direita) | entra com mola: 1,06→1 em 10 quadros (`outBackSoft`), brilho a 110° 4 quadros depois. `J.label` |
| **Pílula de fonte** | "Fonte: *Memento Fitoterápico*, Anvisa, p. 63" | quando ela cita a medida, a dose ou a regra | 3–4 s | x 90, y 300 | .86→1 em 17 quadros (`outBackSoft`), blur 12→0. `J.source` |
| **Nota manuscrita** | 1 por vídeo, ≤ 5 palavras ("tampa a xícara") | no gesto correspondente | 2,5 s | perto do objeto | escreve a 13 caracteres/s + seta desenhada. `J.hand` |

Nome da planta e nome científico **sempre juntos**, e sempre na primeira menção. A fonte aparece sempre que houver medida, tempo ou "quem não deve usar". A fonte da Anvisa é a prova da marca ("Fonte").

## 6. Movimento e transições (o nível de motion)

Régua: **o institucional da CUREON** (`OneDrive/Documentos/CUREON/video-institucional/Cureon-Institucional-v1.mp4`): 86 s, **0 cortes secos**, planos de 5,7 s em média, transições que nascem do conteúdo, palavras em 18 quadros com blur 12→0. O acabamento e a densidade de detalhe vêm do **Reels da CUREON**, **sem** a energia dele.

Easings: entrada `apple` (≈ cubic-bezier(.22,1,.36,1)) ou `outCubic`; saída `inCubic`; câmera `inOutSine`; troca de forma `inOutQuint`; único overshoot `outBackSoft` (0,9).

Transições permitidas (receitas da skill, números em `references/motion.md`):
1. **Papel que desliza** (troca de bloco): pan de 1 tela em 16 quadros, motion blur ≤ 32 px.
2. **O chá que enche** (entrada da cartela final ou troca de tema): a superfície com onda sobe e cobre em 22 quadros, escoa em 14. **Match cut obrigatório**: começa num plano dela servindo chá.
3. **Arco que revela** (abertura de bloco com foto dela): 36 quadros.
4. **Planta que brota** da borda do quadro (inserto ou virada de tema): 28 quadros.
5. **Cartão que abre** (como as seções da LP): recuado e arredondado → tela cheia em 18 quadros.
6. **Corte seco**: só no talking head (jump cut) e no ritmo da música.

Proibido: zoom-pancada > 1,08, tremor, flash branco, glitch, split cromático, whip com blur > 40 px, transições prontas do DaVinci (estrela, cubo, página virando).

## 7. Assinatura e CTA

- **"Dra. Julia Sahão · MÉDICA · CRM [UF] [nº]"** (obrigatório, CFM 2.336, art. 4º):
  - **Lower third** do segundo 1,0 ao 5,0: pílula creme `#FBF8F1` 92 % com "Dra." (Epilogue 300) + "Julia Sahão" (800) em 40 px + linha "MÉDICA · CRM [UF] [nº]" em 22 px, tracking +0,22 em, cor musgo. Posição x 90, y 1290. Entra 14 quadros `apple`, sai 10 quadros `inCubic`.
  - **De novo na cartela final**, junto do botão (`J.signature`).
  - **Na legenda do post**, sempre.
- **Fechamento do reel orgânico:** a fala dela ("Segue o perfil pra ver a próxima.") + cartela de **2,5 s**: fundo mata, folha brotando, assinatura, "@drajuliasahao".
- **Fechamento do anúncio:** cartela de **3 s** (receita 20): "Te vejo na bancada." + ingresso do lote vigente (R$ 57 até 01-11 / R$ 87 de 02-11 a 10-11) + botão "Garantir ingresso" com toque. **CTA falado e escrito**, repetido uma vez antes da cartela ("o link está aqui embaixo").
- **Branding:** a marca é o rosto, a voz e o nome. Nada de logo flutuante o vídeo todo. No anúncio, marca e assinatura em **≤ 25 % da duração** (Meta/Toluna: 4,8x).

## 8. Cor

O iPhone grava em **HDR HLG** (BT.2020, 10 bits). **Converta para Rec.709 antes de qualquer correção.** Esse foi o erro mais grave já visto num projeto do estúdio ("cor horrível"):

```
zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p
```
Marque a saída como bt709 nas 4 propriedades (primaries, trc, colorspace, range tv).

| Item | Alvo |
|---|---|
| Look | **natural com calor de fim de tarde.** Temperatura +3 a +5 (do neutro), tint 0. O oposto do look frio da Novare |
| Contraste | leve: preto em 4–6 % (nunca esmagado), branco ≤ 95 % (nada estourado na janela da varanda) |
| Saturação | global 95–100 %. **Verde de folha e cor do chá protegidos:** não use filtro que mude o matiz do verde (H 70–140°) nem do dourado/rubi do chá |
| Pele | linha de pele no vetorscópio; corrija só se sair dela |
| Entre clipes | meça a média de luminância e de R−B do rosto em cada clipe e iguale a ±3 % ao clipe de referência (o primeiro da abertura) |
| Grão | grão de papel 0,05–0,06 em overlay **só nas cartelas e no motion**, nunca no rosto |

## 9. Áudio e música

| Item | Alvo |
|---|---|
| Limpeza | redução de ruído leve (`afftdn=nf=-25`), corte de grave em 80 Hz, de-esser em 6–8 kHz (−4 dB) |
| Voz | **−14 LUFS integrado**, pico ≤ **−1 dBTP**; compressor 3:1, ataque 10 ms, release 120 ms |
| Música | **sim**, orgânica/acústica (violão, piano suave, percussão leve), **70–90 BPM** no reel; **pode subir a 100–120 BPM** no anúncio de 15 s (o TikTok aponta > 120 BPM para VTR, então teste). Volume **−20 dB abaixo da voz** (faixa da pesquisa: −18 a −24), com **ducking −9 dB, ataque 80 ms, release 400 ms** |
| Entra/sai | entra no quadro 0 (som e imagem juntos no gancho dão 1,5x em intenção de compra, segundo Meta/Toluna); sai com fade de 1,5 s na cartela final |
| Cortes no ritmo | trocas de bloco e entrada da cartela **no compasso** da música (não em cada batida) |
| SFX ("ativo sonoro" da marca) | **água vertendo na xícara** nos 2 primeiros segundos de todo anúncio (o som da marca), colher na porcelana, tampa de vidro, papel. Afinados e baixos (−24 a −28 LUFS). Nada de whoosh agressivo ou "boom" |
| Licença | só música com **licença comercial** (anúncio). Registre URL + licença em `audio/LICENCA.txt`. Nunca use áudio em alta do Instagram em anúncio |

## 10. B-roll e insertos

| Momento | Inserto | Duração |
|---|---|---|
| Nome da planta | planta fresca ou seca (recorte brotando da borda, `J.plant`) + etiqueta | 2–3 s |
| Preparo (infusão/decocção) | mãos: água sobre a flor, tampa, panela fervendo o caule | 2–4 s, **30–50 % do corpo** (formato "Demo": maior taxa de acerto no estudo da Motion) |
| Cuidado / quem não deve usar | **sem inserto**: rosto dela, plano firme, push lento | até 5 s |
| História (livro, Malásia, FDA) | ilustração ou foto de época **com licença**, ou cartela tipográfica | 2–3 s |

**Enquanto não houver b-roll gravado** (a visita ao sítio é em 30 e 31-10): use as fotos geradas da LP (`maos.jpg`, `xicaras.jpg`, `hero.jpg`) com push de +6 % e planta recortada brotando. **Nunca** banco de imagem com pessoa e **nunca** vídeo gerado por IA do rosto dela (a pesquisa da NielsenIQ mostra que anúncio com cara de IA irrita e é menos lembrado).

## 11. Segurança de quadro e capa

- **Área livre 9:16 (Meta Reels/Stories):** topo **269 px**, base **672 px**, laterais **65 px**. Master único para Meta + YouTube Shorts: texto e rosto em **x 65–888, y 288–1248**.
- **Olhos** em y 380–600; legenda em y ~1180; tarja em y 300–560.
- **Capa do reel:** 1080×1920 com a parte útil em 1080×1350 (o grid do perfil corta em 3:4). Quadro escolhido = ela com a planta na mão, olhando para a lente. Tarja com o tema em 2 linhas no terço de cima. Assinatura pequena embaixo. Exemplo: painel `direcao-criativos.html`, peça D.

## 12. Referências (o que copiar e o que não copiar)

| Referência | Onde e quando | Copiar | Não copiar |
|---|---|---|---|
| CUREON institucional (estúdio) | `CUREON/video-institucional/Cureon-Institucional-v1.mp4` · **0:21,0** (virada com 1 s de silêncio antes), **0:28,9** (logo nasce das letras), **0:42,5** (produto entra depois de pausa de 0,8 s) | ritmo, respiro antes das viradas, transição que nasce do objeto, palavras em 18 quadros com blur | o azul da Cureon e o ponto de luz "tech" |
| CUREON Reels (estúdio) | `CUREON/reels/Cureon-Reels-Venda-v1.mp4` · **0:10,6–0:11,3** (xícara → pílula: match cut) | densidade de detalhe, match cut por forma, SFX afinados | o flash creme do drop (0:06,6), o tremor, as pancadas de 1,2–1,7× |
| N5/memo (estúdio) | `Downloads/N5-Memo-remake/N5_Memo_remake.mp4` | palavras com blur e subida curta, papel e vidro fosco, câmera que nunca para | os chicotes de câmera rápidos |
| Fernando Miranda, short "Red Bull" | [youtube.com/shorts/bO_bFqRe-jM](https://www.youtube.com/shorts/bO_bFqRe-jM) · **0:00–0:03** | a estrutura (história geral e curiosa que desce para o tema) e o gancho escrito diferente da fala no terço de cima | a legenda branca em caixa alta com contorno, a faixa vermelha, o ritmo de corte de 1 s |
| Reels dela, "Infusão ou decocção?" | [instagram.com/drajuliasahao/reel/DabXwblusf-](https://www.instagram.com/drajuliasahao/reel/DabXwblusf-/) · capa | a tarja (branco, colchete preto, urucum), ela com o objeto na mão, a varanda | o enquadramento com a câmera baixa |
| Reels dela, cavalinha | [instagram.com/drajuliasahao/reel/DeK1WBvOJjn](https://www.instagram.com/drajuliasahao/reel/DeK1WBvOJjn/) · capa | luz da varanda e planta na mão desde o início | a tarja em oliva sobre fundo claro (pouco contraste) |
| Anúncio-modelo da skill | `skill/video-dra-julia/templates/anuncio-faz-mal` (render em `entregas/video-demo/anuncio-faz-mal.mp4`) | todas as receitas de motion da marca, com tempos | — |

## 13. Ordem de trabalho para o Claude (cada vídeo)

1. Transcrever os clipes com Whisper por palavra; listar takes repetidos e tropeços (seção 3).
2. **Checar a conformidade** de cada frase (seção 9 do briefing e `references/conformidade.md`). Trecho com efeito, doença ou "a Anvisa proibiu": **marcar e não usar**, e listar para o Victor.
3. Montar a EDL (ordem, cortes de silêncio, punch-ins); gerar as 3 versões (longa, 30 s, 15 s) e as 2 aberturas.
4. Converter HLG → Rec.709, igualar a cor entre clipes (seção 8).
5. Legendas (seção 4), tarja, etiqueta, fonte e lower third (seções 5 e 7), com a skill `video-dra-julia` para o motion e as cartelas.
6. Mix (seção 9). Conferir LUFS e pico.
7. Exportar o MP4 de revisão + o **XML/EDL para o DaVinci** (cortes e legendas em trilhas separadas: V1 bruto, V2 insertos, V3 motion em PNG com alfa, ST1 legendas), para o Victor finalizar.
8. Checklist final (`direcao-criativos.md`, seção 8) antes de entregar.
