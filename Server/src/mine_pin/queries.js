const getPinsQuery = `SELECT i.latitude, i.longitude, i.description, i.severity, m.name AS mine_name 
                        FROM incidents i 
                        JOIN mines m 
                        ON i.mine_id = m.id`;

const getPinsByMineIDQuery = `SELECT i.latitude, i.longitude, i.description, i.severity, m.name AS mine_name 
                              FROM incidents i 
                              JOIN mines m 
                              ON i.mine_id = m.id
                              WHERE i.mine_id = $1`;

const getPinByIdQuery = `SELECT *  
                         FROM incidents i 
                         WHERE i.id = $1`;

const checkPinQuery = `SELECT id 
                       FROM incidents 
                       WHERE latitude = $1 AND longitude = $2 AND description = $3`;

const addPinQuery = `INSERT INTO incidents (mine_id, latitude, longitude, description, severity)
                        VALUES ($1, $2, $3, $4, $5)
                        RETURNING id`;

const updatePinQuery = `UPDATE incidents
                            SET
                                mine_id = $1,
                                description = $2
                            WHERE id = $3`;

const removePinQuery = `DELETE FROM incidents
                            WHERE
                            id = $1`;
                            
module.exports = {
  getPinsQuery,
  getPinsByMineIDQuery,
  getPinByIdQuery,
  addPinQuery,
  updatePinQuery,
  removePinQuery,
  checkPinQuery,
};
