using System;

namespace CS011_ClassAdvanced
{  
    class Student {
    //Biến readonly có nghĩa là chỉ đọc, không sửa đổi được nữa. Tuy nhiên so với hằng số const thì có mấy điểm khác như sau:
    //Hằng số thì phải khởi tạo ngay giá trị cho nó khi khởi tạo, biến readonly thì không khởi tạo ngay cũng được
    //Biến readonly có thể gán giá trị cho nó trong hàm khởi tạo (và giá trị gán theo kết quả của một biểu thức nào đó)

            public readonly string name;
            public Student(string name)
            {
                this.name = name;
            }

        }
            // Student s = new Student("Abc");     // khởi tạo biến readonly trong hàm tạo
            // string n = s.name;                  // đọc biển readonly
            // s.name = "AA";                      // lỗi - vì không thể gán - chỉ có thể đọc
    class Program
    { 
        
        static void Main(string[] args)
        {
            Student s = new Student("Abc");     // khởi tạo biến readonly trong hàm tạo
            string n = s.name;                  // đọc biển readonly
            s.name = "AA";                      // lỗi - vì không thể gán - chỉ có thể đọc
        }
       
    }

}