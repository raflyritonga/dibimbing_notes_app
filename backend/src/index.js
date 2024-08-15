require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')

const app = express()
const PORT = process.env.PORT || 3000
const BASE_PATH = process.env.BASE_PATH
app.use(cors())
app.use(express.json())
app.use(routes)

// app.use((err, req, res, next) => {
//      console.error(err.stack);
//      res.status(500).send('Something broke!');
// });

app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}${BASE_PATH}`);
})