const http = require("http");
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let movies = require("./data/movies.json");

const server = http.createServer((req, res) => {
  req.movies = movies;

  if (req.method === "GET") {
    getReq(req, res);
  } else if (req.method === "POST") {
    postReq(req, res);
  } else if (req.method === "PUT") {
    putReq(req, res);
  } else if (req.method === "DELETE") {
    deleteReq(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(
      JSON.stringify({ title: "Not Found", message: "Route not found" })
    );
    res.end();
  }
});


server.listen(3000, () => {
  console.log(`Server started on port : ${3000}`);
});
