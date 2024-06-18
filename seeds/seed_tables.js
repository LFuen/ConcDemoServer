

const fs = require('fs');
const path = require('path');

exports.seed = async function(knex) {
  const sqlFilePath = path.join(__dirname, 'seed.tables.sql');
  const sql = fs.readFileSync(sqlFilePath, 'utf8');

  return knex.raw(sql)
    .then(() => {
      console.log('Seeded tables successfully');
    })
    .catch(err => {
      console.error('Error seeding tables:', err);
    });
};