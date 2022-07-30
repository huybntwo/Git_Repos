//Khai báo một lớp có tên Product
class Product {
    //Hàm khởi tạo
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.infomation = `${name} - ${price}`;
    }

    //Khai báo một phương thức
    checkStore(storeid) {
        console.log(this.name + ' in store ' + storeid);
    }

    //Hàm getter
    get info() {
        return this.infomation;
    }

    //Hàm setter
    set info(i) {
        this.infomation = i;
    }

    //Phương thức tĩnh
    static convertMoney(m) {
        console.log(m);
        return  m + ' đồng';
    }
}

//SỬ DỤNG LỚP

//Tạo một đối tượng từ lớp bằng new
let sanpham = new Product('Iphone', 1000);

//truy cập thuộc tính đối tượng sanpham.name
console.log(sanpham.name);

//gọi một phương thức của đối tượng
sanpham.checkStore(100);

//Gọi setter
sanpham.info = 'Thông tin sản phẩm ...';

//Gọi getter
console.log(sanpham.info);

//Gọi một hàm tĩnh
Product.convertMoney(100000);



class Computer extends Product {
    constructor(name, price, store) {
        super(name, price);
        this.store = store;
    }

    set info(i) {
        super.info(i);// - nếu muốn thi hành phương thức của lớp cha
        //this.infomation = this.name + ':'+i;
    }

    totalInStore() {
        console.log('totalInStore');
    }
}


//Sử dụng
let sanpham2 = new Computer('Dell', 2000);
console.log(sanpham2.name);
sanpham2.checkStore(200);

sanpham2.info = 'Thông tin sản phẩm ...';

console.log(sanpham2.info);
sanpham2.totalInStore();