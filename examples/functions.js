exports.GRAM = [
  {
    "tor": "G",
    "cion": ["S"]
  },
  {
    "tor": "S",
    "cion": ["i", "a", "t", "S"]},
  {
    "tor": "S",
    "cion": ["w", "(", "B", ")"]
  },
  {
    "tor": "S",
    "cion": ["a", "=", "A"]
  },
  {
    "tor": "A",
    "cion": ["a"]
  },
  {
    "tor": "A",
    "cion": ["b"]
  },
  {
    "tor": "B",
    "cion": ["A", ",", "B"]
  },
  {
    "tor": "B",
    "cion": ["A"]
  }
];

exports.ACCI = [
  { "i" : "d2", "a" : "d4", "t" : null, "w" : "d3", "(" : null, "," : null, ")" : null, "=" : null, "b" : null, "$" : null, "S" : "I1", "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : null, "w" : null, "(" : true, "," : null, ")" : null, "=" : null, "b" : null, "$" : true, "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : "d9", "t" : null, "w" : null, "(" : null, "," : null, ")" : null, "=" : null, "b" : null, "$" : null, "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : null, "w" : null, "(" : "d7", "," : null, ")" : null, "=" : null, "b" : null, "$" : null, "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : null, "w" : null, "(" : null, "," : null, ")" : null, "=" : "d5", "b" : null, "$" : null, "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : "d17", "t" : null, "w" : null, "(" : null, "," : null, ")" : null, "=" : null, "b" : "d6", "$" : null, "S" : null, "A" : "I13", "B" : null },
  { "i" : null, "a" : null, "t" : null, "w" : null, "(" : null, "," : "r5", ")" : "r5", "=" : null, "b" : null, "$" : "r5", "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : "d17", "t" : null, "w" : null, "(" : null, "," : null, ")" : null, "=" : null, "b" : "d6", "$" : null, "S" : null, "A" : "I8", "B" : "I15" },
  { "i" : null, "a" : "d17", "t" : null, "w" : null, "(" : null, "," : "d10", ")" : "r7", "=" : null, "b" : "d6", "$" : null, "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : "d11", "w" : null, "(" : null, "," : null, ")" : null, "=" : null, "b" : null, "$" : null, "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : "d17", "t" : null, "w" : null, "(" : null, "," : null, ")" : null, "=" : null, "b" : "d6", "$" : null, "S" : null, "A" : "I8", "B" : "I12" },
  { "i" : null, "a" : "d4", "t" : null, "w" : "d3", "(" : null, "," : "d2", ")" : null, "=" : null, "b" : null, "$" : null, "S" : "I14", "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : null, "w" : null, "(" : null, "," : null, ")" : "r6", "=" : null, "b" : null, "$" : null, "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : null, "w" : null, "(" : null, "," : null, ")" : null, "=" : null, "b" : null, "$" : "r3", "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : null, "w" : null, "(" : null, "," : null, ")" : null, "=" : null, "b" : null, "$" : "r1", "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : null, "w" : null, "(" : null, "," : null, ")" : "d16", "=" : null, "b" : null, "$" : null, "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : null, "w" : null, "(" : null, "," : null, ")" : null, "=" : null, "b" : null, "$" : "r2", "S" : null, "A" : null, "B" : null },
  { "i" : null, "a" : null, "t" : "r4", "w" : null, "(" : null, "," : "r4", ")" : "r4", "=" : null, "b" : null, "$" : "r4", "S" : null, "A" : null, "B" : null }
];

exports.INFO = "Gramatica que acepta funciones y expresiones. Ej. 'iatw(a,b)', 'a=b', 'w(a,b,b,b,a)'";
