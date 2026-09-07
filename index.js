const _ = require('lodash');

// Extrai o nome de cada usuário. `_.pluck` foi removido no lodash 4;
// `_.map` com caminho de propriedade é o equivalente direto.
function names(users) {
  return _.map(users, 'name');
}

module.exports = { names };
