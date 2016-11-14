var prompt = require('prompt');
require('console.table');

function LR0(GRAM, ACCI, CADENA) {
  var flecha = 0;
  var estado = 0;
  var pila = ["I0"];
  var accion = ACCI[estado][CADENA[flecha]];

  var log = [];

  while (accion != true && accion != null) {
    var entrada = CADENA.substring(0, flecha) + String.fromCharCode(8593) + CADENA.substring(flecha, CADENA.length);
    log.push({"Entrada": entrada, "Pila": pila.toString(), "Estado": estado, "Accion": accion});
    // Caso desplazamiento
    if (accion.charAt(0) == "d") {
      pila.push(CADENA[flecha]);
      pila.push("I" + accion.slice(1));
      flecha++;
    }
    // Caso reduccion
    if (accion.charAt(0) == "r") {
      // Hacemos la reduccion, quitamos dos elementos de la fila por cada elemento de la produccion
      for (var i = 0; i < GRAM[accion.slice(1)].cion.length; i++) {
        pila.pop();
        pila.pop();
      }
      pila.push(GRAM[accion.slice(1)].tor);
      pila.push(ACCI[pila[pila.length-2].slice(1)][pila[pila.length-1]])
    }
    // Actualizamos el estado y la accion
    estado = pila[pila.length-1].slice(1);
    accion = ACCI[estado][CADENA[flecha]];

  }

  console.log("\n")
  console.table(log);

  if (accion == true) {
    return true;
  } else {
    return false;
  }
}

function onErr(err) {
  console.log(err);
  return 1;
}


console.log("Selecciona uno de los siguientes ejemplos: ");
var testFolder = './examples/';
var fs = require('fs');


fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(" +" + file);
  });

  prompt.start();
  prompt.get('Archivo', function (err, result) {
    if (err) { return onErr(err); }
    var arch = require('./examples/'+ result.Archivo);
    console.log("\n" + arch.INFO + "\n\n" + "Teclea la cadena a evaluar: ");
    prompt.get('Cadena', function (err, result) {

      //Quitamos espacios en blanco
      var cadena = result.Cadena.replace(/\s/g,'');

      // Hack para aceptar int a=123
      cadena = cadena.replace(/int/g, "iat");
      cadena = cadena.replace(/\d+/g, "b");

      // Hack para aceptar for(x,y,z)
      cadena = cadena.replace(/for/g, "w");
      cadena = cadena.replace(/\({1}.+\;{1}.+\;{1}.+\){1}/g, "(a;a;a)");

      // Hack para aceptar while(a != 34)
      cadena = cadena.replace(/while/g, "w");
      cadena = cadena.replace(/\({1}.+\){1}/g, "(a;a)");

      LR0(arch.GRAM, arch.ACCI, cadena + "$") ?
        console.log("\nCADENA VALIDA (" + result.Cadena + ")") :
        console.log("\nCADENA NO VALIDA (" + result.Cadena + ")");
    });
  });
});
