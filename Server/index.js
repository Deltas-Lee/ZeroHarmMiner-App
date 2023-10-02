const express = require("express");
const mineRoutes = require("./src/mine_pin/routes");
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));


app.get("/", (request, response) => {
  response.json({
    info: "Node.js, Express.js, Angular, and PostGres back-end",
  });
});

app.use("/api/v1/mine_pins", mineRoutes);

// All other routes should return the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});