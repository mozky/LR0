exports.GRAM = [
  {
    "tor": "G",
    "cion": ["S"]
  },
  {
    "tor": "S",
    "cion": ["E", "=", "E"]
  },
  {
    "tor": "S",
    "cion": ["f"]
  },
  {
    "tor": "E",
    "cion": ["T"]
  },
  {
    "tor": "E",
    "cion": ["E", "+", "T"]
  },
  {
    "tor": "T",
    "cion": ["f"]
  },
  {
    "tor": "T",
    "cion": ["T", "*", "f"]
  }
];

exports.ACCI = [
  { "=" : null, "f" : "d3", "+" : null, "*" : null, "$" : null, "S": "I1", "E" : "I2", "T" : "I4" },
  { "=" : null, "f" : null, "+" : null, "*" : null, "$" : true, "S": null, "E" : null, "T" : null },
  { "=" : "d5", "f" : null, "+" : "d6", "*" : null, "$" : null, "S": null, "E" : null, "T" : null },
  { "=" : "r5", "f" : null, "+" : "r5", "*" : "r5", "$" : "r5", "S": null, "E" : null, "T" : null },
  { "=" : "r3", "f" : null, "+" : "r3", "*" : "d7", "$" : "r3", "S": null, "E" : null, "T" : null },
  { "=" : null, "f" : "d3", "+" : null, "*" : null, "$" : null, "S": null, "E" : "I8", "T" : "I4" },
  { "=" : null, "f" : "d3", "+" : null, "*" : null, "$" : null, "S": null, "E" : "I2", "T" : "I9" },
  { "=" : null, "f" : "d10", "+" : null, "*" : null, "$" : null, "S": null, "E" : null, "T" : null },
  { "=" : null, "f" : null, "+" : "d6", "*" : null, "$" : "r1", "S": null, "E" : null, "T" : null },
  { "=" : "r4", "f" : null, "+" : "r4", "*" : "d7", "$" : "r4", "S": null, "E" : null, "T" : null },
  { "=" : "r6", "f" : null, "+" : "r6", "*" : "r6", "$" : "r6", "S": null, "E" : null, "T" : null }
];

exports.INFO = "Gramatica que acepta operaciones de suma y multiplicacion Ej. 'f=f+f', 'f=f*f+f'";
