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
function getAge(year) {
  if (typeof year !== "number") {
    console.log("Vui lòng nhập đúng năm");
  }
  const thisYear = new Date().getFullYear();
  return thisYear - year;
}
const age = getAge(2000);
console.log(`Tuổi của bạn là ${age} `);
// Bài 2:
// function countDown(minute = 0) {
//   let second = minute * 60;
//   let count = 0;
//   const countUp = setInterval(() => {
//     count += 1;
//     console.log(count);
//     if (count === second) {
//       alert("bạn đã hết giờ làm bài");
//       clearInterval(countUp);
//     }
//   }, 1000);
// }
// countDown(0.2);
// Bài 3:
function timeSince (time) {
    const now = new Date();
    const since = new Date(time);
    const truTime = Math.floor((now.getTime() - since.getTime())/1000);
    console.log(truTime);
    return truTime
}
const demTime = setInterval(timeSince,1000)
