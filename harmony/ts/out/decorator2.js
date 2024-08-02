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
        console.log('getter:', value);
        return value;
    };
    const setter = (newVal) => {
        value = newVal.toUpperCase();
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true, // 可枚举
        configurable: true // 可配置
    });
}
class Person {
    constructor(username) {
        this.username = '123';
        console.log('constructor:', this.username, this.hasOwnProperty('username'));
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
console.log('删除后', Person.prototype.username);
console.log(person.username); // TOM
console.log(person.__proto__ === Person.prototype); // TOM
console.log('------------------第二次-');
const person1 = new Person('Tom1');
console.log(person1.username); // TOM1
console.log(Person.prototype.username);
console.log(person.username);
/**
 * 在@upperProperty中，实际上修改的是Person.prototype.username的属性描述符，所以在实例化对象时，实际上是在修改原型对象的属性描述符。
 * 而访问username属性时，实际上是访问的原型对象的属性。
 * 所以多次实例化对象时，username属性是共享的。每次实例化对象时，都会修改username属性的属性描述符。
 * 结论：我感觉这个属性装饰器的使用场景不多，因为它修改的是原型对象而不是实例对象。用处不大。反而会在多个实例中引起混乱。建议不用。
 * */
