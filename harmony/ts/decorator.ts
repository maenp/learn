// 类装饰器、属性装饰器、方法装饰器、参数装饰器

// 装饰器就是一个函数
// TypeScript 官方支持装饰器，装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，访问符，属性或参数上，可以修改类的行为。

// "experimentalDecorators": true, 先在tsconfig.json中开启装饰器



/**
 * 类装饰器: 普通装饰器和装饰器工厂
 * */ 

// 普通装饰器
function Greeter(target: Function): void {
    target.prototype.age = 27;
    target.prototype.greet = function(): void {
        console.log('Hello, ' + this.username);
    }
}

// 装饰器工厂
function Greeter2(greeting: string) {
    return function(target: Function): void {
        target.prototype.greet2 = function(): void {
            console.log(greeting + ', ' + this.username);
        }
    }
}

@Greeter
@Greeter2('Hi')
class Greeting {
    username: string;
    age!: number;
    greet!: Function;
    greet2!: Function;
    constructor(username: string) {
        this.username = username;
        console.log(Greeting.prototype === this);
        
    }
}

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




