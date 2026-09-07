const _ = require('lodash');

function names(users) {
  return _.map(users, 'name');
}

module.exports = { names };
