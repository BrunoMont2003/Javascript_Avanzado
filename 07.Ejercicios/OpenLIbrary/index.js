const request = require("request");
const colors = require("colors");
const URI = "http://openlibrary.org/search.json?q=";
const getLibro = (title) => {
  //mi libro
  //[mi, libro]
  let arreglo = title.split(" ");
  let title_n = arreglo.join("+");
  request.get(URI + title_n, (error, response, body) => {
    if (response.statusCode === 200) {
      const { docs } = JSON.parse(body);
      const authors = docs[0].author_name;
      console.log("Autores del libro " + title.yellow);
      authors.forEach((author) => {
        console.log(author.blue);
      });
    } else {
      console.log(response.statusCode, response.statusMessage);
      //EJEMPLO: 404 NOT FOUND
    }
  });
};
getLibro("tormenta");
