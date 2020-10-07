# pillow.py - make thumbnail version of picture

from PIL import Image
import sys
import os

def mk_thumbnail(img, size):
    fn, _ = os.path.splitext(img)
    filename = f'{fn}_thumbnail.png'
    output = f'bbuehl_site/static/thumbnail/{filename}'

    i = Image.open(img)
    resize = i.size[0]

    if i.size[0] > i.size[1]:
        resize = i.size[1]

    i_resize = i.resize(size, box=(0, 0, resize, resize))
    i_resize.save(output, quality=95)

    return filename


if __name__ == '__main__':
    size = (400, 400)
    img = sys.argv[1]
    print(mk_thumbnail(img, size))
