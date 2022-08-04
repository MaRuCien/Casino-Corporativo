import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
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

class Reporte(db.Model):
    __tablename__ = 'reporte'
    id = db.Column(db.Integer, primary_key=True)
    contenido = db.Column(db.String(120), unique=False, nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), unique = False, nullable = False)
    
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
    menu_id = db.Column(db.Integer, db.ForeignKey('menu.id'), unique = False, nullable = False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), unique = False, nullable = False)

    def serialize(self):
        return {
            "id": self.id,
            "menu_id": self.menu_id,
            "usuario_id":self.usuario_id,
            # do not serialize the password, its a security breach
        }

class Entrega(db.Model):
    __tablename__ = 'entrega'
    id = db.Column(db.Integer, primary_key=True)
    pedidos_id = db.Column(db.Integer, db.ForeignKey('pedidos.id'), unique = True, nullable = False)

    def serialize(self):
        return {
            "id": self.id,
            "pedidos_id": self.pedidos_id,
            # do not serialize the password, its a security breach
        }

class Admin(db.Model):
    __tablename__ = 'admin'
    id = db.Column(db.Integer, primary_key=True)
    pedidos_id = db.Column(db.Integer, db.ForeignKey('pedidos.id'), unique = True, nullable = False)

    def serialize(self):
        return {
            "id": self.id,
            "pedidos_id": self.pedidos_id,
            # do not serialize the password, its a security breach
        }

class Menu(db.Model):
    __tablename__ = 'menu'
    id = db.Column(db.Integer, primary_key=True)
    platillos = db.Column(db.String(150), unique = True, nullable = False)
    
    def serialize(self):
        return {
            "id": self.id,
            "platillos": self.platillos,
            # do not serialize the password, its a security breach
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
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    empresa_id = db.Column(db.Integer, db.ForeignKey('empresa.id'), unique = False, nullable = False)
    direccion_id = db.Column(db.Integer, db.ForeignKey('direccion.id'), unique = False, nullable = False)
    

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "empresa_id": self.empresa_id,
            "direccion_id": self.direccion_id,
            # do not serialize the password, its a security breach
        }