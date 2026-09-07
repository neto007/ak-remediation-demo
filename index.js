const _ = require('lodash');

// Extrai o nome de cada usuário. `_.pluck` foi removido no lodash 4;
// o equivalente direto é `_.map` com uma string de caminho como segunda arg.
function names(users) {
  return _.map(users, 'name');
}

module.exports = { names };
