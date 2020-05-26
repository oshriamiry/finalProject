const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: '12345',
    database: 'finalProject',
    port: 5432
})

client.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Working...')
    }
});


const getPro = async () => {
    const res = await client.query(`SELECT * FROM public.products`)
    console.log(res)
    return res.rows
}

module.exports = { getPro }