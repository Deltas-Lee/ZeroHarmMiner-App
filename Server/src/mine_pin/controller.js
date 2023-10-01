const pool = require("../../db");
const queries = require("./queries");

const getMinePins = async (req, res) => {
  try {
    const results = await pool.query(queries.getPinsQuery);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getLocationPinById = async (req, res) => {
  const id = parseInt(req.params.id); // Get the pin ID from the request parameters
  try {
    const results = await pool.query(queries.getPinsByMineIDQuery, [id]);
    if (results.rows.length === 0) {
      res.status(404).json({ error: "Pin not found" });
    } else {
      res.status(200).json(results.rows);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const addLocationPin = async (req, res) => {
  const { latitude, longitude, description, severity, mine_id } = req.body;

  try {
    const checkPinValues = [latitude, longitude, description];

    const checkPinResult = await pool.query(
      queries.checkPinQuery,
      checkPinValues
    );

    if (checkPinResult.rows.length > 0) {
      // Pin already exists
      return res.status(409).json({ error: "Pin already exists" });
    } else {
      const insertPinValues = [
        mine_id,
        latitude,
        longitude,
        description,
        severity,
      ];

      const insertPinResult = await pool.query(
        queries.addPinQuery,
        insertPinValues
      );

      const newPinId = insertPinResult.rows[0].id;
      return res
        .status(201)
        .json({ message: "Pin added successfully", id: newPinId });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateLocationPin = async (req, res) => {
  const { mine_id, description } = req.body;
  const pinId = parseInt(req.params.id);

  try {
    // Check if the pin exists
    const checkPinResult = await pool.query(queries.getPinByIdQuery, [pinId]);
    if (checkPinResult.rows.length === 0) {
      return res.status(404).json({ error: "Pin not found" });
    } else {
      // Update the pin with the provided data
      const updatePinValues = [mine_id, description];
      await pool.query(queries.updatePinQuery, updatePinValues, [pinId]);

      return res.status(200).json({ message: "Pin updated successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const removeLocationPin = async (req, res) => {
  const pinId = parseInt(req.params.id); // Get the pin ID from the request parameters
  try {
    // Check if the pin exists
    const checkPinResult = await pool.query(queries.getPinByIdQuery, [pinId]);
    if (checkPinResult.rows.length === 0) {
      return res.status(404).json({ error: "Pin not found" });
    } else {
      // Remove the pin by ID
      await pool.query(queries.removePinQuery, [pinId]);

      return res.status(200).json({ message: "Pin removed successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getMinePins,
  getLocationPinById,
  addLocationPin,
  updateLocationPin,
  removeLocationPin,
};
