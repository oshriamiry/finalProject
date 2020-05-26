const BL = require('./BL')

function Router(app) {

    app.get('/', (req, res) => {
        res.send(`<h1>I Am King Of The World</h1>`)
    })

    app.get('/products', async (req, res) => {
        try {
            const result = await BL.getPro()
            res.send(result)
        }
        catch (error) {
            res.send({ error: error.massage || error })
        }
    })

}


module.exports = Router