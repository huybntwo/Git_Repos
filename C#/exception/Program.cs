using System;

namespace CS015_Error_Exception{
    class Program{
        public static void UserInput(string  s) {
            if (s.Length > 10)
            {
                Exception e = new DataTooLongExeption();
                throw e;    // lỗi văng ra
            }
            //Other code - no exeption
        } 
        public static double Thuong(double x, double y) {
            if (y == 0) {
                // Khởi tạo ngoại lệ, tham số là thông báo lỗi
                Exception myexception = new Exception("Số chia không được bằng 0");

                // phát sinh ngoại lệ, code phía sau throw không được thực thi
                throw myexception;
            }
            return x / y;
        }
        static void Main(string[] args)
        { 
            try{
                double ans = Thuong(100,0);

            }
            catch(Exception e){
                Console.WriteLine(e.Message);
            }

            /* Thực hành bắt lỗi Exception */
            try {
                // khối này được giám sát để bắt lỗi - khi nó phát sinh
                int[] mynumbers = new int[] {1,2,3};
                int i = mynumbers[10];                  // dòng này phát sinh lỗi
                Console.WriteLine(i);                   // dòng này không được thực thi vì lỗi trên
            }
            catch (Exception loi)
            {
                // khối này thực thi khi bắt được lỗi
                Console.WriteLine("Có lỗi rồi");
                Console.WriteLine(loi.Message);
            }

             try {
                 UserInput("Đây là một chuỗi rất dài ...");
             }
             catch (DataTooLongExeption e) {
                 Console.WriteLine(e.Message);
             }
             catch (Exception otherExeption) {
                 Console.WriteLine(otherExeption.Message);
             }
             //catch many error
             try {
                int x = 10;
                int y = 0;
                int z = x / y;

            }
            catch (DivideByZeroException e1) {
                Console.WriteLine(e1.Message);
            }
            catch (Exception e2) {
                Console.WriteLine(e2.Message);
            }
            finally {
                // Luôn được thi hành dù có phát sinh ngoại lệ hay không
                Console.WriteLine("All error is catched!");
            }
        }
    }
}
