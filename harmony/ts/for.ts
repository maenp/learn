// 可迭代对象
/**
 * 只要对象有Symbol.iterator属性，那么它就是一个可迭代对象
 * 可迭代对象可以使用for...of循环进行遍历
 * 
*/


// // 数组
// let arr = [1, 2, 3, 4];
// for (let value of arr) {
//     console.log(value);
// }

// // 字符串
// let str = 'hello';
// for (let value of str) {
//     console.log(value);
// }

// // Set
// let set = new Set([1, 2, 3, 4]);
// for (let value of set) {
//     console.log(value);
// }

// // Map
// let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// for (let value of map) {
//     console.log(value);
// }

// 类数组对象
// obj 已经有了Symbol.iterator属性，所以它是一个可迭代对象
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let value of obj) {
    console.log(value);
}
// 为什么for...in循环不会遍历obj对象的Symbol.iterator属性呢？
// 因为for...in循环只会遍历对象自身的和继承的可枚举属性，而Symbol.iterator属性是不可枚举的

// for...in循环
let obj2 = {
    a: 1,
    b: 2,
    c: 3
};

for (const key in obj2) {
    console.log(key);
}

/**
 * 为什么obj2对象没有Symbol.iterator，却可以使用for...in循环进行遍历呢？
 * for...in循环和for...of循环在JavaScript中用于遍历对象的机制不同。
 *  for...in循环用于遍历一个对象的所有可枚举属性，包括其原型链上的属性。这种循环不需要对象具有Symbol.iterator属性。
 *  for...of循环用于遍历可迭代对象的值，这包括数组、字符串、Map、Set等，但不包括普通对象，除非这些对象定义了Symbol.iterator方法。
*/


