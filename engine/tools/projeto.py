"""projeto.py [--w 1080 --h 1920 --seg 20] — atualiza project.json e regrava project.js.
Ex.: 4:5 de 15 s →  python tools/projeto.py --w 1080 --h 1350 --seg 15"""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _proj import proj, salvar_proj
P = proj(); a = sys.argv[1:]
def opt(k):
    return a[a.index(k) + 1] if k in a else None
if opt('--w'): P['W'] = int(opt('--w'))
if opt('--h'): P['H'] = int(opt('--h'))
if opt('--seg'): P['TOTAL'] = round(float(opt('--seg')) * P['FPS_NUM'] / P['FPS_DEN'])
if opt('--total'): P['TOTAL'] = int(opt('--total'))
salvar_proj(P); print(f"project.json → {P['W']}×{P['H']}, {P['TOTAL']} quadros ({P['TOTAL']*P['FPS_DEN']/P['FPS_NUM']:.2f} s)")
