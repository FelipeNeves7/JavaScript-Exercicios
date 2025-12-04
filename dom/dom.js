
let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorId = document.getElementById("formulario");
let elementoPorTag = document.getElementsByTagName("a");



console.log(elementoPorTag);
console.log(elementosPorClass);
console.log(elementoPorId);
console.log(elementoPorTag[0].textContent);

elementoPorTag[0].textContent = "Gui Veras Rocha"; // modifica o conteudo do elemento

elementoPorTag[0].style.color = "Red"
elementoPorTag[0].style.fontSize = "30px"

// 1. crie uma variavel que tenha o valor de um elemento buscado pela sua tag ✅
// 2. exiba o 2 segundo elemento(item) da variavel elementos ✅
// 3. acesse a propiedade innerTextda variavel elementoPorTag()vão ter que acessar pela posição do elemento e exiba no console.log ✅
// 4. acesse a propriedade style.color e atribui uma cor red para a posição 1 da variavel por ElementPorTag ✅
// 5. acesse a propriedade style.fontSize e atribui uma fonte de 30px por ElementPorTag ✅

