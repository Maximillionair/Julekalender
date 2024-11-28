const express = require("express")
const path = require("path")
const app = express()
const parse = require("body-parser")
const routes = require('./routes/defaultroutes');


app.set("views", path.join(__dirname, "views"))
app.set("view engine", 'ejs');


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle URL-encoded data
app.use(routes);


// Start the server on port 3100
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});
