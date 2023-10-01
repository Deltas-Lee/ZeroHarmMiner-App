const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pcmm_assignment",
  password: "your_db_password",
  port: 5432,
});

module.exports = pool;