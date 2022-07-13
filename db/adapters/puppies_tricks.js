const client = require("../client");

const createPuppyTrick = async ({ puppyId, trickId }) => {
  const { rows } = await client.query(
    `
        INSERT INTO puppies_tricks (puppy_id, trick_id)
        VALUES ($1, $2)
        RETURNING *
    `,
    [puppyId, trickId]
  );
  return rows[0];
};

const removePuppyTrick = async ({ puppy_id, trick_id }) => {
  const { rows } = await client.query(
    `
      DELETE FROM puppies_tricks as pt
        WHERE pt.puppy_id = $1 and pt.trick_id = $2
        RETURNING *
    `,
    [puppy_id, trick_id]
  );
  return rows[0];
};

module.exports = {
  createPuppyTrick,
  removePuppyTrick,
};
