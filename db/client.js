const { Pool } = require("pg"); // imports the pg module

const dbName = "pupsNstuff";

const client = new Pool({
  connectionString:
    process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;
