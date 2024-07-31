// 抽象类
abstract class Animal {
    // 抽象方法 不能包含具体实现并且必须在子类中实现
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

class Cat extends Animal {
    // 实现抽象方法 makeSound
    makeSound(): void {
        console.log('miao miao');
    }

}



class Dog extends Animal {
    makeSound(): void {
        console.log('wang wang');
    }

}

const cat = new Cat();
const dog = new Dog();

// 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
const animals: Animal[] = [cat, dog];
animals.forEach(animal => {
    animal.makeSound();
});