const client = require("../client");

const createOwner = async (owner) => {
  const { name } = owner;
  await client.query(
    `
        INSERT INTO owners (name)
        VALUES ($1)
    `,
    [name]
  );
};

const getOwners = async () => {
  const { rows } = await client.query(`
        SELECT * FROM owners
    `);
  return rows;
};

const getOwnerById = async (id) => {
  const { rows } = await client.query(
    `
      SELECT * FROM owners
        WHERE id=$1
    `,
    [id]
  );
  return rows[0];
};

const updateOwnerById = async (id, updateObj) => {
  const setString = Object.keys(updateObj)
    .map((key, i) => {
      return `${key}=$${i + 1}`;
    })
    .join(", ");

  const { rows } = await client.query(
    `
    UPDATE owners
      SET ${setString}
      WHERE id=${id}
      RETURNING *
`,
    Object.values(updateObj)
  );
  return rows;
};

const deleteOwnerById = async (id) => {
  const { rows } = await client.query(
    `
      DELETE owners WHERE id=$1
    `,
    [id]
  );
  return rows[0];
};

// const test = async () => {
//   client.connect();
//   console.log("hi");
//   const owners = await updateOwnerById(1, { name: "Rickljasd" });
//   console.log("Owners", owners);
//   client.end();
// };

// test();

module.exports = {
  createOwner,
  getOwners,
  updateOwnerById,
  getOwnerById,
  deleteOwnerById,
};
