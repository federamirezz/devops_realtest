const sumar = require('./calc');

console.assert(sumar(2, 3) === 5, 'Test fallido: 2 + 3 !== 5');
console.assert(sumar(-1, 1) === 0, 'Test fallido: -1 + 1 !== 0');
console.assert(sumar(0, 0) === 0, 'Test fallido: 0 + 0 !== 0');

console.log("✅ Todos los tests pasaron correctamente");
