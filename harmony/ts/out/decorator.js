"use strict";
// 类装饰器、属性装饰器、方法装饰器、参数装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeting_1;
// 装饰器就是一个函数
// TypeScript 官方支持装饰器，装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，访问符，属性或参数上，可以修改类的行为。
// "experimentalDecorators": true, 先在tsconfig.json中开启装饰器
/**
 * 类装饰器: 普通装饰器和装饰器工厂
 * */
// 普通装饰器
function Greeter(target) {
    target.prototype.age = 27;
    target.prototype.greet = function () {
        console.log('Hello, ' + this.username);
    };
}
// 装饰器工厂
function Greeter2(greeting) {
    return function (target) {
        target.prototype.greet2 = function () {
            console.log(greeting + ', ' + this.username);
        };
    };
}
let Greeting = Greeting_1 = class Greeting {
    constructor(username) {
        this.username = username;
        console.log(Greeting_1.prototype === this);
    }
};
Greeting = Greeting_1 = __decorate([
    Greeter,
    Greeter2('Hi')
], Greeting);
// 相当于
// class Greeting {
//     username: string;
//     age = 27;
//     greet(): void {
//         console.log('Hello, ' + this.username);
//     }
//     greet2(): void {
//         console.log('Hi, ' + this.username);
//     }
//     constructor(username: string) {
//         this.username = username;
//     }
// }
let myGreeting = new Greeting('semlinker');
myGreeting.greet(); // Hello, semlinker
myGreeting.greet2(); // Hi, semlinker
