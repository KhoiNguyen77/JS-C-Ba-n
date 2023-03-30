// 1. parenNode, parentElement, removeChild
// parenNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentElement);
console.log(span.parentNode);

// removeChild
span.parentNode.removeChild(span);

// 2. nextElement Sibling vs  previous ElementSibling