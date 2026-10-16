/* lib/julia.js — receitas de motion da Dra. Julia Sahão ("Bancada na mata") sobre o motor determinístico (core.js).
 * Tudo é FUNÇÃO PURA do quadro: cada receita recebe lf (quadro local do shot) e devolve uma string HTML.
 * Números = os medidos nos vídeos do estúdio (CUREON institucional/reels, N5, AAMG): ver references/motion.md.
 * Regra da casa: entrada = apple/outCubic · saída = inCubic · câmera = inOutSine · forma = inOutQuint · único overshoot = outBackSoft.
 * Proibido aqui (hype): tremor, split cromático, flash branco cheio, pancada > 1,08×, motion blur > 40 px.
 * API em window.J. Coordenadas no palco nativo (PROJECT.W × PROJECT.H). Zona segura 9:16: x 90–990, y 285–1560.
 */
(function () {
  const C = window.C, E = C.E, W = C.W, H = C.H;
  const T = {
    paper: '#F4EFE4', paper2: '#ECE5D6', paper3: '#DFD9D1', card: '#FBF8F1', ink: '#2F2B24', tinta: '#39342C',
    musgo: '#7E7A63', oliva: '#5E6637', folha: '#BCC68D', mostarda: '#DFB054', urucum: '#C63806',
    mata: '#1F2D1D', mata2: '#283A26', cream: '#EFE8D6',
  };
  E.apple = t => 1 - Math.pow(1 - t, 4.2);              // ≈ cubic-bezier(.22,1,.36,1)
  E.outBackSoft = t => E.outBack(t, 0.9);               // overshoot quase imperceptível
  const SANS = "'Epilogue',Arial,sans-serif", SERIF = "'Instrument Serif',Georgia,serif", HAND = "'Caveat',cursive", TARJA = "'Montserrat',Arial,sans-serif";
  const IMG = n => `assets/img/${n}`;
  const rgba = (hex, a) => { const [r, g, b] = C.hexToRgb(hex); return `rgba(${r},${g},${b},${(+a).toFixed(3)})`; };
  const nz = (x, s = 0) => C.noise1(x, s) * 2 - 1;      // ruído −1..1, contínuo
  const f2 = v => (+v).toFixed(2);
  const P = (lf, a, d, ease) => C.prog(lf, a, a + d, ease);
  const blurCss = b => (b > 0.1 ? `filter:blur(${f2(b)}px);` : '');

  /* ---------- fundo e acabamento ---------- */
  // papel creme com manchas de luz muito lentas (mesh) — o "ar" do sítio
  function paper(F, o = {}) {
    const base = o.base || T.paper, sp = 0.004;
    const blobs = o.blobs || [[T.folha, .18, .22, .55, .35], [T.mostarda, .82, .12, .5, .22], [T.folha, .7, .85, .6, .25]];
    const g = blobs.map(([c, x, y, r, a], i) => `radial-gradient(${Math.round(r * W)}px ${Math.round(r * W * .8)}px at ${f2((x + .05 * Math.sin(F * sp + i * 1.7)) * 100)}% ${f2((y + .04 * Math.cos(F * sp * .8 + i * 2.3)) * 100)}%,${rgba(c, a)} 0%,${rgba(c, 0)} 100%)`);
    return `<div style="position:absolute;inset:0;background:${g.join(',')},${base}"></div>`;
  }
  const forest = (F, o = {}) => paper(F, Object.assign({ base: T.mata, blobs: [[T.folha, .2, .15, .6, .16], [T.mostarda, .85, .9, .55, .12]] }, o));
  // grão de papel (troca a cada 2 quadros) + vinheta de tinta — SEMPRE por cima de tudo, uma vez só (shot de z alto)
  function finish(F, o = {}) {
    const k = Math.floor(F / 2), x = Math.floor(C.hash(k, 1) * 200), y = Math.floor(C.hash(k, 2) * 200);
    const grain = `<div style="position:absolute;inset:0;opacity:${o.grain ?? .06};mix-blend-mode:overlay;pointer-events:none;overflow:hidden"><svg width="${W + 200}" height="${H + 200}" style="position:absolute;left:${-x}px;top:${-y}px"><rect width="100%" height="100%" filter="url(#grain)"/></svg></div>`;
    const vig = `<div style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 80% 75% at 50% 48%,${rgba(T.ink, 0)} 55%,${rgba(T.ink, o.vignette ?? .22)} 100%)"></div>`;
    return grain + vig + (o.guides || /guias=1/.test(location.search) ? guides() : '');
  }
  // luz quente de fim de tarde (screen)
  const leak = (a = .3, x = .82, y = .14, c = T.mostarda, r = .6) =>
    `<div style="position:absolute;inset:0;mix-blend-mode:screen;opacity:${a};background:radial-gradient(${r * W}px ${r * W * .7}px at ${x * 100}% ${y * 100}%,${rgba(c, .9)} 0%,${rgba(c, 0)} 70%)"></div>`;
  // guias de zona segura (só para conferir stills: index.html?guias=1)
  function guides() {
    const z = 'rgba(198,56,6,.22)';
    return `<div style="position:absolute;inset:0;pointer-events:none;background:linear-gradient(${z},${z}) top/100% 250px no-repeat,linear-gradient(${z},${z}) bottom/100% 360px no-repeat,linear-gradient(${z},${z}) right 0 top 1100px/180px 460px no-repeat"></div><div style="position:absolute;left:90px;right:90px;top:285px;bottom:${H - 1560}px;border:2px dashed rgba(198,56,6,.6)"></div>`;
  }

  /* ---------- câmera ---------- */
  // câmera que respira: push +3–6 % no plano inteiro (inOutSine) + deriva de 5–6 px; nunca parada
  function breath(lf, n, F, o = {}) {
    const push = o.push ?? .045, s0 = o.from ?? 1;
    return { scale: s0 + push * E.inOutSine(C.clamp(lf / Math.max(1, n))), tx: 6 * nz(F * .012, 3) + (o.tx || 0), ty: 5 * nz(F * .012, 7) + (o.ty || 0), ox: o.ox ?? W / 2, oy: o.oy ?? H / 2 };
  }
  const cam = (inner, lf, n, F, o) => C.camera(inner, breath(lf, n, F, o));
  // deslize de papel (troca de cena): pan de 1 tela em 16 F inOutQuint + antecipação; blur ≤ 32 px
  function slide(lf, start, o = {}) {
    const d = o.dur ?? 16, dir = o.dir ?? -1, a = o.antecip ?? 24;
    const ant = C.kf(lf, [[start - 10, 0], [start, -dir * a, E.inOutSine]]);
    const p = P(lf, start, d, E.inOutQuint), v = Math.sin(Math.PI * C.clamp((lf - start) / d));
    return { out: dir * W * p + (lf < start ? ant : 0), in: dir * W * (p - 1), blur: Math.min(32, v * 32), p };
  }

  /* ---------- texto ---------- */
  const esc = C.esc;
  // tokens: "*palavra" = palavra-chave (800 + sublinhado de folha); "_palavra" = itálico serif (nome científico)
  // marcação: *palavra-chave pode ter várias palavras* · _nome científico_ (também atravessa palavras)
  function parse(text) {
    let key = false, sci = false;
    return text.split(/\s+/).filter(Boolean).map(raw => {
      let w = raw;
      if (w[0] === '*') { key = true; w = w.slice(1); }
      if (w[0] === '_') { sci = true; w = w.slice(1); }
      const t = { w, key, sci };
      if (/\*[.,!?:;]*$/.test(w)) { t.w = w.replace(/\*([.,!?:;]*)$/, '$1'); key = false; }
      if (/_[.,!?:;]*$/.test(t.w)) { t.w = t.w.replace(/_([.,!?:;]*)$/, '$1'); sci = false; }
      return t;
    });
  }
  function leafLine(p, color = T.oliva, wpx = 7) {
    return `<svg viewBox="0 0 100 12" preserveAspectRatio="none" style="position:absolute;left:-2%;bottom:-.16em;width:104%;height:.26em;overflow:visible"><path d="M2 8 C 22 3, 48 2, 70 5 S 92 9, 98 4" pathLength="100" fill="none" stroke="${color}" stroke-width="${wpx}" stroke-linecap="round" vector-effect="non-scaling-stroke" stroke-dasharray="100" stroke-dashoffset="${f2(100 * (1 - p))}"/></svg>`;
  }
  /* say — frase palavra a palavra (calma): cada palavra 18 F outCubic, blur 12→0, sobe 18 px.
   * Sem locução: start + per (4 F). Com locução: o.times = [F global de cada palavra] (Whisper) e lead 3 F.
   * o: {x, y (topo do bloco), w, size, weight, color, keyColor, align, lh, start, per, dur, times, F, outAt, under (cor do sublinhado)} */
  function say(text, lf, o = {}) {
    const ws = parse(text);
    const dur = o.dur ?? 18, per = o.per ?? 4, start = o.start ?? 0, bl = o.blur ?? 12, dy = o.rise ?? 18;
    const html = ws.map((t, i) => {
      const t0 = o.times ? o.times[i] - (o.F - lf) - (o.lead ?? 3) : start + i * per;
      const p = P(lf, t0, dur, E.outCubic);
      let blur = (1 - p) * bl, y = (1 - p) * dy, op = p;
      if (o.outAt != null) { const q = P(lf, o.outAt + i, 14, E.inCubic); blur += q * 12; y -= q * 10; op *= 1 - q; }
      const u = t.key ? P(lf, t0 + dur + 4, 20, E.apple) : 0;
      const st = t.key ? `font-weight:800;color:${o.keyColor || o.color || T.ink};` : t.sci ? `font-family:${SERIF};font-style:italic;font-weight:400;letter-spacing:0;color:${o.sciColor || T.oliva};` : '';
      return `<span style="position:relative;display:inline-block;white-space:pre;opacity:${f2(op)};transform:translateY(${f2(y)}px);${blurCss(blur)}${st}">${esc(t.w)}${t.key && o.under !== false ? leafLine(u, o.under || T.oliva) : ''}</span>${i < ws.length - 1 ? ' ' : ''}`;
    }).join('');
    return block(html, o);
  }
  function block(inner, o = {}) {
    const align = o.align || 'center', x = o.x ?? 90, w = o.w ?? (W - 2 * x);
    return `<div style="position:absolute;left:${x}px;top:${o.y ?? H * .5}px;width:${w}px;text-align:${align};font-family:${SANS};font-size:${o.size ?? 72}px;font-weight:${o.weight ?? 700};line-height:${o.lh ?? 1.08};letter-spacing:${o.ls ?? '-0.03em'};color:${o.color || T.ink};${o.extra || ''}">${inner}</div>`;
  }
  /* title — título em caixa alta que SOBE DE DENTRO da máscara: 16 F outExpo, desloc. 0,95×corpo, blur 8→0, stagger 3 F.
   * lines: ['O chá é', '*simples.'] ("*" = 800 em oliva; o resto 300). o: {x,y,w,size,align,start,stagger,color,keyColor,outAt} */
  function title(lines, lf, o = {}) {
    const size = o.size ?? 128, st = o.stagger ?? 3; let k = 0;
    const html = lines.map(line => `<div style="display:block;white-space:nowrap">` + parse(line).map(t => {
      const i = k++, p = P(lf, (o.start ?? 0) + i * st, o.dur ?? 16, E.outExpo);
      let y = (1 - p) * .95 * size, op = Math.min(1, p * 3), blur = (1 - p) * 8;
      if (o.outAt != null) { const q = P(lf, o.outAt + i, 12, E.inCubic); y -= q * .6 * size; op *= 1 - q; }
      const sty = t.key ? `font-weight:800;letter-spacing:-.045em;color:${o.keyColor || T.oliva}` : `font-weight:300;color:${o.color || T.ink}`;
      return `<span style="display:inline-block;overflow:hidden;vertical-align:top;padding:.2em .02em .06em;margin:-.2em 0 -.06em"><span style="display:inline-block;transform:translateY(${f2(y)}px);opacity:${f2(op)};${blurCss(blur)}${sty}">${esc(t.w)}</span></span>`;
    }).join(' ') + `</div>`).join('');
    return block(html, Object.assign({ size, lh: .92, ls: '-.035em', weight: 300 }, o, { extra: 'text-transform:uppercase;' + (o.extra || '') }));
  }

  /* ---------- peças ---------- */
  // busca digitada (gancho do ângulo "faz mal?"): pílula .94→1 em 14 F apple; digita a 20 car/s; cursor pisca a cada 15 F; Enter = 1→.94→1
  function search(text, lf, o = {}) {
    const y = o.y ?? 760, w = o.w ?? 900, x = (W - w) / 2, pin = P(lf, o.start ?? 0, 14, E.apple);
    const t0 = (o.start ?? 0) + (o.typeAt ?? 12), n = C.clamp(Math.floor(((lf - t0) / C.FPS) * (o.cps ?? 20)), 0, text.length);
    const typing = n < text.length && lf >= t0, caretOn = typing || Math.floor(lf / 15) % 2 === 0;
    const ent = o.enterAt != null ? C.kf(lf, [[o.enterAt, 1], [o.enterAt + 3, .94, E.outQuad], [o.enterAt + 12, 1, E.outBack]]) : 1;
    const s = (.94 + .06 * pin) * ent;
    return `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:136px;border-radius:999px;background:#fff;box-shadow:0 40px 70px -40px ${rgba(T.mata, .55)},inset 0 0 0 2px ${rgba(T.ink, .08)};opacity:${f2(Math.min(1, pin * 1.6))};transform:scale(${f2(s)});display:flex;align-items:center;gap:26px;padding:0 48px;font-family:${SANS};font-size:${o.size ?? 46}px;font-weight:500;color:${T.ink};letter-spacing:-.01em">
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="${T.musgo}" stroke-width="2.2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>
      <span style="white-space:pre">${esc(text.slice(0, n))}<span style="display:inline-block;width:3px;height:1.05em;vertical-align:-.15em;margin-left:3px;background:${T.urucum};opacity:${caretOn ? 1 : 0}"></span></span></div>`;
  }
  /* planta recortada que BROTA de uma âncora (base): clip de baixo p/ cima em 28 F apple + escala .92→1 da base; depois balança ±1,2°.
   * o: {x, y (ponto da base), w, rot, start, dur, sway, flip, seed, z, fromEdge:{dx,dy}} */
  function plant(name, lf, F, o = {}) {
    const p = P(lf, o.start ?? 0, o.dur ?? 28, E.apple), s = .92 + .08 * p;
    const sway = (o.sway ?? 1.2) * nz(F * .02, o.seed ?? 5), br = 1 + .015 * Math.sin(F / 90 * Math.PI * 2 + (o.seed || 0));
    const dx = o.fromEdge ? (1 - p) * (o.fromEdge.dx || 0) : 0, dy = o.fromEdge ? (1 - p) * (o.fromEdge.dy || 0) : 0;
    let out = 1; if (o.outAt != null) out = 1 - P(lf, o.outAt, o.outDur ?? 14, E.inCubic);
    return `<div style="position:absolute;left:${f2(o.x - o.w / 2 + dx)}px;top:0;width:${o.w}px;height:${f2(o.y + dy)}px;display:flex;align-items:flex-end;z-index:${o.z || 0};opacity:${f2(out)}">
      <img src="${IMG(name)}" style="width:100%;display:block;transform-origin:50% 100%;transform:rotate(${f2((o.rot || 0) + sway)}deg) scale(${f2(s * br)})${o.flip ? ' scaleX(-1)' : ''};clip-path:inset(${f2((1 - p) * 100)}% 0 0 0);filter:drop-shadow(0 26px 22px ${rgba(T.mata, .3)})"></div>`;
  }
  /* etiqueta de pote com mola: 1,06→1 outBackSoft em 10 F, blur 10(1−p)², desce 30 px; pouso 1→1,02→1; brilho a 110° 4 F depois.
   * o: {x, y, w, nome, sci, linhas:[[rótulo, valor]], start, rot} */
  function label(lf, F, o = {}) {
    const st = o.start ?? 0, p = P(lf, st, 10, E.outBackSoft), pc = C.clamp(p);
    const land = C.kf(lf, [[st + 10, 1], [st + 12, 1.02, E.outQuad], [st + 20, 1, E.outBack]]);
    const s = (1.06 - .06 * p) * land, y = (o.y ?? 900) - 30 * (1 - E.outCubic(pc)), blur = 10 * (1 - pc) ** 2;
    const sheen = P(lf, st + 14, 16, E.inOutSine), w = o.w ?? 600;
    let out = 1; if (o.outAt != null) out = 1 - P(lf, o.outAt, 12, E.inCubic);
    const rows = (o.linhas || []).map(([k, v]) => `<div style="display:flex;gap:22px;padding:8px 0"><b style="flex:none;width:150px;font-size:21px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${T.ink};padding-top:5px">${esc(k)}</b><span style="font-size:29px;color:${T.tinta};line-height:1.25">${v}</span></div>`).join('');
    return `<div style="position:absolute;left:${o.x ?? (W - w) / 2}px;top:${f2(y)}px;width:${w}px;transform:rotate(${f2((o.rot ?? -2) + .6 * nz(F * .03, 11))}deg) scale(${f2(s)});opacity:${f2(Math.min(1, pc * 2) * out)};${blurCss(blur)}">
      <div style="position:relative;overflow:hidden;border-radius:30px;background:${T.card};padding:40px 44px 34px;box-shadow:0 50px 80px -46px ${rgba(T.mata, .6)},0 0 0 1.5px ${rgba(T.ink, .07)}">
        <div style="position:absolute;inset:10px;border:2px dashed ${T.paper3};border-radius:22px"></div>
        <p style="position:relative;font-size:20px;font-weight:700;letter-spacing:.2em;color:${T.musgo}">ETIQUETA DO POTE</p>
        <p style="position:relative;font-size:76px;font-weight:800;letter-spacing:-.035em;color:${T.ink};line-height:1;margin-top:14px">${esc(o.nome || '')}</p>
        <p style="position:relative;font-family:${SERIF};font-style:italic;font-size:50px;color:${T.oliva};margin:2px 0 16px">${esc(o.sci || '')}</p>
        <div style="position:relative;border-top:2px dashed ${T.paper3};padding-top:10px">${rows}</div>
        <div style="position:absolute;top:-20%;bottom:-20%;width:34%;left:${f2(-50 + 184 * sheen)}%;transform:skewX(-20deg);background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.55),rgba(255,255,255,0));opacity:${f2(Math.sin(Math.PI * sheen) * .8)}"></div>
      </div></div>`;
  }
  /* chá que enche (transição): superfície com onda (amp 14 px, λ ≈ 360 px) sobe e cobre a tela em `cover` F inOutQuint,
   * segura `hold` F e escoa para baixo em `clear` F inCubic revelando o plano seguinte. Use como shot de z alto. */
  function teaFill(lf, o = {}) {
    const cover = o.cover ?? 22, hold = o.hold ?? 4, clear = o.clear ?? 14;
    const up = P(lf, 0, cover, E.inOutQuint), down = P(lf, cover + hold, clear, E.inCubic);
    const level = H * (1 - up) + (H + 80) * down - 40 * up * (1 - down);
    const wave = (ph, amp, lam) => { let d = `M0 ${f2(level)}`; for (let x = 0; x <= W; x += 30) d += ` L${x} ${f2(level + amp * Math.sin(x / lam * Math.PI * 2 + ph))}`; return d + ` L${W} ${H + 200} L0 ${H + 200} Z`; };
    const c1 = o.color || T.mostarda, c2 = o.deep || '#C98A3A';
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="position:absolute;inset:0;overflow:visible"><defs><linearGradient id="teaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
      <path d="${wave(lf * .16 + 1.3, 18, 300)}" fill="${c1}" opacity=".55" transform="translate(0 -26)"/><path d="${wave(lf * .12, 14, 360)}" fill="url(#teaG)"/></svg>`;
  }
  /* arco que revela a foto: a máscara sobe de baixo (36 F apple) com o topo em arco; foto com push 1,035→1,10 no plano todo */
  function arch(src, lf, o = {}) {
    const x = o.x ?? 190, y = o.y ?? 420, w = o.w ?? 700, h = o.h ?? 880, p = P(lf, o.start ?? 0, o.dur ?? 36, E.apple);
    const push = 1.035 + .065 * E.inOutSine(C.clamp(lf / (o.n ?? 240))), r = w / 2;
    return `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;clip-path:inset(${f2((1 - p) * 100)}% 0 0 0 round ${r}px ${r}px 34px 34px);box-shadow:0 60px 90px -50px ${rgba(T.mata, .6)}">
      <img src="${IMG(src)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${o.pos || '50% 30%'};transform:scale(${f2(push)})"></div>`;
  }
  // foto em tela cheia com push e (opcional) duotom de herbário → cor por máscara radial (46 F) — "herbário vira cor"
  function photo(src, lf, F, o = {}) {
    const n = o.n ?? 180, s = 1.035 + (o.push ?? .065) * E.inOutSine(C.clamp(lf / n));
    const im = (extra = '') => `<img src="${IMG(src)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${o.pos || '50% 40%'};transform:scale(${f2(s)});${extra}">`;
    if (!o.herbario) return im();
    const r = 1650 * P(lf, o.colorAt ?? 20, 52, E.inOutSine);
    const m = `radial-gradient(circle ${f2(r)}px at ${o.cx ?? '50%'} ${o.cy ?? '45%'},#000 70%,transparent 100%)`;
    return im('filter:url(#herbario)') + `<div style="position:absolute;inset:0;-webkit-mask-image:${m};mask-image:${m}">${im()}</div>`;
  }
  // nome científico como anotação de herbário: linha 18 F apple; nome com tracking .08→0, blur 6→0 em 20 F; família 6 F depois
  function sci(name, lf, o = {}) {
    const st = o.start ?? 0, pl = P(lf, st, 18, E.apple), pn = P(lf, st + 8, 20, E.apple), pf = P(lf, st + 14, 18, E.apple);
    const x = o.x ?? 120, y = o.y ?? 1180, lx = o.lineFrom;
    const line = lx ? `<svg width="${W}" height="${H}" style="position:absolute;inset:0;overflow:visible"><path d="M${lx[0]} ${lx[1]} Q ${(lx[0] + x) / 2} ${lx[1] - 40}, ${x - 10} ${y + 30}" fill="none" stroke="${rgba(T.ink, .4)}" stroke-width="2.5" pathLength="100" stroke-dasharray="100" stroke-dashoffset="${f2(100 * (1 - pl))}"/></svg>` : '';
    return line + `<div style="position:absolute;left:${x}px;top:${y}px;text-align:${o.align || 'left'};width:${o.w ?? 860}px">
      <p style="font-family:${SERIF};font-style:italic;font-size:${o.size ?? 62}px;color:${o.color || T.oliva};letter-spacing:${f2(.08 * (1 - pn))}em;opacity:${f2(pn)};${blurCss(6 * (1 - pn))}">${esc(name)}</p>
      ${o.sub ? `<p style="font-family:${SANS};font-size:28px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${o.subColor || T.musgo};opacity:${f2(pf)};transform:translateY(${f2(10 * (1 - pf))}px);margin-top:6px">${esc(o.sub)}</p>` : ''}</div>`;
  }
  // nota manuscrita (1 por vídeo): escrita a 13 car/s, linha de base oscila ±1 px por letra; seta desenha em 14 F
  function hand(text, lf, o = {}) {
    const n = C.clamp(((lf - (o.start ?? 0)) / C.FPS) * (o.cps ?? 13), 0, text.length);
    const letters = [...text].map((ch, i) => `<span style="display:inline-block;white-space:pre;transform:translateY(${f2((C.hash(i, 9) - .5) * 2)}px);opacity:${f2(C.clamp(n - i))}">${esc(ch)}</span>`).join('');
    const pa = P(lf, (o.start ?? 0) + text.length / (o.cps ?? 13) * C.FPS, 14, E.outCubic);
    const arrow = o.arrow ? `<svg width="120" height="90" viewBox="0 0 120 90" style="display:inline-block;vertical-align:middle;overflow:visible"><path d="M8 20 C 50 10, 90 30, 96 70 M80 58 L96 72 L108 54" fill="none" stroke="${o.color || T.oliva}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="${f2(100 * (1 - pa))}"/></svg>` : '';
    return `<div style="position:absolute;left:${o.x ?? 120}px;top:${o.y ?? 1300}px;transform:rotate(${o.rot ?? -3}deg);font-family:${HAND};font-weight:600;font-size:${o.size ?? 72}px;color:${o.color || T.oliva};white-space:nowrap">${letters}${arrow}</div>`;
  }
  // pílula de fonte ("Fonte: Memento Fitoterápico, Anvisa, p. 63"): outBackSoft 17 F, .86→1, blur 12→0
  function source(html, lf, o = {}) {
    const p = P(lf, o.start ?? 0, 17, E.outBackSoft), pc = C.clamp(p);
    let out = 1; if (o.outAt != null) out = 1 - P(lf, o.outAt, 10, E.inCubic);
    return `<div style="position:absolute;left:${o.x ?? 90}px;top:${o.y ?? 300}px;transform-origin:left center;transform:scale(${f2(.86 + .14 * p)});opacity:${f2(Math.min(1, pc * 2) * out)};${blurCss(12 * (1 - pc))}">
      <div style="display:inline-flex;gap:12px;align-items:center;background:${rgba(T.mata, .86)};color:${T.cream};border-radius:999px;padding:16px 28px 14px;font-family:${SANS};font-size:${o.size ?? 30}px;font-weight:500">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${T.folha}" stroke-width="2"><path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4M8 12h8M8 16h6"/></svg><span>${html}</span></div></div>`;
  }
  // vapor que sobe (ambiente para xícara/bule): 4 fios, ciclo 70 F, sobem ~170 px, blur 8 px
  function steam(F, x, y, o = {}) {
    let out = '';
    for (let i = 0; i < (o.n ?? 4); i++) {
      const ph = ((F + i * 17) % 70) / 70, op = Math.sin(ph * Math.PI) * (o.a ?? .32), yo = -ph * 170;
      let d = `M${x + (i - 1.5) * 26} ${y + yo}`;
      for (let k = 1; k <= 6; k++) d += ` Q ${x + (i - 1.5) * 26 + 20 * nz(F * .03 + i + k, i)} ${y + yo - k * 22 + 11}, ${x + (i - 1.5) * 26 + 14 * nz(F * .025 + i * 2 + k, i + 3)} ${y + yo - k * 22}`;
      out += `<path d="${d}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" opacity="${f2(op)}"/>`;
    }
    return `<svg width="${W}" height="${H}" style="position:absolute;inset:0;overflow:visible;filter:blur(${o.blur ?? 8}px)">${out}</svg>`;
  }
  // tarja dos reels dela (fundo branco, colchete preto, texto urucum, Montserrat 800): a barra varre da esquerda em 10 F
  function tarja(text, lf, o = {}) {
    const p = P(lf, o.start ?? 0, 10, E.outCubic), pt = P(lf, (o.start ?? 0) + 5, 10, E.outCubic);
    return `<div style="position:absolute;left:${o.x ?? 100}px;top:${o.y ?? 560}px;clip-path:inset(0 ${f2((1 - p) * 100)}% 0 0);background:#fff;padding:22px 30px 18px 48px;max-width:${o.w ?? 860}px;font-family:${TARJA};font-weight:800;font-size:${o.size ?? 68}px;line-height:1.04;color:${o.color || T.urucum}">
      <div style="position:absolute;left:0;top:0;bottom:0;width:22px;border:9px solid #111;border-right:0"></div><span style="opacity:${f2(pt)}">${text.split('\n').map(esc).join('<br>')}</span></div>`;
  }
  // assinatura: folha brota (22 F apple) e as letras abrem a partir dela (28 F apple, .7→1, blur 16→0, stagger 2,5 F); CRM 10 F depois
  function signature(lf, o = {}) {
    const st = o.start ?? 0, cx = o.x ?? W / 2, y = o.y ?? 1330, dark = o.dark, col = dark ? T.cream : T.ink;
    const pl = P(lf, st, 22, E.apple), name = 'Julia Sahão';
    const letters = [...name].map((ch, i) => { const p = P(lf, st + 14 + i * 2.5, 28, E.apple); return `<span style="display:inline-block;white-space:pre;transform:scale(${f2(.7 + .3 * p)});opacity:${f2(p)};${blurCss(16 * (1 - p))}">${esc(ch)}</span>`; }).join('');
    const pd = P(lf, st + 12, 20, E.apple), pc = P(lf, st + 44, 18, E.apple);
    return `<div style="position:absolute;left:0;right:0;top:${y}px;text-align:center;font-family:${SANS};color:${col}">
      <svg width="64" height="64" viewBox="0 0 24 24" style="display:block;margin:0 auto 14px;transform:scale(${f2(.06 + .94 * E.outBackSoft(pl))});opacity:${f2(Math.min(1, pl * 3))}"><path d="M12 2c5 4 7 9 4 15-1 2-3 4-4 5-1-1-3-3-4-5C5 11 7 6 12 2z" fill="${T.folha}"/><path d="M12 6v15" stroke="${T.mata}" stroke-width="1.3"/></svg>
      <p style="font-size:${o.size ?? 62}px;line-height:1;letter-spacing:-.03em"><span style="font-weight:300;opacity:${f2(pd)}">Dra. </span><span style="font-weight:800">${letters}</span></p>
      <p style="margin-top:14px;font-size:24px;font-weight:600;letter-spacing:.24em;color:${dark ? T.folha : T.musgo};opacity:${f2(pc)};transform:translateY(${f2(8 * (1 - pc))}px)">${esc(C.BRAND.crm || 'MÉDICA · CRM [UF] [nº]')}</p></div>`;
  }
  // botão CTA com toque: entra .94→1 outBack(1,2) 12 F; dedo chega em 20 F; toque 1→.94→1; onda
  function cta(text, lf, o = {}) {
    const st = o.start ?? 0, p = P(lf, st, 12, t => E.outBack(t, 1.2)), pc = C.clamp(p), w = o.w ?? 640, x = (W - w) / 2, y = o.y ?? 1400;
    const tap = o.tapAt ?? st + 34, press = C.kf(lf, [[tap, 1], [tap + 3, .94, E.outQuad], [tap + 12, 1, E.outBack]]);
    const fx = C.kf(lf, [[tap - 20, W * .78], [tap, x + w * .7, E.inOutQuad]]), fy = C.kf(lf, [[tap - 20, H * .95], [tap, y + 60, E.inOutQuad]]);
    const fp = C.kf(lf, [[tap, 1], [tap + 2, .78, E.outQuad], [tap + 10, 1, E.outBack]]), fop = P(lf, tap - 20, 6);
    const fill = P(lf, tap + 2, 18, E.inOutQuint);
    const rip = lf >= tap ? C.ripple(x + w * .7, y + 60, P(lf, tap, 16), { r: 120, color: rgba(T.cream, .7), width: 4 }) : '';
    return `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:120px;border-radius:999px;background:${T.mata};overflow:hidden;transform:scale(${f2((.94 + .06 * p) * press)});opacity:${f2(Math.min(1, pc * 2))};display:flex;align-items:center;justify-content:space-between;padding:0 16px 0 52px;box-shadow:0 30px 50px -26px ${rgba(T.mata, .7)}">
        <div style="position:absolute;left:-20%;width:140%;height:260%;top:${f2(100 - 160 * fill)}%;background:${T.mostarda};border-radius:42% 46% 0 0"></div>
        <span style="position:relative;font-family:${SANS};font-size:34px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:${fill > .5 ? T.mata : T.cream}">${esc(text)}</span>
        <span style="position:relative;width:88px;height:88px;border-radius:50%;background:${T.folha};display:grid;place-items:center"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="${T.mata}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(${f2(-45 * fill)}deg)"><path d="M5 12h13M13 6l6 6-6 6"/></svg></span></div>${rip}
      <div style="position:absolute;left:${f2(fx - 34)}px;top:${f2(fy - 34)}px;width:68px;height:68px;border-radius:50%;background:${rgba('#ffffff', .85)};box-shadow:0 10px 30px ${rgba(T.mata, .35)};transform:scale(${f2(fp)});opacity:${f2(fop * (1 - P(lf, tap + 16, 10)))}"></div>`;
  }
  // ingresso (lote): cartão com picote; lote vigente em folha. o: {y, lote:{n,preco,ate}, start}
  function ticket(lf, o = {}) {
    const st = o.start ?? 0, p = P(lf, st, 14, E.outBackSoft), pc = C.clamp(p), L = o.lote || C.BRAND.lotes[0], w = 900, x = (W - w) / 2;
    return `<div style="position:absolute;left:${x}px;top:${o.y ?? 980}px;width:${w}px;display:grid;grid-template-columns:1.25fr 1fr;border-radius:36px;overflow:hidden;background:${T.card};box-shadow:0 60px 90px -50px ${rgba(T.mata, .65)};transform:translateY(${f2(40 * (1 - E.outCubic(pc)))}px) scale(${f2(.96 + .04 * p)});opacity:${f2(Math.min(1, pc * 2))};font-family:${SANS}">
      <div style="padding:40px 40px 36px;border-right:3px dashed ${T.paper3}"><p style="font-size:20px;font-weight:700;letter-spacing:.18em;color:${T.musgo}">AULA AO VIVO · ${esc(C.BRAND.aula.data)} · ${esc(C.BRAND.aula.hora)}</p><p style="font-size:58px;font-weight:800;letter-spacing:-.04em;line-height:.95;text-transform:uppercase;color:${T.ink};margin-top:12px">Chá do<br>jeito certo</p></div>
      <div style="padding:40px 36px 36px;background:${T.folha}"><p style="font-size:20px;font-weight:700;letter-spacing:.16em;color:${T.ink}">LOTE ${L.n} · ATÉ ${esc(L.ate)}</p><p style="font-size:132px;font-weight:800;letter-spacing:-.06em;line-height:1;color:${T.ink};margin-top:6px"><span style="font-size:40px;vertical-align:top;position:relative;top:18px;margin-right:6px">R$</span>${L.preco}</p></div></div>`;
  }

  window.J = { T, E, SANS, SERIF, HAND, TARJA, IMG, rgba, nz, P, paper, forest, finish, leak, guides, breath, cam, slide, say, block, title, search, plant, label, teaFill, arch, photo, sci, hand, source, steam, tarja, signature, cta, ticket, leafLine };
  window.PRELOAD = (window.PRELOAD || []).concat(['hero.jpg', 'bio.jpg', 'maos.jpg', 'xicaras.jpg', 'final.jpg'].map(n => IMG('fotos/' + n)));
})();
