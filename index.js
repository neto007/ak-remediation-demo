const _ = require('lodash');

// Extrai o nome de cada usuário. `_.pluck` foi removido no lodash 4;
// `_.map` com atalho de propriedade é o equivalente documentado.
function names(users) {
  return _.map(users, 'name');
}

module.exports = { names };
