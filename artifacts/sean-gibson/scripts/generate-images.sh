#!/bin/sh
# Regenerates the responsive image derivatives in attached_assets/derived/.
# Re-run after replacing any source photograph. Requires macOS `sips`.
#
# Widths are chosen from how each image is actually displayed, not from the
# source file. The source photographs stay untouched as the masters.
set -eu

root=$(cd "$(dirname "$0")/../../.." && pwd)
src="$root/attached_assets"
out="$src/derived"
mkdir -p "$out"

q=82

gen() { # gen <source> <basename> <widths...>  — plain resize, keeps source ratio
  source_file="$1"; name="$2"; shift 2
  for w in "$@"; do
    sips -s format jpeg -s formatOptions "$q" --resampleWidth "$w" \
      "$source_file" --out "$out/$name-$w.jpg" >/dev/null
  done
}

band() { # band <source> <basename> <widths...>  — resize and centre-crop to 21/9
  # PhotoBand renders these in a fixed aspect-[21/9] box with object-cover, so
  # anything outside that ratio is downloaded and then thrown away. Cropping at
  # build time is pixel-identical on screen. If the band's ratio ever changes,
  # change the divisor here and re-run.
  source_file="$1"; name="$2"; shift 2
  for w in "$@"; do
    h=$(( w * 9 / 21 ))
    sips -s format jpeg -s formatOptions "$q" --resampleWidth "$w" \
      --cropToHeightWidth "$h" "$w" \
      "$source_file" --out "$out/$name-$w.jpg" >/dev/null
  done
}

# Hero portrait: rendered at 320-380 CSS px, and hidden entirely below md.
gen "$src/Gibson_01a_1776325555130.jpg" hero 320 380 640 760

# Snapdragon Stadium: full-bleed band, max 1232 CSS px. Source is 1439 wide.
band "$src/image_1776436835400.png" stadium 760 1120 1439

# GovNet panel: same band. The source is a 1280x1706 portrait, so the band shows
# less than a third of it; cropping saves more here than re-compression did.
band "$src/1675168183288_1776353956820.jfif" govnet 760 1120 1280

echo "Derivatives written to $out"
ls -l "$out" | awk 'NR>1 {printf "  %7.1f kB  %s\n", $5/1024, $9}'
