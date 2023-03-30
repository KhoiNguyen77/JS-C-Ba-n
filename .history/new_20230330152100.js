// 1. parenNode, parentElement, removeChild
// parenNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentElement);
console.log(span.parentNode);
const removeSpan = document.querySelector("h3");
removeSpan.removeChild("span");
span.parentNode.removeChild(span);