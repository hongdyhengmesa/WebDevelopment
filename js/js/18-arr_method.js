// array method
const myArr = [];

myArr[0] = "Mesa";
myArr[1] = 1011;
myArr[2] = false

// method of this array
myArr.push("itc"); // push add new items to array.
console.log(myArr)

myArr.pop(); // pop remove last items of array.
console.log(myArr)

myArr.unshift(32); // unshift add the first item to array
console.log(myArr)

myArr.splice(1,1, 42); // slice used for delete and add items of array
console.log(myArr)

// Another for example about array
const myArr1 = ["A", "B", "C", "D", "E", "F"];

const newArr = myArr1.slice(2,5);
console.log(newArr);

myArr1.reverse(); // reverse used for up to down (1,2,3,4 -> 4,3,2,1)
console.log(myArr1)

const newString = myArr1.join()
console.log(newString)

const newArr1 = newString.split(" , ");
console.log(newArr1)

console.log("-----------------------------------------------");

const myArrA = ["A", "B", "C"];
const myArrB = ["D", "E", "F"];

const newMyArr = myArrA.concat(myArrB); // concat combine together.
console.log(newMyArr)