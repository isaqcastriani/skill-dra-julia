/* manifest.js — lista os arquivos de shots deste vídeo (carregados em ordem). */
['reel.js'].forEach(f => document.write(`<script src="shots/${f}"><\/script>`));
