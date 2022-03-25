const express = require('express');
const req = require('express/lib/request');
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"views")));
app.use(express.urlencoded());



 

