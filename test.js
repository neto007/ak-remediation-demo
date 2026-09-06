const { names } = require('./index.js');

const out = names([{ name: 'ana' }, { name: 'bia' }]);
if (JSON.stringify(out) !== JSON.stringify(['ana', 'bia'])) {
  console.error('FALHOU: esperado ["ana","bia"], recebido', out);
  process.exit(1);
}
console.log('ok');
