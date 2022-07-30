using System;

namespace CS023_Dispose {
    class A : IDisposable {
        bool resource = true;
        public void Dispose () {
            Console.WriteLine ("Phương thức này gọi tự động khi hết using");
            resource = false; // giải phóng tài nguyên
        }
    }
    class Program {
        static void Main (string[] args) {

            using (var ans = new A ()) {
                Console.WriteLine ("Do something ...");
            }
            //Sử dụng với using, hết lệnh Dispose sẽ thi hành và mọi tài nguyên được giải phóng
            using (WriteData writeData = new WriteData("filename.txt")) {
                Console.WriteLine ("Free filename.txt!!!");
            }
            //Nếu không dùng using, thì chủ động gọi Dispose, tài nguyên cũng giải phóng đúng yêu cầu.
            WriteData writeData = new WriteData("filename.txt");
            //do something
            writeData.Dispose();

        }
    }
}
