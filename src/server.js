
require('dotenv').config()
const app = require('./app')
const { PORT, DATABASE_URL } = require('./config')
const knex = require('knex')


   const db = knex({
     client: 'pg',
     connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 20,
      acquireTimeoutMillis: 30000
    },
    debug: true,
   })

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
