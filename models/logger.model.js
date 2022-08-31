const sqlLogDb = "./assets/sqlLogDb.sqlite";
const sqlite3 = require("sqlite3").verbose();
const readme = "./assets/readme.txt";
const fs = require("fs");

const logDb = new sqlite3.Database(sqlLogDb, (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  }

  console.log("Connected to DB");

  const initStatement = `CREATE TABLE logs ( id INTEGER PRIMARY KEY AUTOINCREMENT,
    source TEXT,
    date TEXT,
    msg TEXT )`;

  logDb.run(initStatement, (error) => {
    if (error) {
        console.log('Table "logs" already exist');
        return;
    }
  })
});

const printReadme = fs.readFileSync(readme, "utf8", (error) => {
    if (error) {
        console.error(error.message);
        throw error;
    }
});

module.exports = {
    logDb,
    printReadme
}
