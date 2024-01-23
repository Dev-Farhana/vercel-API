const express = require('express')
const app = express()
// const PORT = process.env.PORT

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
require("./mongodb");
const PORT =  process.env.PORT || 2000; 

app.use(express.json());
app.use(cors());

const Routes = require("./routes");
app.use(Routes);

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})
// Export the Express API
module.exports = app
