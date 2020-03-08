const app = require("express")(); // express
const routes = require("./routes"); // go to routes folder for routing
const PORT = 3000; // port number

// test is ok the routes
app.use("/", routes);

// listen to port 3000 serve
app.listen(PORT, () => {
  console.log("server listening on" + PORT);
});