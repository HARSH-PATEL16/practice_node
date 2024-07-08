require("./Database/db_connection");
require('dotenv').config();
let http = require('http');
let express = require('express');
let app = express();
app.use(express.json())

// ==================== ROUTES ==================//
try {
    let routes = require('./Routes/index');
    routes(app);
} catch (error) {
    console.log(error);
}

// ==================== SERVER ==================//
const server = http.createServer(app);
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
