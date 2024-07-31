public class Test4 {
    public static void main(String[] args) {

//        int index = 0;
//        while (index < 10) {
//            index ++;
//            System.out.println(index);
//        }

//        int index = 10;
//        do {
//            index --;
//            System.out.println(index);
//        } while (index < 0);

//        for(int x = 10; x < 20; x++) {
//            System.out.print("value of x : " + x );
//            System.out.print("\n");
//        }

//        int [] numbers = {10, 20, 30, 40, 50};
//
//        for(int item : numbers ){
//            System.out.print( item );
//            System.out.print(",");
//        }

        String [] names ={"James", "Larry", "Tom", "Lacy"};
        for( String name : names ) {
            System.out.print( name );
            System.out.print(",");
        }
    }
}
