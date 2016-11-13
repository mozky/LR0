exports.GRAM = [
  {
    "tor": "G",
    "cion": ["D"]
  },
  {
    "tor": "D",
    "cion": ["T", "L"]},
  {
    "tor": "T",
    "cion": ["i"]
  },
  {
    "tor": "T",
    "cion": ["r"]
  },
  {
    "tor": "L",
    "cion": ["L", ",", "x"]
  },
  {
    "tor": "L",
    "cion": ["x"]
  }
];

exports.ACCI = [
  { "i" : "d3", "r" : "d4", "," : null, "x" : null, "$" : null , "D" : "I1", "S" : "I2", "T" : "I2", "L" : null },
  { "i" : null, "r" : null, "," : null, "x" : null, "$" : true, "D" : null, "S" : null, "T" : "I2", "L" : null },
  { "i" : "d3", "r" : "d4", "," : null, "x" : "d6", "$" : null, "D" : null, "S" : null, "T" : null, "L" : "I5" },
  { "i" : null, "r" : null, "," : null, "x" : "r2", "$" : null, "D" : null, "S" : null, "T" : null, "L" : null },
  { "i" : null, "r" : null, "," : null, "x" : "r3", "$" : null, "D" : null, "S" : null, "T" : null, "L" : null },
  { "i" : null, "r" : null, "," : "d7", "x" : null, "$" : "r1", "D" : null, "S" : null, "T" : null, "L" : null },
  { "i" : null, "r" : null, "," : "r5", "x" : null, "$" : "r5", "D" : null, "S" : null, "T" : null, "L" : null },
  { "i" : null, "r" : null, "," : null, "x" : "d8", "$" : null, "D" : null, "S" : null, "T" : null, "L" : null },
  { "i" : null, "r" : null, "," : "r4", "x" : null, "$" : "r4", "D" : null, "S" : null, "T" : null, "L" : null }
];

exports.INFO = "Gramatica que acepta numeros reales o imaginarios separados por coma. Ej. 'ix,x,x,x', 'rx,x,x,x'";
