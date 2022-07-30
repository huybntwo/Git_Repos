public kiểu_trả_về this[kiểu_index index]
{
    get {
        // thực hiện các tác vụ và trả về dữ liệu có kiểu_trả_về
     }
    set {
        // giá trị được truyền trong biến value, có thể lưu nó vào nơi thích hợp
     }
}

class IndexerExam {
    string ho = "Nguyễn";
    string ten = "Nam";

    // Bộ chỉ mục số nguyên, chỉ mục là 0 hoặc 1 nếu khác sẽ phát sinh Exception
    public string this[int index]
    {
        // Đọc dữ liệu theo chỉ mục
        get {
            if (index == 0) return ho;
            else if (index == 1) return ten;
            else throw new Exception("Chỉ số không tồn tại");
         }

         // Gán dữ liệu theo chỉ mục
        set {
            if (index == 0)  ho = value;
            else if (index == 1) ten = value;
            else throw new Exception("Chỉ số không tồn tại");
        }
    }

}

IndexerExam obj = new IndexerExam();

Console.WriteLine(obj[0] + " " + obj[1]);      // đọc obj.ho và obj.ten
obj[0] = "Đinh";                               // gán obj.ho
obj[1] = "Quang Hưng";                         // gán obj.name
Console.WriteLine(obj[0] + " " + obj[1]);      // đọc obj.ho và obj.ten


// Kết quả chạy:
// Nguyễn Nam
// Đinh Quang Hưng