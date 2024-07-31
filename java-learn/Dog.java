public class Dog {
    int age; // 成员变量：成员变量是定义在类中，方法体之外的变量。这种变量在创建对象的时候实例化。成员变量可以被类中方法、构造方法和特定类的语句块访问。
    static int sex = 1; // 类变量也声明在类中，方法体之外，但必须声明为 static 类型。
    void eat() {
        int num = 1; // 局部变量：在方法、构造方法或者语句块中定义的变量被称为局部变量。变量声明和初始化都是在方法中，方法结束后，变量就会自动销毁。
    }

//构造方法
//每个类都有构造方法。如果没有显式地为类定义构造方法，Java 编译器将会为该类提供一个默认构造方法。
//在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法。
    public Dog() {
        System.out.println("小狗没有名字");
    }
    public Dog(String name) {
        System.out.println("小狗的名字是 : " + name );
    }

    public static void main(String[] args){
        // 下面的语句将创建一个Puppy对象
        Dog myDog = new Dog("tommy");
        myDog.setAge(3);
        System.out.println(myDog.age);

    }

    public void setAge(int age) {
        this.age = age;
    }
    public int getAge() {
        System.out.println(age);
        return age;
    }
}
// 一个源文件只能有一个 public 类
// 一个源文件可以有多个非 public 类
// 源文件的名称应该和 public 类的类名保持一致，比如这个源文件的 public 类的类名是Dog，那么这个源文件的文件名应该也是Dog.java

//如果一个类定义在某个包中，那么 package 语句应该在源文件的首行
//如果源文件包含 import 语句，那么应该放在 package 语句和类定义之间。如果没有 package 语句，那么 import 语句应该在源文件中最前面。
//import 语句和 package 语句对源文件中定义的所有类都有效。在同一源文件中，不能给不同的类不同的包声明。
