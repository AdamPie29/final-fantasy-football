const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { PORT = "8080", API_URL = "http://localhost" } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

//import routes
const userRoutes = require("./routes/users");
const playerRoutes = require("./routes/players");
const teamRoutes = require("./routes/teams");

//routes
app.use('/user', userRoutes);
app.use('/player', playerRoutes);
app.use('/teams', teamRoutes);




app.listen(PORT, () =>
    console.log('serving Express at ' + API_URL + ":" + PORT)
);