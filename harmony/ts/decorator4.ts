/**
 * 参数装饰器
 * 参数装饰器声明在一个参数声明之前（紧靠着参数声明）。 参数装饰器应用于类构造函数或方法声明。
 * 参数装饰器不能用在声明文件d.ts,重载或其它外部上下文（比如declare的类）里。
 * 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
 * 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * 2. 成员的名字。
 * 3. 参数在函数参数列表中的索引。
 * 
*/


function logParameter(target: any, key: string, index: number) {
    console.log('target:', target); // Test1 {}
    console.log('key:', key);       // greet
    console.log('index:', index);   // 0
}

class Test1 {
    greet(@logParameter message: string): string {
        console.log('greet:', message);
        
        return message;
    }

    // static greet(@logParameter message: string): string {
    //     return message;
    // }
}


const t1 = new Test1();
console.log('-------------------------------------');

t1.greet('Hello, semlinker1'); // Hello, semlinker
t1.greet('Hello, semlinker1'); // Hello, semlinker


/**
 * 看起来 参数装饰器没什么用处，只能打印一些信息
 * 
*/
