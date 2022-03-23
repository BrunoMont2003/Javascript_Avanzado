//* POKEAPI
//* https://pokeapi.co/
//* ENDPOINT
//* https://pokeapi.co/api/v2/pokemon/pikachu

//#1 VAMOS A TRAER A REQUEST Y COLORS QUE ACABAMOS DE INSTALAR
const request = require("request");
const colors = require("colors");

//#2 DECLARO MI URI DE MI API
const URI = "https://pokeapi.co/api/v2/pokemon/";

//VAMOS A CREAR UNA FUNCIÓN QUE PIDA UN POKEMON Y ME DEVUELVA SUS TIPOS
function getPokemonTypeByName(name) {
  //ES UNA BUENA PRACTICA REVISAAR SI LA API ES SENSIBLE A MAYUSCULAS O MINUSCULAS
  //LA POKEAPI NO LO ES, PODRIAMOS UTILIZAR UN LOWERCASE PARA EL NOMBRE

  request.get(URI + name, function (error, response, body) {
    //VALIDAR SI MI PETICIÓN ES EXITOSA, DEVUÉLVEME LA DATA
    if (response.statusCode === 200) {
      const bodyEnFormatoJs = JSON.parse(body);
      //parse convierte un objeto JSON en un objeto JavaScript
      //la lógica el proceso de la respuesta
      const typePokemon = bodyEnFormatoJs.types.map(
        (objeto) => objeto.type.name
      );
      console.log(`El tipo de ${name} es: ${typePokemon}`.magenta);
    } else {
      //Si el codigo de estado es cualquier otro muestrame el mensaje de error
      console.log(
        `Ocurrió un error: ${response.statusCode} ${response.statusMessage}`
      );
    }
  });
}

getPokemonTypeByName("pikachu");
getPokemonTypeByName("charmander");
