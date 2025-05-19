import pg from "pg"
import env from "dotenv"

env.config()

const database = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurantDB',
    password: "root",
    port: 5432,
})

database.connect()

database.on('error', (err) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

export const query = (text, params) => database.query(text, params)