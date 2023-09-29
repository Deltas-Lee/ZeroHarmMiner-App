const getLocationPins = 'SELECT * FROM incidents';
const getLocationPinByID = 'SELECT * FROM incidents WHERE id = $1';
const addLocationPin = 'INSERT INTO incidents () VALUES ($1, $2, $3, $4, $5, $6)';
const removeLocationPin = 'DELETE FROM incidents WHERE id = $1';

module.exports = {
    getMinePins,
    addMinePin,
    getMinePinsByID,
    removePin
};