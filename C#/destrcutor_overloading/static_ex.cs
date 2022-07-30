using System;

namespace CS011_ClassAdvanced
{ 
    class CountNumber {
        public static int num = 0;
        public void count() {
            num++;
        }
        public int getNum() {
            return num;
        } 
    }
    class MethodStatic {
    public static int  Sum(int a, int b)
    {
        return a + b;
    }

    class Program
    { 
        
        static void Main(string[] args)
        {
            CountNumber c1 = new CountNumber();
            CountNumber c2 = new CountNumber();

            c1.count();     // CountNumber.num = 1;
            c2.count();     // CountNumber.num = 2;
            c1.count();     // CountNumber.num = 3;
            c2.getNum();    // trả ve 3
            int ans = MethodStatic.Sum(1,2); // tra về 3 - gọi phương thức mà không cần tạo đối tượng
        }
        //


    }
}
 
}