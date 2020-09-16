#!python3
# pillow.py - make thumbnail version of picture

from art_site import app
from PIL import Image
import os
import sys

def mk_thumbnail(img, size):
    fn, _ = os.path.splitext(img)
    filename = f'{fn}_thumbnail.png'
    output = os.path.join(app.root_path, 'static/thumbnail', filename)

    i = Image.open(img)
    resize = i.size[0]

    if i.size[0] > i.size[1]:
        resize = i.size[1]

    i_resize = i.resize(size, box=(0, 0, resize, resize))
    i_resize.save(output, quality=95)

    return filename


if __name__ == '__main__':
    size = (300, 300)
    try:
        img = sys.argv[1]
        print(mk_thumbnail(img, size))
    except:
        print('Enter valid image')
