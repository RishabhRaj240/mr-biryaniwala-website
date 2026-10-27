#!/usr/bin/env bash
set -e

# ==============================================================================
# MR. BIRIYANIWALA - ASSET PROCESSING PIPELINE (FFmpeg & cwebp)
# Builds media/ from raw assets/
# ==============================================================================

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

ASSETS_DIR="$ROOT_DIR/assets"
MEDIA_DIR="$ROOT_DIR/media"
HERO_DIR="$MEDIA_DIR/hero"
V_DIR="$MEDIA_DIR/v"
IMG_DIR="$MEDIA_DIR/img"

mkdir -p "$HERO_DIR" "$V_DIR" "$IMG_DIR"

echo "=== [1/4] Processing Stills (WebP quality 82) ==="

STILLS=(
  "biryani:Sealed"
  "makhani:Butter_chicken"
  "tandoori:Tandoori_chicken"
  "seekh:Lamb_seekh"
  "tikka:Paneer_tikka_on"
  "dal:Dal_makhani"
  "naan:Garlic_butter"
  "lassi:Glass_of_mango"
  "charcoal:Charcoal"
  "feast:Feast"
)

for item in "${STILLS[@]}"; do
  name="${item%%:*}"
  prefix="${item#*:}"
  src=$(ls "$ASSETS_DIR"/$prefix*.jpg 2>/dev/null | head -n 1)
  dst="$IMG_DIR/${name}.webp"
  if [ -n "$src" ] && [ -f "$src" ]; then
    echo "  -> Generating $dst from $(basename "$src")"
    tmp_png="/tmp/tmp_${name}.png"
    ffmpeg -y -i "$src" \
      -vf "delogo=x=2590:y=1385:w=100:h=100,scale='min(1920,iw)':-2" \
      -vframes 1 "$tmp_png" < /dev/null 2>/dev/null
    cwebp -q 82 "$tmp_png" -o "$dst" 2>/dev/null
    rm -f "$tmp_png"
  else
    echo "  [WARN] Still source for $name ($prefix) not found!"
  fi
done

echo "=== [2/4] Processing Hero Scrub Clips (GOP keyint=2 for instant scrub) ==="

HEROES=(
  "biryani:Biryani"
  "makhani:Makhani"
  "tandoori:Chilli"
  "seekh:Ghee"
  "tikka:Paneer_tikka_ingredients"
  "dal:Ingredients"
  "naan:Melted"
  "lassi:Mango"
)

for item in "${HEROES[@]}"; do
  dish="${item%%:*}"
  prefix="${item#*:}"
  src=$(ls "$ASSETS_DIR"/$prefix*.mp4 2>/dev/null | head -n 1)

  if [ -n "$src" ] && [ -f "$src" ]; then
    echo "  -> Processing Hero clip: $dish ($(basename "$src"))"
    dst_desk="$HERO_DIR/${dish}.mp4"
    dst_mobi="$HERO_DIR/${dish}-m.mp4"

    # Desktop: 1280w CRF 26, keyint=2:min-keyint=1:scenecut=0:bframes=0
    ffmpeg -y -i "$src" \
      -vf "delogo=x=1120:y=560:w=110:h=105,scale=1280:-2" \
      -c:v libx264 -crf 26 -pix_fmt yuv420p -an -movflags +faststart \
      -x264opts "keyint=2:min-keyint=1:scenecut=0:bframes=0" \
      "$dst_desk" < /dev/null 2>/dev/null

    # Mobile: 720w CRF 27, keyint=2:min-keyint=1:scenecut=0:bframes=0
    ffmpeg -y -i "$src" \
      -vf "delogo=x=1120:y=560:w=110:h=105,scale=720:-2" \
      -c:v libx264 -crf 27 -pix_fmt yuv420p -an -movflags +faststart \
      -x264opts "keyint=2:min-keyint=1:scenecut=0:bframes=0" \
      "$dst_mobi" < /dev/null 2>/dev/null

    # First-frame poster
    ffmpeg -y -i "$dst_desk" -ss 00:00:00 -vframes 1 -q:v 2 "$HERO_DIR/${dish}.jpg" < /dev/null 2>/dev/null
  else
    echo "  [WARN] Hero source for $dish ($prefix) not found!"
  fi
done

echo "=== [3/4] Processing Films (Ambient films + posters) ==="

FILMS=(
  "biryani:Biryani"
  "makhani:Makhani"
  "tandoori:Chilli"
  "seekh:Ghee"
  "tikka:Paneer_tikka_ingredients"
  "dal:Ingredients"
  "naan:Melted"
  "lassi:Mango"
  "spices:Chilli"
  "ingredients:Ingredients"
  "gravy-pour:Makhani"
)

for item in "${FILMS[@]}"; do
  film="${item%%:*}"
  prefix="${item#*:}"
  src=$(ls "$ASSETS_DIR"/$prefix*.mp4 2>/dev/null | head -n 1)

  if [ -n "$src" ] && [ -f "$src" ]; then
    echo "  -> Processing Film: $film ($(basename "$src"))"
    dst="$V_DIR/${film}.mp4"
    poster="$V_DIR/${film}.jpg"

    ffmpeg -y -i "$src" \
      -vf "delogo=x=1120:y=560:w=110:h=105,scale=1280:-2" \
      -c:v libx264 -crf 26 -pix_fmt yuv420p -an -movflags +faststart \
      "$dst" < /dev/null 2>/dev/null

    ffmpeg -y -i "$dst" -ss 00:00:00 -vframes 1 -q:v 2 "$poster" < /dev/null 2>/dev/null
  fi
done

# Steam film
echo "  -> Processing Film: steam"
ffmpeg -y -loop 1 -i "$ASSETS_DIR/Sealed_copper_handi_releasing_steam_2K_20261027111241.jpg" \
  -vf "delogo=x=2590:y=1385:w=100:h=100,scale=1280:-2" \
  -t 5 -c:v libx264 -crf 26 -pix_fmt yuv420p -an -movflags +faststart \
  "$V_DIR/steam.mp4" < /dev/null 2>/dev/null
ffmpeg -y -i "$V_DIR/steam.mp4" -ss 00:00:00 -vframes 1 -q:v 2 "$V_DIR/steam.jpg" < /dev/null 2>/dev/null

# Storefront / feast film
echo "  -> Processing Film: storefront"
ffmpeg -y -loop 1 -i "$ASSETS_DIR/Feast_spread_on_slate_board_2K_20261027111626.jpg" \
  -vf "delogo=x=2590:y=1385:w=100:h=100,scale=1280:-2" \
  -t 5 -c:v libx264 -crf 26 -pix_fmt yuv420p -an -movflags +faststart \
  "$V_DIR/storefront.mp4" < /dev/null 2>/dev/null
ffmpeg -y -i "$V_DIR/storefront.mp4" -ss 00:00:00 -vframes 1 -q:v 2 "$V_DIR/storefront.jpg" < /dev/null 2>/dev/null

echo "=== [4/4] Pipeline Complete! ==="
echo "Total media directory size:"
du -sh "$MEDIA_DIR"
ls -lh "$HERO_DIR"
