const itsArray = [];
const array = [1, 2, 3, 4, 5];
console.log(Array.isArray(itsArray));
console.log(Array.isArray(array));
console.log(Array.isArray('[]'));
console.log(Array.isArray(new Array(5,7,8)));
console.log(Array.isArray(new Int8Array('sylhet')));
console.log(Array.isArray(new Int8Array(['sylhet'])));