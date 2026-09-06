const _ = require('lodash');

// Extrai o nome de cada usuário. `_.pluck` existe no lodash 3 e foi
// removido no lodash 4 — um bump de versão sem tocar aqui quebra o módulo.
function names(users) {
  return _.pluck(users, 'name');
}

module.exports = { names };
