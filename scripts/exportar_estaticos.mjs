// exportar_estaticos.mjs PECAS.html PASTA_SAIDA [nome1,nome2]
// Exporta cada .art[data-nome] do HTML como PNG com 1080 px de largura (4:5 → 1080×1350, 9:16 → 1080×1920).
import { createRequire } from 'module';
import path from 'path';
import fs from 'fs';
import { pathToFileURL } from 'url';

const require = createRequire(import.meta.url);
let pw;
for (const m of ['playwright', path.join(process.env.APPDATA || '', 'npm', 'node_modules', 'playwright')]) { try { pw = require(m); break; } catch {} }
if (!pw) { console.error('playwright não encontrado: npm i -g playwright && npx playwright install chromium'); process.exit(2); }

const [src, out = 'saida', only] = process.argv.slice(2);
if (!src) { console.error('uso: node exportar_estaticos.mjs pecas.html saida/ [nome1,nome2]'); process.exit(2); }
fs.mkdirSync(out, { recursive: true });
const browser = await pw.chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 2000 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.resolve(src)).href, { waitUntil: 'load' });
await page.evaluate(() => document.body.classList.add('export'));
await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode().catch(() => {}))); });
const filtro = only ? only.split(',') : null;
for (const el of await page.$$('.art[data-nome]')) {
  const nome = await el.getAttribute('data-nome');
  if (filtro && !filtro.includes(nome)) continue;
  const f = path.join(out, `${nome}.png`);
  await el.screenshot({ path: f });
  console.log('→', f);
}
await browser.close();
