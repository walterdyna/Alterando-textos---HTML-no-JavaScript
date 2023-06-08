/* 

Buscar o elemento no HTML...

document --> HTML

getElementById --> Tras um elemento pelo ID

getElementByClassName --> Tras TODOS os elementos com essa classe

getElementByTagName --> Tras TODOS os elementos com essa TAG

gatElementByName --> Tras TODOS os elementos com esse NAME


querySelector --> Tras UM elemento, O PRIMEIRO que encontra

querySelectorAll --> Tras TODOS os elementos que encontrar

*/

//----------------------------------- Busca de ELEmentos -----------------------------------

// const input = document.getElementById ("main-input")
// console.log(input)

// const elements = document.getElementsByClassName("paragraph-js")
// console.log(elements)

// const tag = document.getElementsByTagName("h1")
// console.log(tag)


// //----------------------------------- Seleção de Elemento-----------------------------------
// //-----------------------------------Primeiro elemento//-----------------------------------

// const selecaoPelaTag = document.querySelector("p") // buscar pela TAG
// console.log(selecaoPelaTag)

// const selecaoPelaClasse = document.querySelector(".paragraph-js") // Busca pela CLASSE
// console.log(selecaoPelaClasse)

// const selecaoPelaClasseButton = document.querySelector("button.paragraph-js") // Busca pela CLASSE - E ELEMENTO
// console.log(selecaoPelaClasseButton) 

// const selecaoPelaID = document.querySelector("#main-input") // Busca pelo ID
// console.log(selecaoPelaID) 

// //----------------------------------- Seleção de Elemento-----------------------------------
// //-----------------------------------Todos os elementos//-----------------------------------

// const selecaoPelaTagAll = document.querySelectorAll("p") // buscar pela TAG
// console.log(selecaoPelaTagAll)

// const selecaoPelaClasseAll = document.querySelectorAll(".paragraph-js") // Busca pela CLASSE
// console.log(selecaoPelaClasseAll)

// const selecaoPelaClasseButtonAll = document.querySelectorAll("button.paragraph-js") // Busca pela CLASSE - E ELEMENTO
// console.log(selecaoPelaClasseButtonAll) 

// const selecaoPelaIDAll = document.querySelectorAll("#main-input") // Busca pelo ID
// console.log(selecaoPelaIDAll) 

// //----------------------------Imprimindo e subtituindo elementos//----------------------------

// const element = document.querySelector("#main-input") // Busca pelo ID
// element.placeholder = "Nao pode ter nada aqui" // subtituição...
// //ou
// element.placeholder = 231465454 // informação ja presente 
// console.log(element.placeholder) // leitura do elemento

//pode modificar ou pegar informações presentes nos elementos HTML

/*----------------------------Alterando textos no HTML//----------------------------
Temos 3 modos de fazer esta modificação usando o JavaScript

----> textContent ----> Usado so no HTML
----> innerText   ----> Leva em conta o CSS
----> innerHTML   ----> Tras tudo

------------------------------------------NA PRATICA-------------------------------------------
*/
const element = document.querySelector(".paragraph-js") // Busca pela class

element.innerHTML = "Texto novo e tambem joga HTML jundo -> <b>OLÁ</b>" // entende que e html
element.innerText = "Texto novo e tambem joga HTML jundo -> <b>OLÁ</b>" // não intende que e html
element.textContent = "Texto novo e tambem joga HTML jundo -> <b>OLÁ</b>"// não intende html


console.log(element.textContent) //Usado so no HTML -- desconsidera qualquer outra informação.
console.log(element.innerText)   //Leva em conta o CSS - mostra o que esta apontando no CSS
console.log(element.innerHTML)   //Tras tudo inclusive as informcaçoes HTML