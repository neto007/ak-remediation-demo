const _ = require('lodash');

// Extrai o nome de cada usuário. `_.pluck` foi removido no lodash 4;
// `_.map` com iteratee de atalho faz o mesmo papel.
function names(users) {
  return _.map(users, 'name');
}

module.exports = { names };
