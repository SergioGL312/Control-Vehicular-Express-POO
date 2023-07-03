class Licencias {
    static async getAll(req, res, next) {
        const query = "SELECT * FROM licencias;";
        try {
            const rows = await db.query(query);
            return res.status(200).json({ code: 200, message: rows });
        } catch (error) {
            return res.status(500).json({ code: 500, message: error.message });
        }
    }

    static async getById(req, res, next) {
        const id = req.params.id;
        const query = `SELECT * FROM licencias WHERE id = ?`;
        try {
            const rows = await db.query(query, [id]);
            return res.status(200).json({ code: 200, message: rows });
        } catch (error) {
            return res.status(500).json({ code: 500, message: error });
        }
    }
}

const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', Licencias.getAll);
router.get('/:id([0-9]{1,3})', Licencias.getById);

module.exports = router;