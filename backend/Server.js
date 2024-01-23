const express = require("express");
const cors= require('cors')
const connectdb = require("./Configuration/Config");
const User_Router = require("./Router/Router");
const app = express();
const port = 8001;
connectdb();
app.use(express.json());
app.use(cors({origin:'http://localhost:3000'}))
app.use("/User", User_Router);
app.listen(port, console.log("Server is running at port: 8001"));
