"use strict";
/**
 * 函数装饰器
 * 参数：
 *  target: 类的原型对象
 *  name: 被装饰的方法的名字
 *  descriptor: 被装饰的方法的属性描述符
 *
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, name, descriptor) {
    console.log('target:', target);
    console.log('name:', name);
    console.log('descriptor:', descriptor);
    let oldValue = descriptor.value;
    descriptor.value = function () {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(this, arguments);
    };
    return descriptor;
}
class Test {
    constructor() {
        this.total = 0;
    }
    add(a, b) {
        return a + b;
    }
}
__decorate([
    log
], Test.prototype, "add", null);
const t = new Test();
console.log(t.add(1, 2)); // 3
/**
 * 没什么好说的，很简单
 * 修改了函数的属性描述符，增加了一个打印日志的功能
 *
 * 其实就是把原来的函数保存起来，然后在新的函数中调用原来的函数
 * */ 
