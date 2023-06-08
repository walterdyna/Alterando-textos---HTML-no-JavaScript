# Elementos - JavaScript - JavaScript


----------------------------------- Elementos - JavaScript -----------------------------------

Aqui está uma explicação resumida sobre os três conceitos:

textContent: A propriedade textContent é usada para obter ou definir o texto puro contido em um elemento HTML. Ela retorna o conteúdo textual de um elemento, incluindo o texto de seus elementos filhos, mas sem as tags HTML. Por exemplo, se houver um parágrafo <p>Olá, mundo!</p>, o textContent desse elemento retornará "Olá, mundo!".

innerText: A propriedade innerText também é usada para obter ou definir o conteúdo textual de um elemento HTML, mas com uma diferença sutil em relação ao textContent. O innerText considera a apresentação visual do elemento, excluindo o conteúdo de elementos ocultos por estilos CSS, enquanto o textContent retorna todo o conteúdo, independentemente da exibição. Portanto, o innerText pode ser influenciado por estilos, enquanto o textContent não.

innerHTML: A propriedade innerHTML é usada para obter ou definir o conteúdo HTML de um elemento. Ela retorna o conteúdo completo do elemento, incluindo todas as tags HTML e seus atributos. Se houver elementos filhos, eles também serão retornados como parte da string HTML. É importante ter cuidado ao usar o innerHTML para definir o conteúdo de um elemento, pois ele permite a inserção de HTML arbitrário, o que pode levar a vulnerabilidades de segurança se o conteúdo for fornecido pelo usuário.

Em resumo, textContent retorna apenas o texto sem formatação de um elemento, innerText retorna o texto visível levando em consideração estilos CSS e innerHTML retorna o conteúdo completo do elemento em formato HTML, incluindo as tags.


