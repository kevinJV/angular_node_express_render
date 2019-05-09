const express = require('express')
const html = __dirname + '/front-end/dist/front-end'
const app = express()

const PORT = 8080
const HOST = '0.0.0.0'

// app.get('/', (req, res) => {
//     res.send('Hello world\n');
// });

app
    .use(express.static(html))
    .use(function (req, res) {
        res.sendFile(html + 'index.html');
    })

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);