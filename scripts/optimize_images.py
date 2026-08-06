#!/usr/bin/env python3
"""Optimize images in the images/ folder.

Creates `optimized_{name}` variants and WebP versions where supported.
Run: python scripts/optimize_images.py
"""
from pathlib import Path
from PIL import Image, UnidentifiedImageError

ROOT = Path(__file__).resolve().parents[1]
IMAGES_DIR = ROOT / 'images'

def optimize_image(path: Path):
    name = path.name
    if name.startswith('thumb_') or name.startswith('optimized_'):
        return
    out_optimized = IMAGES_DIR / f'optimized_{name}'
    out_webp = IMAGES_DIR / (path.stem + '.webp')
    try:
        with Image.open(path) as im:
            im_format = im.format or path.suffix.replace('.', '').upper()
            # Convert PNG with alpha to RGBA before saving webp
            if im.mode in ('P', 'RGBA'):
                conv = 'RGBA'
            else:
                conv = 'RGB'
            im_conv = im.convert(conv)

            # Save optimized original-format copy
            save_kwargs = {}
            if im_format in ('JPEG', 'JPG'):
                save_kwargs['quality'] = 80
                im_conv.save(out_optimized, format='JPEG', optimize=True, **save_kwargs)
            elif im_format == 'PNG':
                im_conv.save(out_optimized, format='PNG', optimize=True)
            else:
                # fallback: save JPEG compressed
                im_conv.save(out_optimized, format='JPEG', quality=80, optimize=True)

            print(f'Optimized: {out_optimized.name}')

            # Save WebP version
            try:
                im_conv.save(out_webp, format='WEBP', quality=80)
                print(f'Created WebP: {out_webp.name}')
            except Exception as e:
                print(f'WebP conversion failed for {name}: {e}')

    except UnidentifiedImageError:
        print(f'Skipping unknown image type: {name}')
    except Exception as e:
        print(f'Failed to optimize {name}: {e}')

def main():
    if not IMAGES_DIR.exists():
        print('No images folder found.')
        return
    for p in sorted(IMAGES_DIR.iterdir()):
        if p.is_file():
            optimize_image(p)

if __name__ == '__main__':
    main()
