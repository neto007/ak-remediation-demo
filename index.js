const _ = require('lodash');

// Extrai o nome de cada usuário. `_.pluck` foi removido no lodash 4;
// o equivalente é `_.map` com chave de shorthand.
function names(users) {
  return _.map(users, 'name');
}

module.exports = { names };
