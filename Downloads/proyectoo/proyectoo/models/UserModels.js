import mongoose from 'mongoose';
import { conectarUsersDB } from '../config/dbMongo.js';
import bcrypt from 'bcryptjs';

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

let Usuario;

const initializeUserModel = async () => {
  const usersConnection = await conectarUsersDB();
  Usuario = usersConnection.model('Usuario', usuarioSchema);
};

const UsuarioModel = {
  initialize: async () => {
    await initializeUserModel();
  },
  getAll: async () => {
    if (!Usuario) await initializeUserModel();
    return await Usuario.find();
  },
  getById: async (id) => {
    if (!Usuario) await initializeUserModel();
    return await Usuario.findById(id);
  },
  getByEmail: async (correo) => {
    if (!Usuario) await initializeUserModel();
    return await Usuario.findOne({ correo });
  },
  create: async ({ nombre, correo, contrasena }) => {
    if (!Usuario) await initializeUserModel();
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    return await new Usuario({ nombre, correo, contrasena: hashedPassword }).save();
  },
  update: async (id, data) => {
    if (!Usuario) await initializeUserModel();
    if (data.contrasena) {
      data.contrasena = await bcrypt.hash(data.contrasena, 10);
    }
    return await Usuario.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    if (!Usuario) await initializeUserModel();
    return await Usuario.findByIdAndDelete(id);
  },
};

export default UsuarioModel;