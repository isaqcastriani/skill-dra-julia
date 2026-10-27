# Marca · Dra. Julia Sahão ("Bancada na mata")

Fonte única de verdade para cor, tipo, planta e assinatura em qualquer vídeo ou peça. Se um prompt pedir algo que contradiz este arquivo, este arquivo vence (exceto se a própria Julia/Victor aprovou outra coisa por escrito).

## Quem é
Médica, mora num sítio perto de Bauru (SP), planta parte do que usa, ensina preparo de plantas medicinais com fonte (Anvisa). Tom: calmo, prático, "como explicaria para uma amiga na cozinha". Rejeita: jaleco, alfaiataria formal, estética de suplemento/"chip da beleza", cara de IA, hype.

## Tokens de cor (hex exatos)
```
paper   #F4EFE4   fundo claro (papel creme)
paper2  #ECE5D6   cartão claro
paper3  #DFD9D1   fios, picote
card    #FBF8F1   etiqueta de pote, ingresso
ink     #2F2B24   título
tinta   #39342C   texto
musgo   #7E7A63   legenda secundária (≥13px peso 600)
oliva   #5E6637   palavra-chave em título sobre claro
folha   #BCC68D   destaque sobre verde, marca-texto de legenda
mostarda#DFB054   o "chá", CTA, tag "ao vivo"
urucum  #C63806   tarja dos reels, ponto "ao vivo" (uso mínimo)
mata    #1F2D1D   fundo forte, botão, cartela
mata2   #283A26   cartão sobre verde
cream   #EFE8D6   texto/botão sobre verde
```
Proporção por quadro: 60 % claro · 25 % mata · 10 % folha/oliva · 5 % mostarda+urucum. Nunca mostarda e urucum grandes juntos.
Contraste: folha/mostarda NUNCA como cor de texto sobre fundo claro.

## Tipografia (arquivos em `assets/fonts/`, licença OFL)
| Papel | Fonte | Regra |
|---|---|---|
| Título | Epilogue 300 + 800 | Caixa alta, entrelinha 0,9, tracking −0,035 em (300) e −0,045 em (800). A palavra pesada carrega a ideia |
| Legenda corrida | Epilogue 800 | Caixa normal (não alta), com pontuação, tracking −0,03 em |
| Rótulo / pílula | Epilogue 600 | Caixa alta, tracking +0,12 em |
| Nome científico | Instrument Serif itálico | Sempre que uma planta é nomeada |
| Nota à mão | Caveat 600 | Máx. 1 por vídeo/peça |
| Tarja (reels dela) | Montserrat 800 | Fundo branco, colchete preto à esquerda, texto urucum, terço de cima |

Sem contorno, sem sombra dura na letra. Se o texto não lê, escureça o fundo (degradê), nunca a letra.

## Plantas
Recortes reais com fundo transparente em `assets/img/recortes/`:
- Plantas da aula: `folha-camomila` (*Matricaria chamomilla*), `folha-hibisco` + `hibisco-seco` (*Hibiscus sabdariffa*, cálice), `folha-cavalinha` + `cavalinha-seca` (*Equisetum*), `folha-cravo` + `cravo-seco` (*Syzygium aromaticum*), `folha-babosa` (*Aloe vera*, só uso externo), `folha-alecrim` (*Salvia rosmarinus*), `camomila-seca`, `pote-camomila`, `xicara-camomila`.
- Moldura de mata (nunca rotular como planta da aula): `folha-samambaia`, `folha-galho`, `folha-palmeira`, `folha-costela`, `folha-bananeira`, `folha-cipo`.

**Regra de ancoragem:** toda planta nasce de algum lugar: da borda do quadro, de trás de uma foto/cartão, de um "canteiro" na base, ou pendurada do topo (cipó). Nunca flutua solta no meio.
**Proibido:** hibisco de jardim para chá de hibisco; cravo de vaso para cravo-da-índia; babosa perto de copo/xícara; alecrim junto de cabelo/pele.

## Fotos
`assets/img/fotos/`: `hero.jpg` (ela na bancada, 4:5), `bio.jpg` (no canteiro, 16:9, ela à direita), `maos.jpg` (mãos servindo camomila), `xicaras.jpg` (5 chás com a cor real), `final.jpg` (varanda + vale de mata, hora dourada), `checkout-quadrada.jpg`. São geradas por IA a partir de fotos reais (ver `prompts-imagens.md` do projeto). Em vídeo, prefira SEMPRE os takes reais dela; foto gerada só como inserto/cartela.

## Assinatura
`Dra.` (Epilogue 300) + `Julia Sahão` (800) + `MÉDICA · CRM-SP 182.821` (600, caixa alta, tracking +0,2 em). Monograma "JS" em círculo folha. O placeholder `[UF] [nº]` é trocado antes de publicar.

## Componentes de marca
- **Etiqueta de pote:** cartão `card`, rótulo "ETIQUETA DO POTE" (600, 0,18 em), nome popular (800), científico (serif itálico, oliva), tabela Parte / Preparo / Fonte com fio tracejado `paper3`. Aparece sempre que a planta é nomeada.
- **Pílula de fonte:** pílula `mata` 82 % com "Fonte: *Memento Fitoterápico*, Anvisa, p. X".
- **Arco:** foto com topo em arco total, base raio 28 px (no 1080).
- **Botão/CTA:** pílula `mata` com texto `cream` caixa alta + selo redondo `folha` com seta; ou pílula `cream` sobre verde.
- **Cartela final:** fundo `mata` ou foto `final.jpg` escurecida; "Te vejo na bancada." (Epilogue 800, caixa normal, −0,055 em); data, lote, botão.
