let myFunc = (nameFn) => ('Hello ' + nameFn() + '.');

let printName = (nameFn, printFn) => printFn(myFunc(nameFn));

// printName( () => 'Adam', console.log);


let messageFn2 = function(name, wheather) {
  const message = 'Hello, Adam';
  if (wheather == 'sunny') {
    const message = 'It is a nice day';
    console.log(message);
  } else {
    const message = 'It is ' + wheather + ' today';
    console.log(message);
  }
  console.log(message);
};

// messageFn('Adam', 'raining');

let myFn = function(name) {
  const myLocal = 'sunny';
  const innerFn = function() {
    return ('Hello ' + name + '. Today is ' + myLocal + '.');
  };
  return innerFn();
};
// console.log(myFn('Adam'));

let firstBool = true;
let secondBool = false;

let firstStr = 'This is a string';
let secondStr = 'And so is this';

let messageFn = function(wheather) {
  const message = `It is ${ wheather } today`;
  console.log(message);
};
messageFn('raining');

let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;


let myData1 = 5 + '5';
// console.log(myData1);

let firstVal = '5';
let result = Number(firstVal) + Number(firstVal);
// console.log(result);

let myArr2 = new Array();
myArr2[0] = 100;
myArr2[1] = 'Adam';
myArr2[2] = true;

let myArr = [100, 'Adam', true];

for (let i = 0; i < myArr.length; i++) {
  console.log('Index  ' + i + ': ' + myArr[i]);
}
console.log('---');
myArr.forEach((value, index) => console.log('Index  ' + index + ': ' + value));


let otherArr = [...myArr, 200, 'Bob', false];
console.log('---');
otherArr.forEach((value, index) => console.log('Index  ' + index + ': ' + value));

let products = [
  { name: 'Hat', price: 24.5, stock: 10 },
  { name: 'Kayak', price: 289.99, stock: 1 },
  { name: 'Soccer Ball', price: 10, stock: 0 },
  { name: 'Running Shoes', price: 116.50, stock: 20 }
];

let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log('---');
console.log('Total value: $' + totalValue.toFixed(2));




