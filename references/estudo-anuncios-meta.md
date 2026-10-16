# Estudo de criativos: 152 anúncios de cursos, aulas ao vivo e infoprodutos (Meta, Brasil)

Para a direção de criativos da aula ao vivo **"Chá do jeito certo"** da **Dra. Julia Sahão · MÉDICA · CRM [UF] [nº]**.
Coleta em 16-10-2026. Base de dados: `criativos-dataset.csv` (152 linhas, separador `;`, UTF-8). Prints: `ads-prints/` (20 anúncios).

---

## 0. Resumo em uma página

**O que foi visto**
- **152 anúncios** catalogados, de **119 anunciantes**, todos ativos no Brasil em 16-10-2026.
- **97 vídeos (64 %)**, **45 estáticos (30 %)** e **10 carrosséis (7 %)**.
- **80 (53 %)** são de saúde, bem-estar, plantas, nutrição, horta ou comida. Desses, 16 são de médicos ou de educação médica.
- **115 (76 %) estão no ar há 60 dias ou mais**, que é o critério de "vencedor" deste estudo. 61 passam de 180 dias e 46 passam de um ano.
- 25 anúncios têm menos de 30 dias (os "curtos") e 12 ficam entre 30 e 59 dias.
- 32 anúncios rodam em 2 ou mais variações do mesmo criativo.

**As 10 regras mais fortes** (os números vêm deste estudo; o detalhe está nas seções 4 a 11)
1. **Vídeo 9:16 é o padrão.** São 86 de 97 vídeos (89 %) e 59 % dos vencedores.
2. **Pergunta direta é o gancho de vídeo que mais dura.** São 22 % dos vídeos vencedores, nenhum dos curtos, e a mediana é de 262 dias no ar. "Lista numerada" vem logo depois (7 vencedores, nenhum curto).
3. **O assunto aparece no 1º quadro.** Mostrar a planta, o objeto ou a mão fazendo vale tanto quanto mostrar o rosto. Os 22 vídeos que abrem **sem rosto** (só planta, mão, objeto ou processo) têm mediana de **400 dias no ar**, contra 132 dias dos que abrem com rosto.
4. **O título fica parado e o resto se mexe.** Em 36 % dos vídeos, o gancho fica fixo em caixa ou tarja (no topo ou no terço médio) enquanto a pessoa fala ou demonstra. A legenda palavra por palavra aparece em só 26 %.
5. **Pouco texto no vídeo e um pouco mais no estático.** Nos vídeos, 54 % têm densidade baixa e 5 % têm densidade alta. Nos estáticos, 49 % têm densidade média e 38 % alta. Mesmo assim, há uma ideia por peça.
6. **No nicho de saúde, conteúdo vale como anúncio.** Os anúncios que levam ao perfil do Instagram são 28, sendo 24 de saúde, e têm **mediana de 505 dias no ar**. Entre os vencedores de saúde, 47 % não mostram oferta nenhuma: ensinam algo e convidam a seguir.
7. **O nome científico e a planta na mão são o padrão de autoridade dos vencedores de plantas.** Exemplos: Autor da Própria Saúde, 11 anúncios com 598 a 1.552 dias no ar, e Julio Luchmann, 8 anúncios.
8. **Oferta de evento com data tem vida curta, e isso é esperado.** A data aparece em 32 % dos curtos e em 2 % dos vencedores. Para lançamento, o certo é ter muitos criativos de oferta trocados a cada fase de lote, e não um só que "dure".
9. **Teste de ganchos com a mesma copy.** Os anunciantes que mais escalam usam o mesmo texto com vários vídeos-gancho. Julio Luchmann tem 6 ganchos para o mesmo e-book, Minhas Plantas subiu 8 estáticos de R$ 10 na mesma semana e o Prof. Kenny tem 14 variações de um único vídeo de retargeting.
10. **Credencial visível é raro e por isso diferencia.** Só **8 de 152** anúncios mostram CRM ou RQE, entre eles 3 dos 16 médicos. Quem mostra coloca no rodapé fixo ou num lower third discreto.

**Fontes usadas:** só a **Biblioteca de Anúncios da Meta** (Brasil, anúncios ativos, ordenados por impressões).
- As buscas foram por palavra-chave e por frase exata.
- A coleta foi feita com Chrome em modo headless (Playwright). Ele abriu a página pública da biblioteca, sem login, e capturou o card de cada anúncio e quadros do vídeo em 0 s, 1,5 s, 3 s e perto do fim.
- O Claude in Chrome foi testado primeiro, mas a aba ficava em segundo plano e não permitia screenshots, por isso a troca para o headless.
- Não foi preciso usar TikTok Creative Center, YouTube nem galerias de terceiros.

---

## 1. Método (e o que ele não prova)

**Critério de vencedor.** A biblioteca não mostra conversão, então o estudo usa o critério padrão de mercado:
- **L (vencedor):** 60 dias ou mais no ar.
- **M:** 30 a 59 dias.
- **S (curto):** menos de 30 dias.
- **Variações:** quantos anúncios usam o mesmo criativo e texto (campo "N anúncios usam esse criativo e esse texto").

**Coleta**
- **22 buscas** em PT-BR:
  - Por palavra: aula ao vivo, masterclass, aula gratuita, workshop online, imersão, curso online, inglês curso, plantas medicinais, fitoterapia, chás, ervas, aromaterapia, nutrição.
  - Por frase exata: "sou médica", "medicina integrativa", "nutricionista", "plantas medicinais", "horta em casa", "curso de jardinagem", "curso de confeitaria", "curso de maquiagem", "aromaterapia curso", "aula ao vivo", "aula gratuita", "masterclass gratuita", "workshop online", "imersão online", "lote 1", "inscrições abertas".
  - Em cada busca, os 12 a 15 primeiros resultados por impressões.
- Cerca de 270 anúncios coletados.
- **Descartados** os que não eram curso, aula, infoproduto, consultório de saúde ou produto do nicho de chá/ervas: supermercado, Amazon, Nestlé, pet etc.
- **Descartadas** duplicatas do mesmo anunciante quando o criativo era idêntico.
- **Mantidos 152.**

**Codificação**
- Cada anúncio foi codificado à mão a partir do card e de 4 quadros do vídeo. Os campos estão no CSV: gancho literal, tipo de gancho, densidade de texto, estilo de legenda, rosto no 1º quadro, objeto, cenário, paleta, tipografia, oferta, prova e recursos de edição.
- A "primeira fala" foi lida na **legenda queimada** do vídeo. Não houve transcrição de áudio. Quando o vídeo não tem legenda, o gancho registrado é o texto na tela ou a ação do 1º quadro.

**Limites (leia antes de usar os números)**
1. **Viés de sobrevivência.** Só aparecem anúncios ainda ativos. Os que morreram em 3 dias não estão na amostra, então "curto" quer dizer **recente**, não necessariamente perdedor.
2. **Anúncio de evento é curto por natureza.** Um anúncio de aula com data morre quando a data passa. Por isso o tempo no ar não serve para julgar criativo de lançamento (seção 9).
3. **Tempo no ar ≠ conformidade.** 11 anúncios do nicho de saúde que **quebram** as regras dela continuam no ar há 3 a 768 dias: doença como alvo, promessa, print de paciente, antes/depois. Durar não quer dizer que pode (seção 11).
4. **A codificação é subjetiva** e feita por uma pessoa. As categorias de gancho são aproximadas e um anúncio pode ter dois tipos de gancho; o CSV guarda a categoria principal e o texto livre.
5. **Engajamento não é visível** na biblioteca: não há comentários nem salvamentos. Ele foi estimado por sinais indiretos (seção 10).
6. **Amostra pequena** em várias células (por exemplo, 13 vídeos curtos). Trate as porcentagens como tendência, não como lei.

---

## 2. Visão geral da base

| Recorte | n | % |
|---|---|---|
| Vídeo | 97 | 64 % |
| Estático (imagem única) | 45 | 30 % |
| Carrossel | 10 | 7 % |
| Saúde / bem-estar / plantas / comida | 80 | 53 % |
| Vencedores (≥ 60 dias) | 115 | 76 % |
| ≥ 180 dias | 61 | 40 % |
| ≥ 365 dias | 46 | 30 % |
| Curtos (< 30 dias) | 25 | 16 % |
| Com 2+ variações | 32 | 21 % |
| Aulas ao vivo, masterclasses, workshops, imersões e eventos (subconjunto) | 48 | 32 % |

**Formatos**

| Formato | Todos | Vencedores (n = 115) | Curtos (n = 25) |
|---|---|---|---|
| vídeo 9:16 | 86 | 68 (59 %) | 11 (44 %) |
| estático 4:5 | 17 | 11 | 5 |
| estático 1:1 | 15 | 12 | 3 |
| estático 9:16 | 9 | 4 | 2 |
| carrossel 4:5 / 1:1 | 7 / 3 | 5 / 3 | 2 / 0 |
| vídeo 1:1 / 4:5 / 16:9 | 5 / 3 / 1 | 5 / 1 / 0 | 0 / 1 / 1 |

**Mediana de dias no ar:** vídeo 140 · estático 109 · carrossel 117. No subconjunto de saúde a mediana é de 231 dias.

**Duração dos vídeos** (82 com duração lida)

| Faixa | Quantos |
|---|---|
| ≤ 15 s | 8 |
| 16–30 s | 13 |
| 31–60 s | 35 |
| 61–120 s | 30 |
| > 120 s | 9 |

A mediana é de 55 s, e a dos vencedores é de 56 s. **Vídeo longo não é problema para quem ensina:** há vencedores de 11 min, de 22 min (uma aula de Libras inteira) e de 4 min.

**Botão de CTA mais usado**
- "Saiba mais" / "Learn More" / "Ver detalhes": 56 anúncios, mediana de 80 dias.
- "Acessar o perfil do Instagram": 28 anúncios, mediana de 505 dias.
- WhatsApp: 19 anúncios, mediana de 205 dias.
- "Comprar agora": 5.

---

## 3. Vencedores × curtos: o que muda

| Variável | Vencedores (L) | Curtos (S) | Leitura |
|---|---|---|---|
| Gancho "pergunta direta" (todos os formatos) | 16 % | 0 % | A pergunta é o que mais dura |
| Gancho "lista numerada" | 11 % | 0 % | Também é estável |
| Gancho "preço/oferta/evento" | 11 % | 32 % | Oferta tem vida curta (é ligada a data ou lote) |
| Data/hora no criativo | 2 % | 32 % | O mesmo efeito |
| Sem oferta (conteúdo puro, convite a seguir) | 30 % | 4 % | O conteúdo-anúncio fica ligado o ano todo |
| CTA de comentário ("comente X") | 13 % | 0 % | Mecânica de engajamento contínuo |
| Vídeo | 66 % | 52 % | Os vencedores pendem para o vídeo |
| Rosto no 1º quadro (vídeo) | 78 % | 77 % | **Não diferencia**: é o básico |
| Legenda palavra por palavra (vídeo) | 26 % | 15 % | Pouco efeito |
| Densidade de texto alta (vídeo) | 7 % | 0 % | Amostra pequena |

**Como ler esta tabela**
- Os vencedores são, em grande parte, **anúncios de conteúdo**: uma pergunta, uma lista, uma demonstração, uma planta.
- Eles alimentam o topo do funil por meses, e a oferta fica num link, numa bio ou numa página.
- Os curtos são sobretudo **anúncios de oferta com data**: lote, ingresso, "dia 27/10", "9 a 11 de novembro".
- Para a Dra. Julia, que tem 3 semanas de venda, o plano certo junta os dois tipos:
  - **criativos de conteúdo** (perguntas, demonstrações, listas), que podem continuar rodando depois da aula como captação para o curso;
  - **criativos de oferta** trocados nas viradas de lote.

---

## 4. Ganchos que dominam

### 4.1 Vídeo (n = 97)

| Categoria | Todos | Vencedores | Curtos | Mediana de dias | Exemplos literais (do CSV) |
|---|---|---|---|---|---|
| Demonstração / objeto na mão | 21 (22 %) | 16 | 4 | 128 | mãos girando pote de conserva (sem texto); "Essa aqui é a urtiga-branca" com a mão na planta; bico de confeitar fazendo rosas; "'MY' OU 'MINE'? ENTENDA OS PRONOMES POSSESSIVOS" (aula na lousa) |
| Pergunta direta | 18 (19 %) | 17 | 0 | **262** | "Está ficando CARECA?"; "Passou dos 40 anos?"; "Quer concluir o seu ensino médio?"; "Swing trade ou day trade?"; "E aí, está sem tempo pra estudar?" |
| História / UGC / fala direta | 13 (13 %) | 8 | 3 | 110 | "oi, meu nome é Maria"; "Eu: descobrindo os cursos de pós… por apenas R$69/mês"; "Vi que você quase iniciou o melhor curso de inglês do país" |
| Curiosidade | 9 (9 %) | 7 | 1 | 133 | "Alimento mais anti-inflamatório do mundo" (o alimento só é revelado no fim); "Erva cidreira ≠ Capim cidreira"; "O QUE É ARTEPILLIN-C?" |
| Dor / promessa / identificação | 8 | 7 | 1 | 185 | "Você dorme, mas não descansa"; "SEU INTESTINO ESTÁ PEDINDO SOCORRO!" |
| Contrarian / mito × verdade | 7 | 5 | 1 | 165 | "O colesterol não é um vilão"; "Não dá pra confiar em você assim."; "Nem toda planta deve ser usada do mesmo jeito" |
| Lista numerada | 7 | 7 | 0 | 135 | "Chá de Picão Preto: pode curar 5 problemas"; "Três concursos para INICIANTES…"; "Antes de cortar o açúcar, tente isso por 21 dias:" |
| Autoridade / marca | 5 | 5 | 0 | 269 | "Meu nome é Júlia Carone, eu sou médica reumatologista"; recorte de palestra no palco |
| Preço / oferta / evento | 5 | 2 | 2 | 46 | "SESSÃO DE DESBLOQUEIO!!"; "QUINTA TURMA · MENTORIA LUNA NUTRI" |
| Pergunta do público (caixinha do IG) | 3 | 1 | 1 | 30 | "Doutora, minhas pernas têm muita celulite…"; "Alice, onde está o link do Make 35+ por apenas 97 reais?" |

### 4.2 Estático e carrossel (n = 55)

| Categoria | Todos | Vencedores | Curtos | Mediana de dias |
|---|---|---|---|---|
| Preço / oferta / evento | 19 (35 %) | 11 | 6 | 72 |
| Título direto do curso ou serviço | 14 (25 %) | 13 | 1 | 227 |
| Lista numerada | 6 (11 %) | 6 | 0 | 237 |
| Autoridade / marca | 4 | 2 | 1 | 59 |
| Dor / promessa | 3 | 2 | 0 | 258 |
| Contrarian | 2 | 1 | 1 | 569 |

**Leitura**
- No vídeo, os ganchos estáveis são **pergunta**, **demonstração** e **lista**.
- No estático, o que fica no ar é o **título claro do que se aprende** (ex.: "Formação Profissional em Plantas Medicinais", "CURSO DE CONFEITARIA") e a **lista**.
- A oferta pura é o tipo de estático mais comum, mas roda em ciclos.

### 4.3 No nicho de saúde, plantas e comida (n = 80)

| Gancho | Total | Vencedores |
|---|---|---|
| Demonstração / objeto | 13 | 11 |
| Pergunta direta | 12 | 12 |
| Lista numerada | 9 | 9 |
| Curiosidade | 8 | 6 |
| História / UGC | 8 | 7 |
| Contrarian / mito | 7 | 5 |

**Quase todas as perguntas e listas do nicho estão no ar há mais de 60 dias.**

---

## 5. Os 3 primeiros segundos (o que se vê nos quadros de 0 s, 1,5 s e 3 s)

1. **O assunto entra no 1º quadro, não na fala.**
   - Nos vídeos com texto de gancho, ele já está na tela no quadro de 1,5 s na grande maioria dos casos. Essa observação vem da revisão das folhas de quadros e não foi contada uma a uma.
   - Quando não há texto, o 1º quadro é o próprio objeto: a planta, o bolo, a conserva, a unha pronta.
2. **Rosto não é obrigatório, o objeto é.**
   - 78 % dos vídeos vencedores abrem com rosto, mas os 22 que abrem **só com planta, mão ou processo** têm mediana de **400 dias**.
   - São 8 de plantas e comida: copaíba, urtiga, picão-preto, "matinho", mamão, chá preto de 7 s rodando há 1.490 dias, conserva, confeitaria.
3. **Padrões de 1º quadro que mais se repetem entre os vencedores**
   - **Planta ou objeto na mão, perto da lente** (Autor da Própria Saúde, Julio Luchmann, Renan B. com o saco de picão). A mão dá escala e diz "é real".
   - **Título em 2 tempos**: entra a 1ª linha e, aos 1,5–3 s, entra a 2ª ("BIGODE CHINÊS" → "ESTÁ TE INCOMODANDO?"; "VOCÊ SOFRE COM…" → "A FESTA JUNINA PODE AJUDAR!").
   - **Card de pergunta nativo do Instagram** ("Faça uma pergunta"), com a pessoa respondendo atrás.
   - **Gesto ou pose que interrompe a rolagem**: deitada na grama ao lado da horta, mordendo uma moeda, encenando o cansaço no sofá, gesto de "psiu" com o livro.
   - **Apresentação curta com credencial** no 2º–3º segundo ("Meu nome é Paula Suzuki…"; lower third "Biólogo e especialista em plantas medicinais"; "Sou Konrad Dantas, fundador da KondZilla").
4. **Em 3 s o espectador já sabe o tema e por que ficar.** Nos vencedores, a promessa do vídeo é uma pergunta ou um "você não sabe X", raramente uma oferta.
5. **Cartão final** com CTA (tela sólida, seta para o botão, print do perfil ou "Clique em Saiba mais"): **24 de 97 vídeos (25 %)**.

---

## 6. Texto na tela e legenda

| Estilo de legenda (vídeo, n = 97) | n | % | Mediana de dias |
|---|---|---|---|
| Caixa/tarja de título (fixa ou por bloco) | 35 | 36 % | 134 |
| Legenda simples (frase, 1–2 linhas) | 32 | 33 % | 138 |
| Palavra por palavra / palavra-chave gigante | 25 | 26 % | 132 |
| Sem legenda | 5 | 5 % | 1.140 (só vídeos de processo e de marca) |

No subconjunto de saúde (60 vídeos): tarja 22, frase 21, palavra por palavra 14, sem legenda 3.

**Regras de texto que saem da amostra**
1. **Uma tarja-título fixa** carrega o gancho do começo ao fim (10 anúncios com título fixo, todos vencedores). Exemplos:
   - "Não dá pra confiar em você assim." no topo, em serif sobre caixa preta translúcida;
   - "TEM R$ 10 MIL? NÃO FAÇA ISSO ERRADO" em tarja vermelha no topo;
   - template letterbox com o tema da aula no topo ("O MÉDICO QUE RECEITA CHÁS", "AULA DE LIBRAS · SENTIMENTOS", "'MY' OU 'MINE'").

   **Por que funciona:** quem chega no meio do vídeo entende o assunto na hora.
2. **Palavra-chave em outra cor**: verde, amarelo ou lilás. Aparece em quase todas as legendas dos vencedores do nicho de plantas; o verde da folha é o código visual do nicho.
3. **Nome popular + nome científico** como título (copaíba / *Copaifera langsdorffii*, urtiga-branca / *Urtica dioica*), no padrão de caixa-alta sem serifa + itálico. É o que dá cara de autoridade sem dizer "sou especialista".
4. **Legenda palavra por palavra** aparece em 26 % e **não** se destaca entre os vencedores. A frase de 1–2 linhas funciona igual e lê melhor.
5. **Densidade:**
   - **vídeo**: 1 frase-gancho + legenda;
   - **estático**: título + no máximo 3 a 5 bullets (o estático "tabela de preços", com dezenas de cursos, existe, mas é de faculdade EAD, não serve de modelo).

---

## 7. Layout e zonas seguras (9:16)

Padrões observados nos 86 vídeos 9:16:
- **Título no terço superior ou no centro** (y ≈ 15–45 % da altura) e **legenda no terço médio-baixo** (y ≈ 55–70 %). Nada de texto nos 20 % inferiores, onde ficam o botão e a copy do Reels.
- **Split vertical** (5 vencedores):
  - objeto ou b-roll na metade de cima e rosto na de baixo (livro de Freud em cima e professora embaixo; ilustração anatômica e médica; print de perfil do LinkedIn e selfie);
  - a metade de cima mostra o "o quê" e a de baixo o "quem".
- **Letterbox com título** (5): vídeo 1:1 ou 4:5 centralizado, faixa preta em cima com o tema e faixa embaixo com a palavra-chave. É barato de produzir e muito legível.
- **PiP / foto no canto** (2): foto antiga ou do "antes" pessoal no canto superior direito.
- **Lower third de credencial** (4): nome + profissão (+ CRM) entre 2 e 5 s.
- **Cartão final** em 25 %: fundo sólido ou foto desfocada, CTA grande no centro e seta para baixo.

**Para a Dra. Julia** (zona segura da skill): texto e rosto em x 65–888 e y 288–1248; os 672 px de baixo ficam livres. Os vencedores fazem exatamente isso.

---

## 8. Estáticos e carrosséis que duram

| Layout | Exemplos (dias no ar) | Como é |
|---|---|---|
| **Título do curso + foto editorial** | Formação em Plantas Medicinais (109 d); Horta Orgânica "Você não precisa ter 'mão para planta'" (24 d, estética editorial); Maquiagem Boticário (polaroid sobre caderno) | serif editorial com palavra em itálico colorido, foto real de ambiente, botão em pílula |
| **Retrato + credencial + título da aula** | CELS "MASTERCLASS MENOPAUSA… REPLAY EXCLUSIVO PARA MÉDICOS" com "MÉDICA Dra. Ana Leprevost CRM/PR … RQE …" (123 d); Dr. Higor Contel "MEDICINA INTEGRATIVA" com "CRM 233425/SP" no rodapé (201 d); XP "Aula liberada!" | retrato recortado de um lado e título em tarjas do outro; **credencial logo abaixo do nome** |
| **Programa / agenda da aula** | Tetra "Gestão & Liderança · GRATUITO · 4 aulas ao vivo" (01–04 numerados, serif didone); Full Cycle "DE DIA / À NOITE · 9 A 11 DE NOVEMBRO · Zoom ao vivo às 19h" | lista numerada de tópicos, data em versalete espaçado, botão contornado ou amarelo |
| **Cartão de lote / oferta** | Mr Olympia "LOTE 1 LIBERADO" com o "1" gigante (123 d); Filosofia "LOTE PROMOCIONAL · por apenas R$ 19,90" + "IMERSÃO ONLINE E AO VIVO · 17 DE OUTUBRO"; Starterpack "ÚLTIMOS INGRESSOS · SÁBADO 08h30"; Italiano Fácil "R$ 149/mês" | **número grande como elemento gráfico** (lote ou preço), data e hora numa linha só, CTA em botão |
| **Post-card estilo tweet** | Gran Cursos "URGENTE! Saiu o edital…" (127 d); Matheus Tomoto "Não discuta com pessoas sem passaporte…" (330 d) | avatar + @, frase de opinião, foto embaixo; parece post orgânico |
| **Carrossel educativo numerado** | Dissecando Questões "01 DE 06 … Mas quem te falou isso? … Spoiler: não é."; Dra. Patrícia Novak "Cuidados com recém-nascidos" (407 d, 1 dica por card); Tomoto "7 países… De 1 a 7, qual você escolheria?" (365 d) | capa que funciona sozinha, cabeçalho fixo (marca + autor), numeração, cada card termina puxando o próximo; a legenda pede resposta |
| **Carrossel de produto/catálogo** | sprays de aromaterapia (847 d), 1 cor por produto, callouts com seta | uma peça por card, a cor identifica |
| **HQ / diálogo** | Marcelo Teixeira, quadrinho de 2 personal trainers (113 d, 7 variações) | balões de fala, camisetas que dizem quem é quem |

**Regras para estático**
- **Uma ideia por peça.**
- **Rosto em 62 %** dos estáticos.
- **Número grande** (lote, preço ou data) quando a peça é de oferta.
- **Credencial embaixo do nome** quando é médico.
- **Botão desenhado** dentro da arte na maioria dos estáticos de curso ("INSCREVA-SE", "GARANTA SUA VAGA", "Quero meu certificado"). Esse item foi observado, não contado.

---

## 9. CTA e oferta para aula ao vivo paga e lançamento (lotes e datas)

**Subconjunto:** 48 anúncios de aula, masterclass, workshop, imersão, evento ou turma.
- 25 são gratuitos e 9 são pagos com preço, lote ou ingresso.
- Só **13** mostram a data no próprio criativo (os outros deixam a data na copy ou na página).

**O que os anúncios de evento pago fazem**
1. **Data e hora em uma linha, com o dia da semana:**
   - "SÁBADO · 08h30";
   - "9 A 11 DE NOVEMBRO · Zoom ao vivo às 19h";
   - "IMERSÃO ONLINE E AO VIVO · 17 DE OUTUBRO";
   - "Próxima terça-feira, ao vivo, às 15h".
2. **Lote como objeto gráfico:**
   - "LOTE 1 LIBERADO" com numeral gigante;
   - selo "LOTE PROMOCIONAL · por apenas R$ 19,90" no canto inferior do cartão final;
   - "[DESCONTO LOTE 1] · 20 E 21 DE OUTUBRO" na 1ª linha da copy.
3. **O formato da aula como argumento:**
   - "100% ao vivo";
   - "aula ao vivo, sem replay" (Lucas Félix, 144 d);
   - "É ao vivo e acabou. Quem ficar de fora, já era" (Rick Miura).

   **Para ela:** "ao vivo, sem gravação" é **fato oficial** e é a única escassez verdadeira, além da virada de lote.
4. **Preço grande, sem riscado, nos que duram:**
   - "R$ 149,00 /por mês";
   - "CURSO DE JARDINAGEM COM CERTIFICADO POR 10 REAIS".
   - O preço riscado ("De R$ 39,90 por R$ 19,90") aparece em 5 estáticos de faculdade EAD, e **é vetado para ela**.
5. **Urgência falsa é comum e vetada para ela:**
   - "Liberada por poucas horas uma aula gratuita" (4 anúncios de 2 anunciantes, 80–161 dias no ar, ou seja, "poucas horas" há meses);
   - "ÚLTIMOS INGRESSOS";
   - "última chance, poucas vagas";
   - "BLACK FRIDAY… o preço vai subir".
6. **Cartão final do lançamento**: fundo escuro ou sólido, título da aula entre aspas, nome do professor, data em versalete e selo de lote com preço (ver print 11).
7. **CTA:** "Saiba mais" é o botão-padrão.
   - Os vencedores **repetem o CTA falado e escrito** no fim: "Clica em Saiba mais", "Toca aqui embaixo", "Pra assistir, toca aqui embaixo", seta vermelha para o botão.
   - Grupo VIP no WhatsApp aparece em 3 lançamentos (Ana Veiga, Unhas da Tay, Black Vitalícia), como lista de espera antes da virada.

**Recomendação de calendário (aplicando o padrão)**

| Período | O que fazer |
|---|---|
| 19-10 a 01-11 | 3 criativos de oferta "Lote 1 · R$ 57 até 01-11" (cartão de lote, programa da aula, vídeo de 10 s) + 8 a 12 de conteúdo (pergunta, demonstração, lista) |
| 01-11 | troca para "Último dia do lote 1" (verdade) |
| 02-11 | novos cartões "Lote 2 · R$ 87 até 10-11" |
| 08-11 a 10-11 | "A aula é quarta, 11-11, às 20h" (retargeting com fala direta, como o anúncio de 14 variações do Prof. Kenny) |

---

## 10. O que engaja × o que converte

A biblioteca não mostra comentários nem salvamentos. Os sinais usados foram três: o botão de CTA, o pedido explícito de comentário e o tempo no ar dos anúncios de conteúdo.

| Objetivo | Sinais na amostra | Padrões |
|---|---|---|
| **Engajamento / alcance** | 28 anúncios com CTA "Acessar o perfil do Instagram" (24 de saúde), mediana de **505 dias**; 15 anúncios pedem comentário (13 % dos vencedores, 0 % dos curtos) | pergunta sem resposta imediata ("Que alimento será esse? Me diz nos comentários"); palavra-chave nos comentários ("Comente TSI", "Digite ROTINA", "Comenta SEGREDO"); carrossel-lista com pergunta final ("De 1 a 7, qual você escolheria?"); "Compartilhe com quem precisa"; mito × verdade; storytelling (o médico xingado por falar de uma planta) |
| **Conversão** | anúncios com "Saiba mais", WhatsApp ou "Comprar" e oferta clara; os que mais escalam testam ganchos (2 a 14 variações) | oferta legível (o quê, quando, quanto); demonstração do produto (o livro na mão, a tela do app, a aula na lousa); objeção respondida ("sem venda de curso no final", "Não é consulta"); CTA falado e escrito; cartão final |

**Leitura para ela**
- O que **engaja** (pergunta, curiosidade, lista, mito × fato) é também o que **dura**.
- O que **converte** precisa da oferta explícita, que tem prazo.
- **Use o conteúdo como gancho e a oferta no fim do vídeo e na página.** Os vencedores do nicho de plantas fazem assim: 47 % sem oferta no criativo, com a aula, o livro ou o programa no link.

---

## 11. Nicho de saúde e medicina: padrões que respeitam as regras dela

### 11.1 O que os vencedores fazem e que ela pode copiar
- **Nome popular + nome científico + planta real na mão** (copaíba 984 d, urtiga 899 d, cufea, arruda). É o padrão mais forte do nicho e combina com a "etiqueta de pote" da marca dela.
- **Diferença entre plantas parecidas**: "Erva cidreira ≠ Capim cidreira — você sabe a diferença?" (Julio Luchmann). Não promete nada, só ensina, e tem gancho forte.
- **"Nem toda planta deve ser usada do mesmo jeito"** (Julio Luchmann, no jardim apontando as plantas). Aqui o preparo é o assunto, não o efeito.
- **Credencial discreta e fixa**:
  - rodapé com "CRM/RQE" em todo quadro (Dra. Júlia Carone, 372 d);
  - "MÉDICA · Dra. Ana Leprevost · CRM/PR · RQE" sob o retrato (CELS);
  - "Dr. Higor Contel · CRM 233425/SP" no estático;
  - "Médico CRM 6655" no cartão final (Dr. César Barreto, 419 d).

  **Só 8 dos 152 fazem isso.** Para ela, que precisa disso por regra, vira diferencial.
- **Bastidor real** (cenário):
  - **estúdio ou escritório com estante**: 17 anúncios, 16 deles vencedores;
  - **cozinha real**: 10, sendo 8 vencedores;
  - **jardim ou horta**: 14.

  Ela tem a bancada e o sítio.
- **Aula-amostra dentro do anúncio** (Prof. Kenny ensinando na lousa, 800 d; aula de Libras inteira, 390 d; "aula completa" do eletricista, 1.416 d). Ela pode ensinar **uma regra de preparo** em 30–45 s e convidar para a aula.
- **Tom calmo, close, fundo liso** (Andrei Moreira, Thiago Sampaio): funciona para quem vende ensino, não espetáculo.

### 11.2 O que roda no nicho e é **vetado** para ela (contraexemplos na base)

| Padrão | Exemplo (dias no ar) | Regra que quebra | Versão permitida |
|---|---|---|---|
| Doença ou sintoma como alvo | "Gengibre aumenta a pressão... Será?" (1.113 d); "DOENÇAS QUE TEM RELAÇÃO COM OS MIOMAS!" (120 d); "Se você tem Endometriose…" (532 d); "Diabetes / Colesterol / Triglicérides…" (383 d) | doença como alvo | "[planta]: quem não deve usar" (pessoas que não devem usar, sem citar doença no gancho) |
| Promessa de efeito | "Essa planta aumenta as plaquetas e ajuda a tratar a dengue!" (598 d); "Pode curar 5 problemas" (768 d); "Troque seu antialérgico por esse matinho" (598 d) | efeito na saúde | "Chá de [planta]: a parte, a medida e o tempo" |
| Medo / alarme | "SEU INTESTINO ESTÁ PEDINDO SOCORRO!"; "Dizem que trata até CÂNCER, Será?" | medo + doença | "Chá de hibisco faz mal? Depende de quem toma." (pergunta do público, com fonte) |
| Depoimento / print de paciente | print de WhatsApp com teste de gravidez positivo (110 d); antes/depois de nutricionista | depoimento, antes/depois | demonstração na bancada |
| Urgência falsa | "Liberada por poucas horas" (161 d no ar) | urgência falsa | "Lote 1 até 01-11" (data real) |
| Órgão + promessa esotérica | "O Baço-Pâncreas e a Reflexão · Purifique com Hortelã Pimenta" (3 d) | órgão como alvo | — |

**Ponto importante:** vários desses anúncios estão no ar há mais de um ano. **A Meta deixa rodar, mas o CFM não permite.** Não use o tempo no ar desses anúncios como argumento para copiar.

---

## 12. 25 conceitos de criativo para a Dra. Julia

Para todos os conceitos:
- **Dados oficiais:** aula **"Chá do jeito certo"** · **quarta, 11-11, 20h (Brasília)** · **Google Meet** · **ao vivo, sem gravação** · **Lote 1 R$ 57 até 01-11** · **Lote 2 R$ 87 de 02-11 a 10-11**.
- **Credencial:** **"Dra. Julia Sahão · MÉDICA · CRM [UF] [nº]"** na tela nos primeiros 5 s e no cartão final (vídeo), ou sempre visível (estático).
- **Planta citada** leva o nome científico em itálico.
- **Proibido:** efeito na saúde, doença como alvo, medo, "segredo", preço riscado, gravação ou replay.
- **Padrão de origem:** o anúncio da base em que o conceito se inspira (id).

### Vídeo: conteúdo que dura (frio e quente)

**1. Erva-cidreira ≠ capim-cidreira**
- **Formato:** vídeo 9:16, 25–35 s.
- **Gancho (tela + fala):** "Erva-cidreira e capim-cidreira não são a mesma planta."
- **Estrutura:**
  - 0–2 s: as duas plantas lado a lado na bancada, mãos segurando cada uma;
  - 2–5 s: lower third com o nome e a credencial;
  - 5–20 s: etiqueta de pote de cada uma (*Melissa officinalis*, folha · *Cymbopogon citratus*, folha), com a diferença de folha e cheiro;
  - 20–28 s: "Na aula eu mostro como reconhecer e preparar cada uma";
  - cartão final de oferta.
- **Visual:** bancada creme, duas mudas reais, sinal "≠" desenhado em verde-mata.
- **Origem:** Julio Luchmann "Erva cidreira ≠ Capim cidreira" (1031027425937754).

**2. A planta na mão, colhida no sítio**
- **Formato:** vídeo 9:16, 20–30 s.
- **Gancho:** "Essa camomila eu plantei aqui. A parte que vai na xícara é só a flor."
- **Estrutura:**
  - 1º quadro: mão colhendo a flor, sem rosto;
  - 1,5 s: título "CAMOMILA · *Matricaria chamomilla*";
  - 3 s: ela aparece no canteiro e diz quanto se usa por xícara, com a pílula da fonte (Formulário Fitoterápico, Anvisa);
  - CTA falado: "É isso que eu faço ao vivo, na quarta, 11-11."
- **Visual:** canteiro do sítio, luz da manhã, close da mão.
- **Origem:** urtiga e copaíba do Autor da Própria Saúde (7007128202726833, 334899359537331), Minhas Plantas arruda (961417059739612).

**3. Caixinha de perguntas: folha fresca**
- **Formato:** vídeo 9:16, 15–25 s.
- **Gancho (card nativo "Faça uma pergunta"):** "Doutora, dá para fazer chá com a folha fresca?"
- **Estrutura:**
  - card sobre o rosto até 2 s;
  - resposta: "Dá. E a quantidade muda." Ela mostra as duas porções na mão (fresca × seca);
  - legenda em frase;
  - cartão final de oferta.
- **Visual:** cozinha dela, card branco do IG no terço superior.
- **Origem:** Laura Santos / Alice Salazar / Tenda São José (1386752260185896, 1458022619515785, 1059817049876962).

**4. "Faz mal?" com fonte (pergunta do público)**
- **Formato:** vídeo 9:16, 20–30 s.
- **Gancho:** "Chá de hibisco faz mal? Depende de quem toma e do remédio que a pessoa já usa."
- **Estrutura:**
  - barra de busca digitando a pergunta (0–2 s);
  - ela responde na ordem fato → por que confunde → quem não deve usar;
  - etiqueta *Hibiscus sabdariffa* · cálice;
  - pílula de fonte;
  - CTA.
- **Visual:** template `anuncio-faz-mal` da skill.
- **Origem:** "Gengibre aumenta a pressão... Será?" (788020639762798), mas **sem doença no gancho**.

**5. Lista numerada: as 3 coisas que mudam o chá**
- **Formato:** vídeo 9:16, 30–40 s.
- **Gancho:** "3 coisas que mudam o seu chá: a parte da planta, a medida e o tempo."
- **Estrutura:**
  - "1 · 2 · 3" fixos numa coluna à esquerda, acendendo um por vez;
  - b-roll de cada item (flor × folha, colher-medida, timer);
  - cartão final.
- **Visual:** tarja-título fixa no topo, números em Instrument Serif.
- **Origem:** "Passou dos 40 anos? Segue 3 exames" (735656498842763), "Três concursos…" (1798182148019677).

**6. Tese fixa no topo: infusão × decocção**
- **Formato:** vídeo 9:16, 30–45 s.
- **Gancho (tarja fixa o vídeo todo):** "A mesma planta, preparada do jeito errado, vira outro chá."
- **Estrutura:** ela demonstra a infusão (camomila, xícara tampada) e a decocção (cavalinha, panela) com a tarja-tese parada no topo; legenda em frase embaixo.
- **Visual:** caixa de título serif sobre a bancada, câmera alta.
- **Origem:** Lucas Félix "Não dá pra confiar em você assim." (2245448246191789).

**7. Aula-amostra em letterbox**
- **Formato:** vídeo 9:16 com miolo 1:1, 40–60 s.
- **Gancho:** "INFUSÃO OU DECOCÇÃO? ENTENDA EM 1 MINUTO" (faixa superior fixa).
- **Estrutura:**
  - 1 minuto de aula real na bancada;
  - faixa inferior com a palavra-chave do momento (INFUSÃO / DECOCÇÃO / TAMPA);
  - no fim: "A aula inteira é ao vivo, na quarta, 11-11, às 20h."
- **Visual:** faixas creme com texto verde-mata, miolo da bancada.
- **Origem:** Prof. Kenny "'MY' OU 'MINE'" (858694702827057), "O médico que receita chás" (573816098130360).

**8. Só o som da água (sem texto nos 3 s)**
- **Formato:** vídeo 9:16 ou 1:1, 8–12 s (público quente).
- **Gancho:** nenhum texto: água quente vertendo sobre a flor seca, tampa fechando, vapor.
- **Estrutura:**
  - 0–5 s: processo em close com som real;
  - 5–8 s: entra "Isso é uma infusão. Na aula eu explico por que tampar.";
  - 8–12 s: cartão de oferta.
- **Visual:** macro, luz lateral quente.
- **Origem:** Barão "chá preto" 7 s há 1.490 dias (8236879429685301), conservas sem texto (2154286522173002).

**9. Curiosidade com revelação: o hibisco certo**
- **Formato:** vídeo 9:16, 20–30 s.
- **Gancho:** "O hibisco do muro não é o hibisco do chá. Sabe qual parte vai na xícara?"
- **Estrutura:**
  - flor de hibisco ornamental na mão;
  - "me diz nos comentários antes de eu mostrar";
  - revela o cálice de *Hibiscus sabdariffa* e a etiqueta;
  - CTA.
- **Visual:** muro do sítio, depois a bancada.
- **Origem:** Vanessa Baad "Que alimento será esse?" (1341287610888562).

**10. Cravo em decocção**
- **Formato:** vídeo 9:16, 20–30 s.
- **Gancho:** "Cravo não é para jogar na água quente e esperar."
- **Estrutura:**
  - 1º quadro: cravos caindo na palma da mão;
  - etiqueta *Syzygium aromaticum* · botão floral;
  - ela mostra a panela e o tempo de fervura e diz de onde vem a informação;
  - CTA.
- **Visual:** close da mão, panela pequena, vapor.
- **Origem:** objeto na mão de Renan B. / Julio Luchmann (883074257104408, 1852240672401946), sem a promessa.

**11. Quem não deve usar (feito para envio)**
- **Formato:** vídeo 9:16, 25–35 s, ou carrossel.
- **Gancho:** "Antes de fazer chá de cavalinha, veja se você está nesta lista."
- **Estrutura:**
  - lista numerada (pessoas, não doenças, conforme a fonte);
  - "Manda para quem faz chá na sua família";
  - CTA.
- **Visual:** tarja-título fixa, etiqueta *Equisetum arvense*.
- **Origem:** listas numeradas vencedoras + "Compartilhe com quem precisa" (Autor da Própria Saúde).

**12. Babosa: uso externo**
- **Formato:** vídeo 9:16, 15–25 s.
- **Gancho:** "Babosa: o gel é para passar, não para tomar."
- **Estrutura:**
  - no canteiro, ela corta a folha e mostra o gel na mão (nenhum copo em cena);
  - etiqueta *Aloe vera* · gel da folha · uso externo;
  - CTA.
- **Visual:** canteiro, luz natural.
- **Origem:** demonstração na planta inteira (Autor da Própria Saúde, mamão), sem a promessa.

**13. Apresentação no sítio (para frio)**
- **Formato:** vídeo 9:16, 12–15 s.
- **Gancho:** "Eu sou a Julia, médica, e planto parte das plantas que uso."
- **Estrutura:**
  - caminhando no sítio;
  - lower third com o nome e a credencial no 2º segundo;
  - "Na quarta, 11-11, eu ensino ao vivo como preparar chá do jeito certo";
  - cartão final.
- **Visual:** câmera acompanhando, sem música alta.
- **Origem:** Dra. Paula Suzuki (691681016842204), Dra. Júlia Carone (1507668846931864).

**14. A tampa (demonstração de bancada, público quente)**
- **Formato:** vídeo 4:5, 10–15 s.
- **Gancho:** "Repara na tampa."
- **Estrutura:**
  - close da xícara tampada e do vapor na tampa;
  - ela levanta a tampa e devolve o líquido condensado à xícara;
  - "Na aula eu preparo na sua frente";
  - cartão de oferta.
- **Visual:** bancada, macro, voz baixa.
- **Origem:** Patrícia Stênico, mãos no 1º quadro (1023657693374870).

**15. Split: o objeto em cima, ela embaixo**
- **Formato:** vídeo 9:16, 25–35 s.
- **Gancho:** "Você tem camomila no armário e não sabe quanto usar por xícara?"
- **Estrutura:**
  - metade de cima: mãos abrindo o pote e pesando a flor;
  - metade de baixo: ela explica;
  - cartão final com selo "LOTE 1 · R$ 57 até 01-11".
- **Visual:** divisão em 50 %, legenda com palavra em verde.
- **Origem:** Filosofia "Você tem 'O mal-estar na Cultura' aí na sua estante" (1835726307785260).

**16. Objeção respondida: "nunca fiz chá de planta"**
- **Formato:** vídeo 9:16, 15–20 s.
- **Gancho (caixinha):** "Nunca fiz chá de planta. A aula serve para mim?"
- **Estrutura:**
  - "Serve. A gente começa pela parte da planta e pela medida.";
  - "É aula de preparo, não é consulta";
  - dados da aula;
  - CTA.
- **Visual:** card de pergunta + selfie calma.
- **Origem:** Gabriel Utzig "sem venda de curso no final" (3533656790135288), caixinhas.

### Vídeo: oferta e retargeting

**17. Oferta em 10 s**
- **Formato:** vídeo 9:16, 8–10 s (só público quente).
- **Gancho (tela):** "Aula ao vivo · Chá do jeito certo."
- **Estrutura:**
  - 0–2 s: xícara sendo servida;
  - 2–6 s: cartão "QUARTA · 11-11 · 20H · GOOGLE MEET";
  - 6–10 s: "LOTE 1 · R$ 57 até 01-11 · ao vivo, sem gravação" e botão "Garanta sua vaga".
- **Visual:** cartão creme com planta brotando da borda.
- **Origem:** Starterpack "SÁBADO · 08h30" (1402800088624740), Full Cycle (2010601123250305).

**18. Retargeting com fala direta**
- **Formato:** vídeo 4:5, 12–15 s, sem texto além da credencial e da legenda.
- **Gancho (fala):** "Você chegou a ver a página da aula. Ela é quarta, 11-11, às 20h, e é ao vivo."
- **Estrutura:** talking head, olhar na câmera, CTA falado.
- **Variações:** 3 falas (a data; "o que você leva da aula"; "ainda dá no lote 1 até 01-11").
- **Visual:** close na cozinha.
- **Origem:** Prof. Kenny, 14 variações (688654197622766).

**19. Virada de lote (verdade)**
- **Formato:** vídeo ou story 9:16, 6–10 s.
- **Gancho:**
  - em 01-11: "Hoje é o último dia do lote 1: R$ 57 até 23h59.";
  - em 02-11: "Lote 2 aberto: R$ 87 até 10-11."
- **Estrutura:** numeral do lote grande, data, botão.
- **Visual:** número "1" (ou "2") em Instrument Serif gigante, planta brotando atrás.
- **Origem:** Mr Olympia "LOTE 1 LIBERADO" (1390119339840470).

### Estático e carrossel

**20. Cartão de lote (oferta primeiro)**
- **Formato:** estático 4:5 e 9:16.
- **Título:** "Chá do jeito certo · aula ao vivo".
- **Hierarquia:**
  - "QUARTA · 11-11 · 20H" em versalete espaçado;
  - "LOTE 1" + **"R$ 57"** grande;
  - "até 01-11 · Google Meet · ao vivo, sem gravação";
  - botão;
  - credencial no rodapé.
- **Visual:** papel creme, planta recortada brotando do canto inferior.
- **Origem:** Filosofia, cartão final "Lote promocional" (1835726307785260), Olympia, Italiano Fácil.

**21. Programa da aula**
- **Formato:** estático 4:5.
- **Título:** "Chá do jeito certo · 5 plantas, 5 regras."
- **Hierarquia:**
  - 01 Camomila · a medida;
  - 02 Hibisco · a planta certa;
  - 03 Cavalinha · o tempo de uso;
  - 04 Cravo · estudo × tradição;
  - 05 Babosa · a parte e a via;
  - a lista pode ser trocada até a validação final;
  - data, lote e botão contornado "Garanta sua vaga →".
- **Visual:** serif editorial, fios finos, etiqueta de pote em miniatura em cada item.
- **Origem:** Tetra "Gestão & Liderança" (1932754267685361).

**22. Pergunta com fonte (modelo A)**
- **Formato:** estático 1:1 ou 4:5.
- **Título:** "Folha fresca ou seca? Muda a quantidade."
- **Hierarquia:** pergunta grande, resposta factual curta, pílula "Fonte: Formulário de Fitoterápicos da Farmacopeia Brasileira (Anvisa)", credencial, mini selo da aula.
- **Visual:** foto da bancada com as duas porções.
- **Origem:** Horta Orgânica "Você não precisa ter 'mão para planta'…" (28522558767373962).

**23. Retrato + credencial + título da aula**
- **Formato:** estático 4:5.
- **Título:** "Aula ao vivo com médica: Chá do jeito certo."
- **Hierarquia:**
  - retrato dela na bancada à esquerda;
  - "Dra. Julia Sahão · MÉDICA · CRM [UF] [nº]" logo abaixo do nome;
  - título em tarjas à direita;
  - "11-11 · 20h · Lote 1 R$ 57 até 01-11";
  - botão.
- **Visual:** fundo verde-mata, sem jaleco.
- **Origem:** CELS "MÉDICA Dra. Ana Leprevost CRM" (990551747199479).

**24. Carrossel numerado "5 plantas, 5 regras de preparo"**
- **Formato:** carrossel 4:5, 7 lâminas.
- **Capa:** "Chá caseiro: 5 regras que eu sigo antes de pôr a planta na água."
- **Estrutura:**
  - 01–05: uma planta por lâmina (etiqueta + regra de preparo + fonte), cada uma terminando com um gancho para a próxima ("e a próxima é a que mais confunde…");
  - 06: "Quem não deve usar";
  - 07: aula, data, lote, botão;
  - cabeçalho fixo "Dra. Julia Sahão · MÉDICA · CRM" e "01 DE 07";
  - legenda: "Qual dessas você já prepara? Me diz o número."
- **Origem:** Dissecando Questões "01 DE 06" (835452952738422), Dra. Patrícia Novak (1104534531307877), Tomoto "De 1 a 7, qual você escolheria?".

**25. Post-card com opinião (formato tweet)**
- **Formato:** estático 1:1 ou 4:5.
- **Texto:** "Chá de família é tradição. A medida não precisa ser no olho."
- **Hierarquia:** avatar + "Dra. Julia Sahão · MÉDICA · CRM [UF] [nº]", a frase, foto da xícara e da colher-medida na bancada; CTA na copy ("A aula é quarta, 11-11, às 20h").
- **Visual:** card branco, tipografia de post, foto real.
- **Origem:** Gran Cursos / Matheus Tomoto (2157763438350946, 1640535063594194).

**Distribuição sugerida para o teste inicial** (encaixa no plano de ~12 vídeos + 3 estáticos + 1 carrossel da skill)
- **Vídeos de conteúdo:** 1, 2, 4, 6, 7 e 9, com 2 ganchos cada.
- **Vídeos de oferta:** 17 e 18.
- **Estáticos:** 20, 21 e 23.
- **Carrossel:** 24.
- **Mais tarde:** conceitos 3, 5, 8, 10–16, 19, 22 e 25 entram na 2ª rodada ou nas viradas de lote.

---

## 13. Os 20 prints (pasta `ads-prints/`)

Cada imagem mostra o card do anúncio na biblioteca e os quadros de 0 s, 1,5 s, 3 s e do fim, com o cabeçalho de dias no ar, formato e gancho.

| # | Arquivo | Por que é instrutivo |
|---|---|---|
| 01 | Julio-Luchmann_1031027425937754 | "Erva cidreira ≠ Capim cidreira": comparação educativa, mesmo texto com vários ganchos |
| 02 | Autor-da-Propria-Saude_334899359537331 | nome popular + científico, b-roll macro, 984 dias |
| 03 | Autor-da-Propria-Saude_7007128202726833 | abre com a mão na planta, sem rosto, 899 dias |
| 04 | Autor-da-Propria-Saude_573816098130360 | letterbox com título fixo, gravação de Zoom de 11 min, 1.140 dias |
| 05 | Autor-da-Propria-Saude_457674446198282 | cartão final com as datas das aulas ao vivo, título em 2 tempos, 1.552 dias |
| 06 | Professor-Kenny_858694702827057 | aula-amostra na lousa para vender imersão gratuita ao vivo, 800 dias |
| 07 | Vanessa-Baad-Nutricionista_1341287610888562 | objeto oculto e pedido de comentário, 404 dias |
| 08 | Dra-Julia-Carone-Reumatologia_1507668846931864 | CRM/RQE no rodapé de todos os quadros, abertura no logo |
| 09 | Longevidade-Saudavel_990551747199479 | estático de masterclass médica com "MÉDICA · CRM · RQE" sob o retrato |
| 10 | Tetra-Educacao_1932754267685361 | estático de programa da aula ao vivo, serif editorial |
| 11 | Filosofia-Cultura-Politica_1835726307785260 | split objeto/rosto e cartão final de lote promocional com data |
| 12 | Full-Cycle_2010601123250305 | estrutura do evento (dia × noite) + datas em versalete |
| 13 | Horta-Organica_28522558767373962 | estático editorial contrarian, nicho de cultivo |
| 14 | Dra-Patricia-Novak_1104534531307877 | carrossel educativo de médica, 1 dica por lâmina |
| 15 | Dissecando-Questoes_835452952738422 | carrossel numerado "01 DE 06" com gancho no fim de cada lâmina |
| 16 | Alice-Salazar_1458022619515785 | caixinha de pergunta usada para mostrar o preço |
| 17 | Lucas-Felix_2245448246191789 | tese fixa no topo, aula ao vivo "sem replay" |
| 18 | Silvia-Araujo_2154286522173002 | demonstração sem texto nos 3 s, cartão final de CTA |
| 19 | Giovanna-Horcel_1178815609898133 | estética editorial "luxo" de médica, título em 2 tempos, 785 dias |
| 20 | terapiamilenar_1026538596556583 | estático de formação em plantas medicinais com cartão de preço |

---

## 14. Arquivos

- `criativos-dataset.csv`: 152 anúncios.
  - **Colunas:** id, link, anunciante, termo de busca, nicho, formato, data de início, dias no ar, variações, duração, gancho literal, tipo e categoria do gancho, densidade de texto, legenda (estilo e categoria), rosto no 1º quadro, objeto, cenário, paleta, tipografia, botão de CTA, oferta (texto e tags), prova, recursos de edição, CTA de comentário, 1ª linha da copy, grupo de nicho.
  - Separador `;` e codificação UTF-8 com BOM, para abrir direto no Excel.
- `ads-prints/`: 20 imagens (card do anúncio + quadros do vídeo).
- Para atualizar a seção 9 da skill (`references/criativos.md`), use as seções 0, 3, 9 e 11 deste estudo.
