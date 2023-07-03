const express = require('express');
const router = express.Router();
const db = require("../config/db");

class Oficiales {
    static async getAll(req, res, next) {
        const query = "Select * from oficiales;";
        try {
            const rows = await db.query(query);
            return res.status(200).json({ code: 200, message: rows });
        } catch (error) {
            return res.status(500).json({ code: 500, message: error })
        }
    }
}

router.get('/', Oficiales.getAll);

module.exports = router;