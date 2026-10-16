#!/bin/bash
# render_all.sh [TOTAL] [OUTD] — render completo em 3 blocos paralelos FORA do OneDrive, repetindo até ter todos os quadros.
cd "$(dirname "$0")/.."
TOTAL=${1:-$(python -c "import json;print(json.load(open('project.json'))['TOTAL'])")}
OUTD=${2:-/c/Users/frank/render_tmp/$(basename "$(pwd)")}
mkdir -p "$OUTD"; A=$(( TOTAL/3 )); B=$(( 2*TOTAL/3 ))
for tent in 1 2 3 4 5 6; do
  (OUT=$OUTD node render.mjs full 0 $((A-1)) 2>>$OUTD/err.txt & OUT=$OUTD node render.mjs full $A $((B-1)) 2>>$OUTD/err.txt & OUT=$OUTD node render.mjs full $B $((TOTAL-1)) 2>>$OUTD/err.txt & wait)
  n=$(ls $OUTD/f*.png 2>/dev/null | wc -l); echo "tentativa $tent: $n/$TOTAL quadros"
  [ "$n" -ge "$TOTAL" ] && break
done
echo "$OUTD"
