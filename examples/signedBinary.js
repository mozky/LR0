exports.GRAM = [
  {
    "tor": "G",
    "cion": ["N"]
  },
  {
    "tor": "N",
    "cion": ["S", "L"]},
  {
    "tor": "S",
    "cion": ["+"]
  },
  {
    "tor": "S",
    "cion": ["-"]
  },
  {
    "tor": "L",
    "cion": ["L", "B"]
  },
  {
    "tor": "L",
    "cion": ["B"]
  },
  {
    "tor": "B",
    "cion": ["0"]
  },
  {
    "tor": "B",
    "cion": ["1"]
  }
];

exports.ACCI = [
  { "+" : "d3", "-" : "d4", "0" : null, "1" : null, "$" : null , "N" : "I1", "S" : "I2", "L" : null, "B" : null },
  { "+" : null, "-" : null, "0" : null, "1" : null, "$" : true, "N" : null, "S" : null, "L" : null, "B" : null },
  { "+" : null, "-" : null, "0" : "d7", "1" : "d8", "$" : null, "N" : null, "S" : null, "L" : "I5", "B" : "I6" },
  { "+" : null, "-" : null, "0" : "r2", "1" : "r2", "$" : null, "N" : null, "S" : null, "L" : null, "B" : null },
  { "+" : null, "-" : null, "0" : "r3", "1" : "r3", "$" : null, "N" : null, "S" : null, "L" : null, "B" : null },
  { "+" : null, "-" : null, "0" : "d7", "1" : "d8", "$" : "r1", "N" : null, "S" : null, "L" : null, "B" : "I9" },
  { "+" : null, "-" : null, "0" : "r5", "1" : "r5", "$" : "r5", "N" : null, "S" : null, "L" : null, "B" : null },
  { "+" : null, "-" : null, "0" : "r6", "1" : "r6", "$" : "r6", "N" : null, "S" : null, "L" : null, "B" : null },
  { "+" : null, "-" : null, "0" : "r7", "1" : "r7", "$" : "r7", "N" : null, "S" : null, "L" : null, "B" : null },
  { "+" : null, "-" : null, "0" : "r4", "1" : "r4", "$" : "r4", "N" : null, "S" : null, "L" : null, "B" : null }
];

exports.INFO = "Gramatica que acepta números binarios con signo. Ej. '+1010111', '-100011'";
