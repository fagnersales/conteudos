# Variáveis

Variáveis são pontos na memória que podem ser acessados a partir de um nome definido por você mesmo!

Veja aqui um extemplo de variável utilizando `let`:
```javascript
let carro;
```
A partir de agora, a variável `carro` está associada à um ponto na memória, entretanto, nenhum valor foi adicionado à ela, então se tentarmos checar o que há dentro dela `undefined` será retornado:
```javascript
console.log(carro);
// => undefined
```
Para atribuirmos um valor à variável temos que passar o sinal de igual `=` após o nome da variável e em seguida inserir o seu valor, por exemplo: 
```javascript
let meuCarro = "Tesla Model X";
```
Ao checar o valor da variável, "Tesla Model X" será retornado:
```javascript
console.log(meuCarro);
// => Tesla Model X
```
Também é possível redefinir o valor de uma variável, vamos fazer isto redefinindo o valor da variável `carro` que até o momento, nada foi atribuído:
```javascript
carro = "Tesla Cybertruck";
```
Tente checar o valor da variável após a alteração e veja o que acontece!

Ter uma variável que pode ser redefinida, pode ser problemático, então para evitar isto, você pode declarar variáveis utilizando `const`, que a mesma **não pode** ser diretamente redefinida após declarada!
```javascript
const meuNumero = 123456
meuNumero = 654321
// => Uncaught TypeError: Assignment to constant variable.
const meuTelefone;
// => Uncaught SyntaxError: Missing initializer in const declaration.
```

### Caso você queira ver o código inteiro (Os exemplos de erro não aparecem aqui!)
```javascript
let carro;

console.log(carro);

let meuCarro = "Tesla Model X";

console.log(meuCarro);

carro = "Tesla Cybertruck";

console.log(carro);

// => undefined
// => Tesla Model X
// => Tesla Cybertruck
```