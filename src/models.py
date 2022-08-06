import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from eralchemy import render_er
from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()

class Direccion(db.Model):
    __tablename__ = 'direccion'
    id = db.Column(db.Integer, primary_key=True)
    nombre_calle = db.Column(db.String(120), unique=False, nullable=False)
    numero_calle = db.Column(db.Integer, unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "nombre_calle": self.nombre_calle,
            "numero_calle": self.numero_calle,
        }

class Empresa(db.Model):
    __tablename__ = 'empresa'
    id = db.Column(db.Integer, primary_key=True)
    nombre_empresa = db.Column(db.String(80), unique=True, nullable=False)
    cantidad_trabajadores = db.Column(db.Integer, unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "nombre_empresa": self.nombre_empresa,
            "cantidad_trabajadores":self.cantidad_trabajadores,
            # do not serialize the password, its a security breach
        }


class Usuario(db.Model):
    __tablename__ = 'usuario'
    id = db.Column(db.Integer, primary_key=True)
    nombre_usuario = db.Column(db.String(80), unique=False, nullable=False)
    apellido_usuario = db.Column(db.String(80), unique=False, nullable=False)
    telefono = db.Column(db.Integer, unique=True, nullable=False)
    skype = db.Column(db.String(80), unique=True, nullable=True)
    facebook = db.Column(db.String(80), unique=True, nullable=True)
    twitter = db.Column(db.String(80), unique=True, nullable=True)
    instagram = db.Column(db.String(80), unique=True, nullable=True)
    linkedin = db.Column(db.String(80), unique=True, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    empresa_id = db.Column(db.Integer, db.ForeignKey('empresa.id'), unique = False, nullable = False)
    direccion_id = db.Column(db.Integer, db.ForeignKey('direccion.id'), unique = False, nullable = False)
    empresa = db.relationship('Empresa')
    direccion = db.relationship('Direccion')
    

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "empresa_id": self.empresa_id,
            "direccion_id": self.direccion_id,
            # do not serialize the password, its a security breach
        }


class Reporte(db.Model):
    __tablename__ = 'reporte'
    id = db.Column(db.Integer, primary_key=True)
    contenido = db.Column(db.String(120), unique=False, nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), unique = False, nullable = False)
    usuario = db.relationship('Usuario')
    
    def serialize(self):
        return {
            "id": self.id,
            "contenido": self.contenido,
            "usuario_id": self.usuario_id,
            # do not serialize the password, its a security breach
        }


class Pedidos(db.Model):
    __tablename__ = 'pedidos'
    id = db.Column(db.Integer, primary_key=True)
    colacion_id = db.Column(db.Integer, db.ForeignKey('colacion.id'), unique = False, nullable = False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), unique = False, nullable = False)
    entregado = db.Column(db.Boolean, server_default=u'false')
    colacion = db.relationship('Colacion')
    usuario = db.relationship('Usuario')

    def serialize(self):
        return {
            "id": self.id,
            "menu_id": self.menu_id,
            "usuario_id":self.usuario_id,
            # do not serialize the password, its a security breach
        }



class Principal(db.Model):
    __tablename__ = 'principal'
    id = db.Column(db.Integer, primary_key=True)
    descripcion_principal = db.Column(db.String(150), unique = True, nullable = False)


class Ensalada(db.Model):
    __tablename__ = 'ensalada'
    id = db.Column(db.Integer, primary_key=True)
    descripcion_ensalada = db.Column(db.String(150), unique = True, nullable = False)


class Postre(db.Model):
    __tablename__ = 'postre'
    id = db.Column(db.Integer, primary_key=True)
    descripcion_postre = db.Column(db.String(150), unique = True, nullable = False)

class Bebida(db.Model):
    __tablename__ = 'bebida'
    id = db.Column(db.Integer, primary_key=True)
    descripcion_bebida = db.Column(db.String(150), unique = True, nullable = False)


class Casino(db.Model):
    __tablename__ = 'casino'
    id = db.Column(db.Integer, primary_key=True)
    principal_id = db.Column(db.Integer, db.ForeignKey('principal.id'), unique = False, nullable = False)
    ensalada_id = db.Column(db.Integer, db.ForeignKey('ensalada.id'), unique = False, nullable = False)
    postre_id = db.Column(db.Integer, db.ForeignKey('postre.id'), unique = False, nullable = False)
    bebida_id = db.Column(db.Integer, db.ForeignKey('bebida.id'), unique = False, nullable = False)
    principal = db.relationship('Principal')
    ensalada = db.relationship('Ensalada')
    postre = db.relationship('Postre')
    bebida = db.relationship('Bebida')


class Colacion(db.Model):
    __tablename__ = 'colacion'
    id = db.Column(db.Integer, primary_key=True)
    casino_id = db.Column(db.Integer, db.ForeignKey('casino.id'), unique = False, nullable = False)
    casino = db.relationship('Casino')

    
    

    def serialize(self):
        return {
            "id": self.id,
            "pedidos_id": self.pedidos_id,
            # do not serialize the password, its a security breach
        }



    def to_dict(self):
        return {}

## Draw from SQLAlchemy base
render_er(db.Model, 'diagram.png')