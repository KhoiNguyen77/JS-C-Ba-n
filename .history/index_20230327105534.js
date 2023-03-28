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
function timeSince(time) {
  const now = new Date();
  const since = new Date(time);
  const truTime = Math.floor((now.getTime() - since.getTime()) / 1000);
  let quyDoiTime = truTime / 32140800;
  if (quyDoiTime > 1) {
    console.log(`${Math.floor(quyDoiTime)} năm trước`);
  }
  quyDoiTime = truTime / 2678400;
  if (quyDoiTime > 1 && truTime <= 32140800) {
    console.log(`${Math.floor(quyDoiTime)} tháng trước`);
  }
  quyDoiTime = truTime / 604800;
  if (quyDoiTime > 1 && truTime <= 2678400) {
    console.log(`${Math.floor(quyDoiTime)} tuần trước`);
  }
  quyDoiTime = truTime / 86400;
  if (quyDoiTime > 1 && truTime < 604800) {
    console.log(`${Math.floor(quyDoiTime)} ngày trước`);
  }
  quyDoiTime = truTime / 3600;
  if (quyDoiTime > 1 && truTime <= 86400) {
    console.log(`${Math.floor(quyDoiTime)} giờ trước`);
  }
  quyDoiTime = truTime / 60;
  if (quyDoiTime > 1 && truTime < 3600) {
    console.log(`${Math.floor(quyDoiTime)} phút trước`);
  }
}
// 1 năm: 32140800
// 1 tháng:2678400
// 1 tuần:604800
// 1 ngày:86400
// 1 giờ : 3600
// 1 phút: 60
timeSince("Thu Mar 23 2023 14:47:43 GMT+0700");
//
const array = [1, 2, 3, 4, 5, 6, 7, 8];
a = array.find((x) => x > 3);
b = array.findIndex((x) => x > 3);
console.log(a);
console.log(b);
const list = [4, 5, 6, 7, 8, 9, 1, 3, 5, 6];
console.log(list.map((x) => x * 2));
const listTripple = [];

const number = [1, 2, 3, 4, 5, 6, 7, 8];
const test = number.filter((x) => x > 2);
console.log(test);
// Đảo ngược một chuỗi
// VD : "My name is evondev" => VD: "evondev is name My"
function reverseString(str) {
  if (!str) return null;
  console.log(str.split(" ").reverse().join(" "));
}

reverseString("My name is evondev");
// Đảo ngược một chuỗi bao gồm các kí tự.
//  VD: "i love" => evol i

function reverse(str) {
  if (!str) return null;
  console.log(str.split("").reverse().join(""));
}
reverse("i love");
capitalizeWord = (item) => {
  let upper = item.charAt(0).toUpperCase();
  let lower = item.slice(1).toLowerCase();
  return `${upper}${lower}`;
};
// Capitalize 1 chuỗi: VD "my name is evondev" => "My Name Is Evondev"
capitalizeStr = (str) => {
  let layChuoi = str.split(" ");
  let inHoaStr = layChuoi.map((item) => capitalizeWord(item));
  return console.log(inHoaStr.join(" "));
};

let strMau = "my name is evondev";
capitalizeStr(strMau);
// let layStr = strMau.split(" ");
// console.log(layStr);
// let example = layStr.map(
//   item => {
//     let newWord  = item.charAt(0).toUpperCase();
//     let secondWord = item.slice(1).toLowerCase();
//     return `${newWord}${secondWord}`;
//   }
// );
// let kq = example.join(" ")
// console.log(example);
// console.log(kq);

//  Bài tập cơ bản về vòng lặp for
// sao chép 1 mảng bằng vòng lặp for
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let kq = [];
for (let i = 0; i < numbers.length; i++) {
  kq.push(numbers[i]);
}
let string1 = "i love";
ketquaString = "";

for (i = string1.length - 1; i >= 0; i--) {
  ketquaString += string1[i];
  console.log(ketquaString);
}

//  Bài tập chương 6 số 1 và 2
let arrayB1 = [
  1,
  1000,
  false,
  null,
  "evondev",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
];
let ketquaB1 = [];
Bai1 = arrayB1.map((item) => {
  if (item) {
    ketquaB1.push(item);
  }
});

console.log(ketquaB1);
