import java.util.*;

public class Test6 {
    public static void main(String[] args) {
//        System.out.println(new Date( ) + "\n");
//        try {
//            Thread.sleep(1000*3);   // 休眠3秒
//        } catch (InterruptedException e) {
//            throw new RuntimeException(e);
//        }
//        System.out.println(System.currentTimeMillis());

        printMax(1,2,3);
    }
    public static void printMax( double ...numbers) {
        System.out.println(Arrays.toString(numbers));
    }
}
