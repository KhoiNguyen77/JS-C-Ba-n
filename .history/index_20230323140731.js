// Function

compare = (a = 0, b = 0) => {
  if (typeof a !== "number" || typeof b !== "number") return 0;
  return Math.max(a, b);
};
console.log(compare(5, 10));

upperCase = (a = "") => {
  if (typeof a !== "string") {
    return console.log("Vui lòng nhập vào chữ");
  }
  let newWord = a.toLowerCase().charAt(0).toUpperCase();
  return newWord + a.toLowerCase().slice(1);
};
console.log(upperCase("nguyen"));

compare2 = (a, b, callback) => {
  let max = compare(a, b);
  callback(max);
};
inMax = (num) => {
  console.log(num);
};
console.log(compare2(500, 1000, inMax));
//  Date
// B1: viết chương trình nhập vào ngày tháng năm sinh và in ra
const birthday = new Date(2000,10,7);
const year = birthday.getFullYear();
const month = birthday.getMonth();
const date = birthday.getDate();
const prefixMonth = month < 10 || date < 10 ? "0" : "";
console.log(`${prefixMonth}${date}/${prefixMonth}${month}/${year}`);