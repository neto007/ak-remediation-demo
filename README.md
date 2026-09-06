# ak-remediation-demo

Projeto de demonstração para a remediação autônoma do Artifact Keeper.

Depende de `lodash@^3.10.1`, afetado por **CVE-2019-10744** (prototype
pollution). A versão corrigida é a 4.17.21 — um salto de major que remove
`_.pluck`, usado em `index.js`. Um bump de versão puro deixa o projeto
quebrado; a correção exige adaptar o código.

Isso é o que o agente tem que resolver sozinho.
