const client = require("../client");
const { mapTheRows } = require("../utils");

const createPuppy = async (puppy) => {
  // Add a puppy (passed in) to our db
  const { name, email, age, ownerId } = puppy;
  const {
    rows: [pup],
  } = await client.query(
    `
    INSERT INTO puppies (name, email, age, "ownerId")
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
    [name, email, age, ownerId]
  );
  return pup;
};

const getPuppyById = async (id) => {
  const {
    rows: [pup],
  } = await client.query(
    `
    SELECT
      puppies.id as id,
      puppies.name as name,
      puppies.email as email,
      puppies."isCute" as "isCute",
      puppies.age as age,
      puppies."ownerId" as "ownerId",
    CASE WHEN puppies_tricks.puppy_id IS NULL THEN '[]'::json
    ELSE
    JSON_AGG(
      JSON_BUILD_OBJECT(
        'id', tricks.id,
        'title', tricks.title
      )
    ) END AS tricks
    FROM puppies
    LEFT JOIN puppies_tricks ON puppies.id = puppies_tricks.puppy_id
    LEFT JOIN tricks ON puppies_tricks.trick_id = tricks.id
    WHERE puppies.id = $1
    GROUP BY puppies.id, puppies_tricks.puppy_id
  `,
    [id]
  );
  return pup;
};

const getPuppiesByOwnerId = async (id) => {
  const { rows } = await client.query(
    `
    SELECT
      puppies.id as id,
      puppies.name as name,
      puppies.email as email,
      puppies."isCute" as "isCute",
      puppies.age as age,
      puppies."ownerId" as "ownerId",
    CASE WHEN puppies_tricks.puppy_id IS NULL THEN '[]'::json
    ELSE
    JSON_AGG(
      JSON_BUILD_OBJECT(
        'id', tricks.id,
        'title', tricks.title
      )
    ) END AS tricks
    FROM puppies
    LEFT JOIN puppies_tricks ON puppies.id = puppies_tricks.puppy_id
    LEFT JOIN tricks ON puppies_tricks.trick_id = tricks.id
    WHERE puppies."ownerId" = $1
    GROUP BY puppies.id, puppies_tricks.puppy_id
  `,
    [id]
  );
  return rows;
};

const updatePuppyById = async (id, updateObject) => {
  const valuesArray = Object.keys(updateObject);
  if (valuesArray.includes("ownerId") || valuesArray.includes("isCute")) {
    return {
      success: false,
      message: "Cannot update isCute or ownerId!",
    };
  }
  const setString = Object.keys(updateObject)
    .map((key, i) => {
      return `${key}=$${i + 2}`;
    })
    .join(", ");

  const {
    rows: [updatedPup],
  } = await client.query(
    `
    UPDATE puppies
      SET ${setString}
      WHERE id=$1
      RETURNING *
  `,
    [id, ...Object.values(updateObject)]
  );
  return updatedPup;
};

const deletePuppyById = async (id) => {
  const {
    rows: [deletedPuppy],
  } = await client.query(
    `
    DELETE FROM puppies
    WHERE id=$1
    RETURNING *
  `,
    [id]
  );
  return deletedPuppy;
};

// ** THE FOLLOWING IS AN EXAMPLE OF A MORE ADVANCED QUERY WITHOUT USING A UTILITY FUNCTION
// ** THIS FUNCTION USES JSON_AGG AND JSON_BUILD_OBJ TO RETURN THE DATA IN THE SAME FORMAT
// ** ORM'S DO THIS JOB FOR US USUALLY
const getPuppies = async () => {
  const { rows } = await client.query(`
    SELECT
      puppies.id as id,
      puppies.name as name,
      puppies.email as email,
      puppies."isCute" as "isCute",
      puppies.age as age,
      puppies."ownerId" as "ownerId",
    CASE WHEN puppies_tricks.puppy_id IS NULL THEN '[]'::json
    ELSE
    JSON_AGG(
      JSON_BUILD_OBJECT(
        'id', tricks.id,
        'title', tricks.title
      )
    ) END AS tricks
    FROM puppies
    LEFT JOIN puppies_tricks ON puppies.id = puppies_tricks.puppy_id
    LEFT JOIN tricks ON puppies_tricks.trick_id = tricks.id
    GROUP BY puppies.id, puppies_tricks.puppy_id`);
  return rows;
};

module.exports = {
  createPuppy,
  getPuppies,
  getPuppyById,
  updatePuppyById,
  deletePuppyById,
  getPuppiesByOwnerId,
};
