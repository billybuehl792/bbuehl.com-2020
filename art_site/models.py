# models.py - database structure

from art_site import db


class ArtPiece(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False)
    descr = db.Column(db.Text, nullable=False)
    image = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f'ArtPiece("{self.title}")'


class DevProject(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False)
    descr = db.Column(db.Text, nullable=False)
    link = db.Column(db.String(120))

    def __repr__(self):
        return f'DevProject("{self.title}")'
