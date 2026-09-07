const _ = require('lodash');

// Extrai o nome de cada usuário. `_.pluck` foi removido no lodash 4;
// `_.map` é o equivalente recomendado desde o 4.x.
function names(users) {
  return _.map(users, 'name');
}

module.exports = { names };
