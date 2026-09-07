const _ = require('lodash');

// Extrai o nome de cada usuário com `_.map`, o substituto do `_.pluck`
// removido no lodash 4.
function names(users) {
  return _.map(users, 'name');
}

module.exports = { names };
