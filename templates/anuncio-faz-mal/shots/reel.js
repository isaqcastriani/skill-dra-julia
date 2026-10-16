/* reel.js — anúncio "Chá de hibisco faz mal?" (template). Função pura de F. Ver ROTEIRO.md. */
(function () {
  const C = window.C, J = window.J, E = C.E, H = C.H, T = J.T, SHOT = window.SHOT;
  const R = n => 'recortes/' + n;
  const S12 = 100;                                   // início do deslize S1 → S2
  const wrapSlide = (inner, F, side) => {
    if (F < S12 || F > S12 + 16) return inner;
    const s = J.slide(F - S12, 0, { dur: 16, dir: -1, antecip: 0 }), tx = side === 'out' ? s.out : s.in;
    return C.mblur(`<div style="position:absolute;inset:0;transform:translateX(${tx.toFixed(1)}px)">${inner}</div>`, 0, s.blur);
  };

  // S1 · gancho: a busca
  SHOT({ id: 'S1', f0: 0, f1: S12 + 16, render(lf, F) {
    const scene = J.paper(F) + J.leak(.22) +
      J.plant(R('folha-hibisco.png'), lf, F, { x: 880, y: H + 40, w: 460, rot: -18, start: -12, seed: 2 }) +
      J.plant(R('folha-samambaia.png'), lf, F, { x: 120, y: H + 60, w: 520, rot: 24, start: -8, seed: 4 }) +
      J.say('você já pesquisou isso:', lf, { y: 560, size: 44, weight: 500, color: T.musgo, start: -18, ls: '0' }) +
      J.search('chá de hibisco faz mal?', lf, { y: 680, start: -14, typeAt: 4, enterAt: 52 }) +
      J.say('Depende de *quem* toma.', lf, { y: 920, size: 92, weight: 800, start: 64 });
    return wrapSlide(J.cam(scene, lf, S12 + 16, F, { push: .04 }), F, 'out');
  } });

  // S2 · a planta certa
  SHOT({ id: 'S2', f0: S12, f1: 262, render(lf, F) {
    const scene = J.paper(F, { base: T.paper2 }) +
      J.plant(R('hibisco-seco.png'), lf, F, { x: 700, y: 1420, w: 520, rot: 6, start: -4, dur: 30, seed: 8 }) +
      J.plant(R('folha-hibisco.png'), lf, F, { x: 300, y: 1500, w: 430, rot: -12, start: 2, dur: 30, seed: 9 }) +
      J.title(['O hibisco', 'do chá *não é*', 'o do muro.'], lf, { y: 330, size: 112, start: 4, stagger: 3 }) +
      J.sci('Hibiscus sabdariffa', lf, { x: 120, y: 1560, start: 36, sub: 'parte usada: o cálice', size: 64 });
    return wrapSlide(J.cam(scene, lf, 162, F, { push: .05 }), F, 'in');
  } });

  // S2→S3 · o chá enche a tela
  SHOT({ id: 'X23', f0: 236, f1: 276, z: 20, render: lf => J.teaFill(lf, { cover: 22, hold: 4, clear: 14 }) });

  // S3 · a bancada: mãos servindo + etiqueta com fonte
  SHOT({ id: 'S3', f0: 258, f1: 404, render(lf, F) {
    const scene = J.photo('fotos/maos.jpg', lf, F, { n: 146, pos: '50% 45%' }) +
      `<div style="position:absolute;inset:0;background:linear-gradient(0deg,${J.rgba(T.mata, .82)} 0%,${J.rgba(T.mata, 0)} 52%)"></div>` +
      J.steam(F, 690, 1010, { a: .28 });
    const fg = J.source(`Fonte: <i style="font-family:${J.SERIF};color:${T.folha}">IN 159/2022</i>, Anvisa`, lf, { y: 300, start: 26 }) +
      J.label(lf, F, { x: 110, y: 470, w: 600, start: 14, nome: 'Hibisco', sci: 'Hibiscus sabdariffa', linhas: [['Parte', 'cálice seco'], ['Preparo', 'infusão, tampada'], ['Fonte', 'Anvisa · IN 159/2022']] }) +
      J.say('Na aula eu mostro a parte certa e *quem não deve usar.*', lf, { y: 1250, size: 70, weight: 700, color: '#FBF6EA', keyColor: '#FBF6EA', under: T.folha, start: 48 });
    return J.cam(scene, lf, 146, F, { push: .03 }) + fg;
  } });

  // S4 · ela, a aula e a assinatura
  SHOT({ id: 'S4', f0: 390, f1: 514, render(lf, F) {
    const fadeIn = C.prog(lf, 0, 14, E.outCubic);
    const scene = J.paper(F) +
      J.plant(R('folha-palmeira.png'), lf, F, { x: 150, y: 1180, w: 380, rot: -34, start: 10, seed: 3 }) +
      J.plant(R('folha-galho.png'), lf, F, { x: 930, y: 700, w: 400, rot: 26, start: 14, seed: 6 }) +
      J.arch('fotos/hero.jpg', lf, { x: 220, y: 420, w: 640, h: 800, start: 4, n: 124 }) +
      J.plant(R('folha-camomila.png'), lf, F, { x: 820, y: 1270, w: 230, rot: 8, start: 24, seed: 1 }) +
      J.title(['Aula *ao vivo*'], lf, { y: 285, size: 104, start: 10 }) +
      J.say('11-11 · 20h · Google Meet', lf, { y: 1265, size: 46, weight: 600, ls: '.04em', color: T.ink, start: 30 }) +
      J.signature(lf, { y: 1370, start: 40, size: 56 });
    return `<div style="position:absolute;inset:0;opacity:${fadeIn.toFixed(3)}">${J.cam(scene, lf, 124, F, { push: .04 })}</div>`;
  } });

  // S5 · cartela final (abre como cartão recuado, igual à LP)
  SHOT({ id: 'S5', f0: 500, f1: 599, z: 2, render(lf, F) {
    const open = C.prog(lf, 0, 18, E.apple), r = 180 * (1 - open), side = 4 * (1 - open);
    const scene = J.photo('fotos/final.jpg', lf, F, { n: 100, pos: '45% 50%' }) +
      `<div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,${J.rgba(T.mata, .55)},${J.rgba(T.mata, .2)} 70%),linear-gradient(0deg,${J.rgba(T.mata, .8)},transparent 50%)"></div>` +
      J.title(['Te vejo', '*na bancada.*'], lf, { y: 300, size: 118, start: 8, color: '#FBF6EA', keyColor: '#FBF6EA' }) +
      J.ticket(lf, { y: 760, start: 22 }) +
      J.cta('Garantir ingresso', lf, { y: 1240, start: 36, tapAt: 70 }) +
      `<div style="position:absolute;left:0;right:0;top:1420px;text-align:center;font-family:${J.SANS};font-size:24px;font-weight:600;letter-spacing:.22em;color:${T.folha};opacity:${C.prog(lf, 40, 58).toFixed(3)}">DRA. JULIA SAHÃO · ${C.BRAND.crm}</div>`;
    return `<div style="position:absolute;inset:0;clip-path:inset(0% ${side.toFixed(2)}% 0% ${side.toFixed(2)}% round ${r.toFixed(1)}px ${r.toFixed(1)}px 0 0)">${J.cam(scene, lf, 100, F, { push: .035 })}</div>`;
  } });

  // acabamento: grão + vinheta, uma vez, por cima
  SHOT({ id: 'FIN', f0: 0, f1: 599, z: 99, render: (lf, F) => J.finish(F) });
})();
