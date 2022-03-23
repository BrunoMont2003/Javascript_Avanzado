//NUESTRO INDEX PRINCIPAL
const goodReadsCrud = require("./crudAuthors.js");

//Listo mis autores
// goodReadsCrud.listAuthors()

//Ver un Author
goodReadsCrud.getAuthor(14567);

const jsonSend = {
  name: "Eduardo",
  last_name: "Camavinga",
  nacionalidad: "MX",
  biography: "Soccer Player",
  gender: "M",
  age: 19,
  is_alive: true,
};
goodReadsCrud.createAuthor(jsonSend);
