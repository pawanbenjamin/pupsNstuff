const client = require("../client");

const createTrick = async (trick) => {
  const { title } = trick;
  const { rows } = await client.query(
    `
    INSERT INTO tricks (title)
    VALUES ($1)
  `,
    [title]
  );
  return rows[0];
};

const getTricks = async () => {
  const { rows } = await client.query(`
        SELECT * FROM tricks
    `);
  return rows;
};

const updateTrickById = async (id, updateObj) => {
  const setString = Object.keys(updateObj)
    .map((key, i) => {
      return `${key}=$${i + 1}`;
    })
    .join(", ");
  const { rows } = await client.query(`
    UPDATE tricks
    SET ${setString}
    WHERE id=${id}
    RETURNING *
  `);
  return rows[0];
};

const deleteTrickById = async (id) => {
  const { rows } = await client.query(
    `
    DELETE FROM tricks WHERE id=$1
  `,
    [id]
  );
  return rows[0];
};

module.exports = { createTrick, getTricks, deleteTrickById, updateTrickById };
