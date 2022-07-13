const client = require("../client");

const createTrick = async (trick) => {
  const { title } = trick;
  const { rows } = await client.query(
    `
    INSERT INTO tricks (title)
    VALUES ($1)
    RETURNING *
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

const getTrickById = async (id) => {
  const {
    rows: [trick],
  } = await client.query(
    `
    SELECT * FROM tricks
    WHERE id=$1
  `,
    [id]
  );
  return trick;
};

const updateTrickById = async (id, updateObj) => {
  const setString = Object.keys(updateObj)
    .map((key, i) => {
      return `${key}=$${i + 2}`;
    })
    .join(", ");

  const { rows } = await client.query(
    `
    UPDATE tricks
    SET ${setString}
    WHERE id=$1
    RETURNING *
  `,
    [id, ...Object.values(updateObj)]
  );
  return rows[0];
};

const deleteTrickById = async (id) => {
  const { rows } = await client.query(
    `
    DELETE FROM tricks WHERE id=$1
    RETURNING *
  `,
    [id]
  );
  return rows[0];
};

module.exports = {
  createTrick,
  getTricks,
  deleteTrickById,
  updateTrickById,
  getTrickById,
};
