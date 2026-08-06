#!/usr/bin/env python3
"""
Generate thumbnail images for the `images/` folder.

Creates thumbnails with prefixes `thumb_{w}_` for widths in SIZES.
Usage:
  pip install -r requirements.txt
  python scripts/generate_thumbnails.py
"""
import os
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMAGES_DIR = ROOT / 'images'
SIZES = [64, 128, 400, 800]

def make_thumbnail(src_path: Path, width: int):
    dest_name = f"thumb_{width}_{src_path.name}"
    dest = IMAGES_DIR / dest_name
    if dest.exists():
        return dest
    try:
        with Image.open(src_path) as im:
            # preserve aspect ratio
            wpercent = (width / float(im.width))
            hsize = int((float(im.height) * float(wpercent)))
            im = im.convert('RGBA') if im.mode in ('P', 'RGBA') else im.convert('RGB')
            im = im.resize((width, hsize), Image.LANCZOS)
            # save with same format as input
            save_kwargs = {}
            if dest.suffix.lower() in ('.jpg', '.jpeg'):
                save_kwargs['quality'] = 85
            im.save(dest, **save_kwargs)
            print(f"Created {dest.relative_to(ROOT)}")
            return dest
    except Exception as e:
        print(f"Failed to create thumbnail for {src_path}: {e}")
        return None

def main():
    if not IMAGES_DIR.exists():
        print(f"Images folder not found: {IMAGES_DIR}")
        return
    for img in IMAGES_DIR.iterdir():
        if img.is_file() and not img.name.startswith('thumb_'):
            for w in SIZES:
                # skip very large size if image is small
                if img.stat().st_size == 0:
                    continue
                try:
                    make_thumbnail(img, w)
                except Exception as e:
                    print(f"Error processing {img}: {e}")

if __name__ == '__main__':
    main()
