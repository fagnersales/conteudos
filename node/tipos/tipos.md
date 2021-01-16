# JavaScript Tipos
<style>
  .sub-title {
    font-weight: 900;
    color: purple;
  }
</style>

## <span class="sub-title">String</span>
`String` é um tipo de texto e você pode declara-las de 3 diferentes formas *(ao utilizar um dos declaradores `""`, `''`, ` `` ` todas as palavras-chaves/variáveis serão inacessíveis se utilizado de forma incorreta)*, sendo elas:
```javascript
const box = '📦 caixa';  // Aspas simples
const fish = "🐟 peixe"; // Aspas duplas
const pig = `🐷 porco`;  // Crase
``` 
Utilizando `string` você terá métodos únicos relacionados à este tipo, como `.length` que retorna a quantidade de carácteres, `includes` para checar se o texto contém uma outra `string`, etc.
```javascript
const car = "Tesla Model X";

car.includes('Tesla'); // => true
car.length; // => 13
```
Caso você queira incluir variáveis dentro de um texto, você terá de somar o mesmo com a variável em questão, por exemplo:

> Nota: Somar um texto com um outro elemento equivale a uni-los!

```javascript
const price = "$10";
const bacon = "🥓 = " + price; // 🥓 = $10
```
Caso você declare a string utilizando `crase` (conhecido como `template string`), você tem uma forma mais agradável de alcançar o mesmo objetivo.
```javascript
const price = "$10";
const bacon = `🥓 = ${price}`; // 🥓 = $10
```

## <span class="sub-title">Number</span>
É uma forma de utilizar `valores númericos`... Não há muito segredo para contar, e ao utilizar um elemento do tipo númerico, você não terá muitos métodos, mas poderá fazer qualquer tipo de cálculo, por exemplo:
```javascript
const ten = 10;
ten + 100 // => 110 (Adição)
ten - 2   // => 8   (Subtração)
ten * 2   // => 20  (Multiplicação)
ten / 2   // => 5   (Divisão)
```
## <span class="sub-title">Boolean</span>
Um valor que só tem duas formas `true` ou `false`, sendo `true` um valor verdadeiro, e em contra partida, `false` sendo um valor falso. Você normalmente utilizará valores `Boolean` para fazer checagens, como por exemplo, saber se um elemento é igual a outro e tomar uma atitude baseada nisso (você utilizará `if statement` para lidar com isto!)

## <span class="sub-title">Object</span>
Comparado aos anteriores, este aqui é um pouco mais complexo. Um `objeto/object` é um grupo de elementos que se organizam em `chave/propriedade => valor` um exemplo de um objeto `person` que é declarado com `{ }` e tendo uma `chave/propriedade` chamada `name` e o valor sendo uma `string`
```javascript
const person = {
  name: 'Elon'
};
```
> Neste caso temos um objeto person com a propriedade name, cujo valor desta propreidade é "Elon"

Para acessar as `propriedades` de um `objeto` é necessário acrescentar um `.` e depois o nome da `propriedade` em questão, no nosso caso, vamos buscar a `propriedade` `name`
```javascript
person.name; // => Elon
```
Para criar um objeto com mais de uma propriedade, é necessário adicionar um `,` após o fim do `valor`, por exemplo:
```javascript
const person = {
  name: 'Elon',
  age: 49
};
```
Você também pode alterar `propriedades` dentro de um `objeto` apenas reatribuindo o valor em questão, neste exemplo, vamos mudar a propriedade `age` para `50` e adicionar uma propriedade chamada `lastName` com o valor `Musk` :
```javascript
person.age = 50;
person.lastName = 'Musk';
```
> Nota: Tentar acessar uma propriedade que não existe retornará `undefined`
****
## <span class="sub-title">Array</span>
`Array` também é um tipo de `objeto`, só que sua função é basicamente fazer uma lista de algo, uma lista de `number`, `string`, `object` e até mesmo outras `array`. Exemplo de como inicializar uma `array`
```javascript
const array = []
```
Para criar uma `array` com elementos, basta adicioná-los e separá-los por uma `,` (vírgula)
```javascript
const listOfCars = ['Model S', 'Model 3', 'Model X']
```
Buscar itens numa `array` é ainda mais simples, basta ver a posição do elemento e contar, sendo o primeiro elemento a posição `0`. Após encontrar a posição do elemento, basta escrever `[Posição]` após a array que você quer buscar o elemento.
```javascript
// ['Model S', 'Model 3', 'Model X']
//     0          1           2

listOfCars[0] // => 'Model S'
listOfCars[1] // => Model 3
listOfCars[2] // => Model X
listOfCars[3] // => undefined
```

> Nota: Por mais que não pareça, `Array` ainda sim é um objeto, com métodos diferentes sendo que a estrutura é a mesma. Basta pensar que a posição do elemento é sua propriedade, enquanto o próprio elemento é o valor.

## <span class="sub-title">Undefined</span>
Este valor refere-se a uma `variável/propriedade` que não tem um valor definido ainda, por exemplo, se você criar uma `variável` e não definir nada na mesma, `undefined` será atribuido automaticamente.
```javascript
let job;
job // => undefined
```
Você também pode atribuir `undefined` à alguma variável se julgar necessário.
```javascript
let boss = undefined;
boss // => undefined
```