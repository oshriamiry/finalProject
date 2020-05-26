const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 1111,
    router = require('./router');

app.use(bodyParser.json())


router(app)



app.listen(port, () => console.log(`Server Running: ${port}`))
