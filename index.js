const _ = require('lodash');

// Extrai o nome de cada usuário. `_.pluck` foi removido no lodash 4,
// então usamos o equivalente `_.map` com shorthand de propriedade.
function names(users) {
  return _.map(users, 'name');
}

module.exports = { names };
