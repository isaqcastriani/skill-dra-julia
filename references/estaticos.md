# Estáticos, carrosséis, capas e stories

Modelos prontos e editáveis: `templates/estaticos/pecas.html` (10 peças). Exportar PNG em 1080 px:
```bash
node scripts/exportar_estaticos.mjs templates/estaticos/pecas.html <saida>/ [A-pergunta-hibisco,B-lote-1]
```
Copie o `pecas.html` para a pasta do trabalho antes de editar (mantenha os caminhos `../../assets` ou ajuste-os).
Números com fonte: estudo `references/estudo-pesquisa-uxui.md` (66 fontes) e estudo de anúncios `references/estudo-anuncios-meta.md`.

## 1. Medidas

| Peça | Tamanho | Área útil |
|---|---|---|
| Feed / anúncio 4:5 | 1080×1350 (a Meta recomenda 1440×1800 para anúncio) | margem 6 % (65 px). Título e oferta dentro do quadrado central y 135–1215 se o anúncio puder ser recortado para 1:1 |
| Carrossel | 4:5, 5 a 8 lâminas (máx. 20), todas no mesmo formato | igual ao feed |
| Story / capa de reel 9:16 | 1080×1920 | Meta: topo 269 px, base 672 px, laterais 65 px livres. Capa: o grid do perfil corta em 3:4, então o essencial fica em 1080×1440 central |
| Texto primário do anúncio | ≤ 125 caracteres antes do "ver mais"; título ≤ 40 | — |

## 2. Hierarquia de um estático que converte (uma ideia por peça)

1. **Gancho** (o maior texto): uma pergunta do público ou uma afirmação curta. Epilogue caixa alta 300 + 800, ≥ 110 px no 1080.
2. **Prova**: etiqueta de pote (nome popular + *científico* + parte + fonte) ou a foto dela na bancada.
3. **Ponte**: 1–2 linhas ligando à aula ("Na aula ao vivo eu digo quem não deve usar, com a fonte.").
4. **Oferta**: data · hora · lote · preço. Na peça de oferta ela vem **primeiro** (o banner "oferta primeiro" teve 8,6 % de taxa de acerto e 29,3 % da verba no relatório da Motion).
5. **Assinatura**: "Dra. Julia Sahão · MÉDICA · CRM [UF] [nº]", ≥ 22 px (ideal 28–30 px no 1080).

Regras de texto:
- Texto na imagem enxuto: a Meta diz que imagens com menos de 20 % de texto "geralmente performam melhor". No máximo **3 blocos de texto** por peça.
- Mínimos no 1080: título ≥ 80 px (gancho ≥ 110 px), corpo 36–48 px, rodapé/CRM ≥ 22 px.
- Contraste ≥ 4,5:1 no texto normal. Folha e mostarda **nunca** como cor de texto sobre papel.
- **Preço sem risco**, data sempre escrita, lote com a data da virada.

## 3. Os modelos (e quando usar)

| Modelo | Ângulo | Público | Notas |
|---|---|---|---|
| **A · Pergunta com fonte** | "[planta] faz mal?" (pergunta do público) | frio e quente | Resposta factual primeiro, sem alarme; fonte da Anvisa na etiqueta. Troque a planta, mantendo a espécie certa |
| **B · Preço e lote** | oferta primeiro | só quente (seguidores, engajados, visitantes da LP) | Foto quadrada dela (a mesma do checkout). Lote 2: "R$ 87 · 02 a 10-11" |
| **C1–C3 · Carrossel** | infusão × decocção (ou quem não deve usar, ou mesmo nome, planta diferente) | orgânico + frio | C1 funciona sozinha e termina em "arrasta →"; C2 traz uma ideia por lâmina, ≤ 3 itens e fonte no rodapé; C3 é a lâmina final com CTA, data e lote |
| **D · Capa de reel** | tema do vídeo | orgânico | A tarja dela (branco + colchete preto + urucum, Montserrat 800) no terço de cima. Use o **quadro real do vídeo** |
| **E · Story de abertura** | anúncio da aula + enquete | seguidores | O sticker é o nativo do Instagram |
| **F · Story da virada** | urgência real | seguidores | **Só em 01-11** (último dia do lote 1). Nada de "últimas vagas" |
| **G · Cartela final** | CTA | fim de vídeo, último card | "Te vejo na bancada." |
| **H · Programa da aula** | lista numerada (01–05) das plantas + regra de cada uma, "AULA AO VIVO · SEM GRAVAÇÃO", data em versalete e lote em pílula | frio e quente | Estático de lista: os 6 do estudo são todos vencedores. Troque as plantas se a lista final mudar |

## 4. Carrossel: estrutura que segura o arrasto

- Lâmina 1 = gancho + promessa de conteúdo ("A mesma planta, outro chá.") + indicação visual de arrasto.
- Lâminas 2 a N−1 = **uma ideia por lâmina**, numerada ("02 / 06"), ≤ 3 itens, planta/objeto recortado ancorado no canto.
- Penúltima = "quem não deve usar" (gera envio: "vou mandar pra minha mãe", que é o sinal que mais ajuda o alcance entre não seguidores).
- Última = CTA (aula, data, lote) + fonte completa.
- Carrossel lidera o engajamento orgânico; no anúncio, teste contra o estático A.

## 5. O que o estudo de 152 anúncios mostrou para estático
- Duram: **título claro do que se aprende + foto editorial**, **retrato + credencial embaixo do nome + título da aula**, **programa numerado com data em versalete**, **cartão de lote com o número grande**, **carrossel numerado de 1 dica por card**.
- Rosto aparece em 62 % dos estáticos; botão desenhado na arte é comum ("Garantir ingresso").
- Oferta com data tem vida curta: troque as peças de oferta a cada fase do lote (19-10, 01-11, 02-11, 08–10-11).
- Credencial visível (CRM) aparece em só 8 de 152 anúncios, o que a torna um diferencial.

## 6. Proibido em estático (além da conformidade geral)

Preço riscado · contador · "últimas vagas" · selo "100 % natural" · foto de banco · rosto gerado diferente dela · marca de chá/farmácia visível · planta errada · "faz mal" como manchete de alarme sem resposta · emoji em excesso (no máximo 1–2, sóbrios) · mais de uma oferta na mesma peça.

## 7. Checklist da peça

- [ ] Uma ideia só, gancho legível em 1 s no celular
- [ ] Nome + MÉDICA + CRM
- [ ] Planta certa + nome científico
- [ ] Data/lote/preço corretos para o dia em que vai ao ar
- [ ] ≤ 3 blocos de texto, contraste ok, margens ok
- [ ] Nenhum verbo de efeito, nenhuma doença como alvo
