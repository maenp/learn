/**
 * 函数装饰器
 * 参数：
 *  target: 类的原型对象
 *  name: 被装饰的方法的名字
 *  descriptor: 被装饰的方法的属性描述符
 * 
*/

function log(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('target:', target);
    console.log('name:', name);
    console.log('descriptor:', descriptor);
    
    let oldValue = descriptor.value;
    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(this, arguments);
    }
    return descriptor;
}

class Test {
    total: number = 0;
    @log
    add(a: number, b: number) {
        return a + b;
    }
}

const t = new Test();
console.log(t.add(1, 2)); // 3

/**
 * 没什么好说的，很简单
 * 修改了函数的属性描述符，增加了一个打印日志的功能
 * 
 * 其实就是把原来的函数保存起来，然后在新的函数中调用原来的函数
 * */ 