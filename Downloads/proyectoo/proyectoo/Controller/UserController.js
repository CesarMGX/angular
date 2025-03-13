import UsuarioModel from '../models/UsuarioModel.js';
import jwt from 'jsonwebtoken';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const UsuarioController = {
    async getAll(req, res) {
        try {
            const usuarios = await UsuarioModel.getAll();
            res.json(usuarios);
        } catch (err) {
            res.status(500).json({ message: 'Error al obtener usuarios', error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const usuario = await UsuarioModel.getById(req.params.id);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(usuario);
        } catch (err) {
            res.status(500).json({ message: 'Error al obtener el usuario', error: err.message });
        }
    },

    async create(req, res) {
        const { nombre, correo, contrasena, imagen } = req.body;
        try {
            const uploadedImage = imagen
                ? await cloudinary.uploader.upload(imagen)
                : { secure_url: null };

            const nuevoUsuario = await UsuarioModel.create({
                nombre,
                correo,
                contrasena,
                imagen: uploadedImage.secure_url,
            });

            res.status(201).json({
                usuario: nuevoUsuario,
                token: nuevoUsuario.token,
            });
        } catch (err) {
            res.status(500).json({ message: 'Error al crear usuario', error: err.message });
        }
    },

    async update(req, res) {
        const { nombre, correo, contrasena, imagen } = req.body;
        try {
            const usuarioExistente = await UsuarioModel.getById(req.params.id);
            if (!usuarioExistente) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            const updatedImage = imagen
                ? await cloudinary.uploader.upload(imagen)
                : { secure_url: usuarioExistente.imagen };

            const usuarioActualizado = await UsuarioModel.update(req.params.id, {
                nombre,
                correo,
                contrasena,
                imagen: updatedImage.secure_url,
            });

            res.json(usuarioActualizado);
        } catch (err) {
            res.status(500).json({ message: 'Error al actualizar usuario', error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const usuario = await UsuarioModel.getById(req.params.id);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            await UsuarioModel.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ message: 'Error al eliminar usuario', error: err.message });
        }
    },
};

export default UsuarioController;
