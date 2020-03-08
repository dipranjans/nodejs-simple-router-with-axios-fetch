const routes = require("express").Router();
const axios = require("axios");

// root url for the route
routes.get("/", (req, res) => {
  res.send("Route index set up successfull!");
});

// navigate to user and fetch the github users details
routes.get("/user", (req, res, next) => {
  let urls = [
    "https://api.github.com/users/diptiranjans",
    "https://api.github.com/users/remy",
    "https://api.github.com/users/jeresig"
  ];

  // map every url to the promise of the fetch
  let requests = urls.map(url => axios.get(url));
  console.log(requests);

  // Promise.all waits until all jobs are resolved
  Promise.all(requests).then(responses =>
    responses.forEach(response => {
      //console.log(response);
      res.send("promises working fine");
      next();
      //console.log(`${response.data.url}: ${response.status}`);
    })
  );
});

routes.get("/git", (req, res) => {
  // res.send("dipranjan");
  axios
    .get(`https://api.github.com/users/diptiranjans`, (err, resp, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    })
    .then(
      function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        console.log(userDetails);
        res.send("Data fetch successfully!");
      },
      function(err) {
        console.log(err);
      }
    );
});

module.exports = routes;
