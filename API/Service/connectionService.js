const { createPool } = require("mysql2");
const { getQuery, getQueryValuesArray } = require("../Helper/sqlHelper");

const pool = createPool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

/**
 *
 * @param {string} queryFileName
 * @param {object} values
 */
const executeQuery = async (queryFileName, values) => {
  const queryString = await getQuery(queryFileName);
  const valuesArray = getQueryValuesArray(queryFileName, values);

  const connection = await pool.promise().getConnection();
  const [data, fields] = await connection.query(queryString, valuesArray);

  connection.release();

  return {
    data,
    fields,
  };
};

module.exports = {
  executeQuery,
};
