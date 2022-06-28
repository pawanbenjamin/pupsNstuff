const client = require('../client')
const { mapTheRows } = require('../utils')

const createPuppy = async (puppy) => {
  // Add a puppy (passed in) to our db
  const { name, email, age, ownerId } = puppy
  await client.query(
    `
    INSERT INTO puppies (name, email, age, "ownerId")
    VALUES ($1, $2, $3, $4)
  `,
    [name, email, age, ownerId]
  )
}

const getPuppies = async () => {
  const { rows } = await client.query(`
      SELECT 
        puppies.id as id,
        puppies.name as name,
        puppies.email as email,
        puppies."isCute" as "isCute",
        puppies.age as age,
        puppies."ownerId" as "ownerId"
      FROM puppies
      LEFT JOIN puppies_tricks ON puppies.id = puppies_tricks.puppy_id
      LEFT JOIN tricks ON puppies_tricks.trick_id = tricks.id
    `)
  return mapTheRows(rows)
}

// ** THE FOLLOWING IS AN EXAMPLE OF A MORE ADVANCED QUERY WITHOUT USING A UTILITY FUNCTION
// ** THIS FUNCTION USES JSON_AGG AND JSON_BUILD_OBJ TO RETURN THE DATA IN THE SAME FORMAT
// ** ORM'S DO THIS JOB FOR US USUALLY
// const getPuppies = async () => {

//   const { rows } = await client.query(`
//     SELECT
//       puppies.id as id,
//       puppies.name as name,
//       puppies.email as email,
//       puppies."isCute" as "isCute",
//       puppies.age as age,
//       puppies."ownerId" as "ownerId",
//     CASE WHEN puppies_tricks.puppy_id IS NULL THEN '[]'::json
//     ELSE
//     JSON_AGG(
//       JSON_BUILD_OBJECT(
//         'trick_id', tricks.id,
//         'title', tricks.title
//       )
//     ) END AS tricks
//     FROM puppies
//     LEFT JOIN puppies_tricks ON puppies.id = puppies_tricks.puppy_id
//     LEFT JOIN tricks ON puppies_tricks.trick_id = tricks.id
//     GROUP BY puppies.id, puppies_tricks.puppy_id`)
//   return rows
// }

module.exports = { createPuppy, getPuppies }
