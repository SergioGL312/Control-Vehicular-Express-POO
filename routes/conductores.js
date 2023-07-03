const express =  require('express');
const db = require('../config/db');

class Conductor {
    constructor() {
        this.router = express.Router();

        this.router.get('/:id([0-9]{1,3})', this.getById.bind(this));
        this.router.get('/:nombre([a-zA-Z]+)', this.getByName.bind(this));
        this.router.get('/', this.getAll.bind(this));
    }

    // Id
    async getById(req, res, next) {
        const id = req.params.id;
        console.log(id);
        const query = `SELECT * FROM conductores WHERE id = ${id};`
        try {
            const rows = await db.query(query);
            return res.status(200).json({ code: 200, message: rows });
        } catch (error) {
            return res.status(500).json({ code: 500, message: error.message })
        }
    }

    // Name
    async getByName(req, res, next) {
        const nombre = req.params.nombre;
        console.log(nombre);
        return res.status(200).json({ code: 200, message: nombre });
    }

    // All
    async getAll(req, res, next) {
        const query = "SELECT * FROM conductores;";
        // ? [id, ...]
        // const query = `SELECT 
        // id,
        // nombre,
        // apellido_paterno,
        // domicilio,
        // fecha_nacimiento,
        // sexo,num_emergencia,
        // donador,antiguedad,
        // grupo_sanguineo,
        // restricciones FROM conductores;`;
        try {
            const rows = await db.query(query);
            return res.status(200).json({ code: 200, message: rows });
        } catch (error) {
            return res.status(500).json({ code: 500, message: error.message })
        } 
    }
}

module.exports = new Conductor().router;