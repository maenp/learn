"use strict";
/**
 * 属性装饰器
 *
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
 * 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象(prototype)。
 * 2. 成员的名字。
 * */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function upperProperty(target, propertyKey) {
    let value = target[propertyKey];
    console.log('target:', target === Person.prototype);
    console.log('value:', value);
    const getter = () => {
        return value;
    };
    const setter = (newVal) => {
        console.log('setter:', newVal);
        value = newVal.toUpperCase();
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true, // 可枚举
        configurable: true // 可配置
    });
    // target[propertyKey] = 'bbb';
}
class Person {
    constructor(username) {
        this.username = 'aaa';
        console.log('constructor:', this.username, this.hasOwnProperty('username')); // AAA false 
        // console.log('constructor2:', Person.prototype.username);
        // console.log(this === Person.prototype);
        this.username = username;
    }
}
__decorate([
    upperProperty
], Person.prototype, "username", void 0);
console.log('删除前', Person.prototype.username);
const person = new Person('Tom');
// console.log('删除后',Person.prototype.username); 
// console.log(person.username); // TOM
// console.log(person.__proto__ === Person.prototype); // TOM
// console.log('------------------第二次-');
// const person1 = new Person('Tom1');
// console.log(person1.username); // TOM1
// console.log(Person.prototype.username); 
// console.log(person.username);
/**
 * 第二次看代码的理解
 *
 * 详细拆分
 * 1 在没有实例化之前，@upperProperty装饰器会被调用，修改Person.prototype.username的属性描述符。
 * 2 实例化之前username没有值的
 * 3 实例化
 *      1. 实例化时，先赋值username的初始值 'aaa' ，如果没有初始值则跳过这一步
 *          1.1 赋值时，调用this.username = 'aaa'
 *          1.2 实例对象上没有username属性，所以会在原型对象上查找，找到了username属性
 *          1.3 原型对象上的username属性的属性描述符已经被修改，所以会调用setter方法 转换为大写
 *          1.4 setter方法中，将传入的值转换为大写，赋值给value
 *      2. 实例化完成后，调用构造函数，
 *          2.1 打印this.username，此时打印的是原型对象上的username属性 还是初始值 'AAA'
 *          2.2 打印this.hasOwnProperty('username')，此时打印的是实例对象上是否有username属性，所以是false
 *          2.3 赋值this.username = username ，同上，会调用setter方法，转换为大写
 *
*/
/**
 * 第三次看代码的理解
 *
 * 我发现第二次看代码的理解是有漏洞的，第二次我以为只要是原型对象上username有值了，实例对象读取username就会读取原型对象上的值，但是实际上不是这样的。
 * 因为我在upperProperty装饰器中直接给Person.prototype.username赋值而不是修改属性描述符的时候，实例对象读取的是实例对象上的值。
 *
 * 所以就有一个疑问？？？
 * 为什么修改了原型对象的属性的属性描述符后，实例化后读取的是原型对象的属性，而我修改了原型对象的属性值，实例化后读取的是实例对象的属性值
 * 简单说就是： 为什么在修改了原型对象的属性描述符后，实例化后读取的是原型对象的属性
 *
 * 答案如下：
 * 用Object.defineProperty来修改原型对象的属性描述符，情况就不同了。
 * 通过Object.defineProperty修改原型对象的属性描述符（包括get和set方法）会影响所有通过该原型创建的实例。
 * 这是因为实例在访问一个属性时，如果在实例自身上找不到这个属性，就会沿着原型链向上查找，直到找到这个属性或到达原型链的顶端。
 * 当使用Object.defineProperty在原型上定义了一个属性的getter和setter时，这些定义会应用于通过该原型创建的所有实例。
 * 因此，即使是实例化后创建的对象，当访问或修改这个属性时，也会触发原型上定义的getter和setter。
 *
 * 答案是死的，没有那么多为什么，只有这样。记住就行了。
*/
/**
 *
 * 第一次看代码的理解
 *
 * 在@upperProperty中，实际上修改的是Person.prototype.username的属性描述符，所以在实例化对象时，实际上是在修改原型对象的属性描述符。
 * 而访问username属性时，实际上是访问的原型对象的属性。
 * 所以多次实例化对象时，username属性是共享的。每次实例化对象时，都会修改username属性的属性描述符。
 * 结论：我感觉这个属性装饰器的使用场景不多，因为它修改的是原型对象而不是实例对象。用处不大。反而会在多个实例中引起混乱。建议不用。
 * */
