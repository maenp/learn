public class PrimitiveTypeTest3 {
    public static void main(String[] args) {
        // 在 Java 中使用 final 关键字来修饰常量 声明方式和变量类似
        // 虽然常量名也可以用小写，但为了便于识别，通常使用大写字母表示常量
        final double PI = 3.1415927;

        // 字面量可以赋给任何内置类型的变量。例如
        byte a = 68;
        char b = 'A';

        // byte、int、long、和short都可以用十进制、16进制以及8进制的方式来表示
        int decimal = 100;
        int octal = 0144;   // 0 开头代表8进制
        int hex =  0x64;    // 0x 代表 16 进制

        // 字符串常量和字符变量都可以包含任何 Unicode 字符

        System.out.println("Hello World");
        System.out.println("\"two \n lines\"");
        System.out.println("\"This is in quotes\"");

        // 自动转换
        float f1 = 3.1243123f;
        int i0 = (int)f1;
        System.out.println(i0);
        System.out.println((int)-45.89f);

        char c1='a';//定义一个char类型
        int i1 = c1;//char自动类型转换为int
        System.out.println("char自动类型转换为int后的值等于"+i1);

        char c2 = 'A';//定义一个char类型
        int i2 = c2+1;//char 类型和 int 类型计算
        System.out.println("char类型和int计算后的值等于"+i2);
    }
}
