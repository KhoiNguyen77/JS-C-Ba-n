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
const age2 = getAge(2000);
console.log(`Tuổi của bạn là ${age2} `);
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
// ketquaB1 = arrayB1.map((item) => {
// //   if (item) {
// //     ketquaB1.push(item);
// //   }
// // });

// // console.log(ketquaB1);
let filterArray = arrayB1.filter((item) => Boolean(item));
console.log(filterArray);

let arrayB2 = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];
//
const result = arrayB2.flat(2).filter((item) => Boolean(item));
console.log(result);
// Bài 3: Đào ngược số nguyên. Ví dụ 1234 ==> 4321

reverseNumber = (num) => {
  let numToStr =
    parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
  console.log(numToStr);
};
reverseNumber(-12345);

fizzBuzz = (num) => {
  for (let i = 1; i < num; i++) {
    if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else if (i % 2 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    }
  }
};
fizzBuzz(4);

// Bài 4:

checkStr = (str) => {
  let character = "aoeui";
  let count = 0;
  for (let c of str) {
    if (character.includes(c)) count += 1;
  }
  console.log(count);
};
checkStr("evondev");

// Bài 5
let arraySo = [1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]; // kết quả trả về là [1,2,3,4,5,6,7]

uniqueSo = (arrSo) => {
  let uniqueArray = [];
  for (let i = 0; i < arrSo.length; i++) {
    if (!uniqueArray.includes(arrSo[i])) uniqueArray.push(arrSo[i]);
  }
  console.log(uniqueArray);
};
uniqueSo(arraySo);

//  Bài 7: Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào. Ví dụ
// ([1,2,3,4,5],2) => [[1,2],[3,4],[5,6]]
let mang = [1, 2, 3, 4, 5, 6];

phanMang = (arr, num) => {
  let result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, num + index));
    index = index + num;
    console.log(result);
  }
};

phanMang(mang, 4);

let user = {
  firstName: "Nguyên",
};
let user2 = Object.assign(user);

//  TH1: This ở đây sẽ đề cập tới object, key gần nhất
let student2 = {
  name: "evondev",
  schol: "Cao Thang",
  age: 27,
  male: true,
  "last-name": "tuan",
  hi: function () {
    console.log(`my name is ${this.name} and I'm ${this.age} years old`);
  },
  fullName: {
    name: "Tran Anh Tuan",
  },
};
student2.hi();
// Optional chaining
console.log(student2.fullName); //trả về undefined nếu như key không tồn tại
// console.log(student2.fullName.name); //trả về Cannot read properties of undefined (reading 'name')
if (student2.fullName) {
  if (student2.fullName.name) {
    console.log(student2.fullName.name);
  }
}

// student2.fullName?.name ==> Nếu có key là full name thì mới chạy qua .name
console.log(student2.fullName?.name);

// Destructuring object
//  const {name, age, male} = student2;

let { name, age, male, ...rest } = student2;
console.log(name, age, male, rest);

let objNew = {
  name: "evondev",
  school: "Cao Thang",
  age: 27,
};
function whatYourInfo2({ name, age, school }) {
  console.log(name, age, school);
}

whatYourInfo2(objNew);
function whatYourInfo(obj) {
  console.log((obj.name, obj.age, obj.school));
}

// BT Object
//  Viết 1 function kiểm tra value có phải là object hay không
//  {} [] null ==> đều là type object

isObject = (value) => {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
};
console.log(isObject(null));

// BT 2: {a: 1, b:2} => [["a":1], ["b":2]]

objectToArray = (obj) => {
  if (!isObject(obj)) return;
  let result = Object.entries(obj);
  console.log(result);
};
objectToArray({
  a: 1,
  b: 2,
  c: 3,
});

// BT 3: Viết phương thức without. VD {{a: 1, b:2}, b} => {a:1}

without = (obj, ...key) => {
  let copyObj = { ...obj };
  key.forEach((item) => delete copyObj[item]);
  let result = copyObj;
  console.log(result);
};
without(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  "b"
);

// BT 4: Viết 1 function để kiểm tra 2 object truyền vào có bằng nhau không

isEqualOBject = (obj1, obj2) => {
  
}
