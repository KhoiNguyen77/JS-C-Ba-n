// 1. parenNode, parentElement, removeChild
// parenNode vs parentElement
const span = document.querySelector(".span");
console.log(span.parentElement);
console.log(span.parentNode);

// removeChild
// span.parentNode.removeChild(span);

// 2. nextElement Sibling vs  previous ElementSibling

const nextSpan = span.nextElementSibling; 
console.log(nextSpan); //=> trả về phần tử cùng cấp phía sau
const span2 = document.querySelector(".span-2");
const previousSpan = span2.previousElementSibling;
console.log(previousSpan); //=> trả về phần tử cùng cấp ở phía trước

// 3. childNode vs children:
