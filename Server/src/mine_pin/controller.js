const pool = require('../../db');
const queries = require('./queries')

const getLocationPins = (req, res) => {
    pool.query(queries.getLocationPins, (error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getMinePinsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMinePinsById, [id], (error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const removeMinePinsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.removeMinePinsById, [id], (error,results) => {
        const noPinFound = !results.rows.length;
        if (noPinFound);
        res.send('Pin does not exist in the database');
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getLocationPins,
    addMinePin,
    getMinePinsById,
    removeMinePinsById
}