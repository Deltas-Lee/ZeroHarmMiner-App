const express = require('express')
const mineRoutes = require('./src/mine_pin/routes');
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());

// app.use(bodyParser.json())
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     })
// )

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express.js, Angular, and PostGres back-end'});
})

app.use("/api/v1/mine_pins", mineRoutes);

app.listen(port, () => {
    console.log(`App is running on port ${port}.`)
})
