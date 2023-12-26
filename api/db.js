import mysql from 'mysql2';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cassie22042022',
  database: 'dogdatabase',
});
