import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DB_CONN,
});

export default pool;
