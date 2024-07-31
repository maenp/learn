"use strict";
// 抽象类
class Animal {
    move() {
        console.log('roaming the earch...');
    }
}
class Cat extends Animal {
    // 实现抽象方法 makeSound
    makeSound() {
        console.log('miao miao');
    }
}
class Dog extends Animal {
    makeSound() {
        console.log('wang wang');
    }
}
const cat = new Cat();
const dog = new Dog();
// 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
const animals = [cat, dog];
animals.forEach(animal => {
    animal.makeSound();
});
