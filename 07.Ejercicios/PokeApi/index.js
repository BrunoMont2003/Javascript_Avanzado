const request = require("request");
const colors = require("colors");
const URI = "https://pokeapi.co/api/v2/pokemon/";
const getPokemon = (name) => {
  request.get(URI + name, (error, response, body) => {
    if (response.statusCode === 200) {
      const { types } = JSON.parse(body);
      console.log("Rasgos de ", name.toUpperCase().green);
      types.forEach(({ type }) => {
        console.log(type.name.magenta);
      });
    } else {
      console.log(response.statusCode, response.statusMessage);
      //EJEMPLO: 404 NOT FOUND
    }
  });
};
getPokemon("larvitar");
