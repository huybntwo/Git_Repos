using System;
using CS009;

namespace CS009_Event {
    class Program {
        static void TestDelegate () {
            Publisher p = new Publisher ();
            SubscriberA sa = new SubscriberA ();
            SubscriberB sb = new SubscriberB ();

            sa.Sub (p);
            sb.Sub (p);

            p.Send ();
            //SubscriberB: Co tin moi
            //đoạn mã:p.event_news = null; đã hủy việc đăng ký của SubcriberA lúc trước
            //dẫn tới chỉ có SubcriberB nhận được tin mới. Điều này là phá hỏng nguyên tắc hoạt động của mô hình lập trình sự kiện - phá vỡ sự đóng gói
        }

        static void TestEventHandler () 
        {
            ClassA p  = new ClassA();
            ClassB sa = new ClassB();
            ClassC sb = new ClassC();

            sa.Sub (p); // sa đăng ký nhận sự kiện từ p
            sb.Sub (p); // sb đăng ký nhận sự kiện từ p

            p.Send ();
        }

        static void Main (string[] args) {
            // TestDelegate ();
            // TestEventHandler();

        }
    }
}