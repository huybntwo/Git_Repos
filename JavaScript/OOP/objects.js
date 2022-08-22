// class User{
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login(){
//         console.log(this.email, ' just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, ' just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }
// //
// class Admin extends User{
//     deleteUser(user){
//         users = users.filter( u => {
//             return u.email != user.email;
//         })
//     }
// }
// var userOne = new User('huybn2@viettel.com.vn', 'huybn2');
// var userTwo = new User('mienhv1@viettel.com.vn','mienhv1');
// var admin = new Admin('adminstrator@viettel.com', 'administrator');

// var users = [userOne, userTwo, admin];
// admin.deleteUser(userOne);
// console.log(users);
// //How do 'users' can be pass to Class 'Admin' ???
// //loose code???

// // userOne.login().updateScore().updateScore().logout();


// function User(email, name){
//     this.email = email;
//     this.name = name;
// }

// User.prototype.login = function(){
//     this.online = true;
//     console.log(this.email, ' has logged in');
// }
// User.prototype.logout = function(){
//     this.online = false;
//     console.log(this.email, ' has logged out');
// }

// function Admin(...args){
//     User.apply(this, args);
//     this.role = 'super admin';
// }

// //inherit from User to Admin
// Admin.prototype = Object.create(User.prototype);
// //create function, which is just belong to Admin
// Admin.prototype.deleteUser = function(u){ 
//     users = users.filter(user => {
//         return user.email != u.email;
//     })
// };


// var userOne = new User('huybn2@viettel.com.vn', 'huybn2');
// var userTwo = new User('mienhv1@viettel.com.vn','mienhv1');
// var admin = new Admin('admin@viettel.com','admin');

// users = [userOne, userTwo, admin];
// admin.deleteUser(userOne);

// console.log(users);

// console.log(userOne);
// userTwo.login();


// class Student1{
//     constructor(name, age, roll){
//         this.name = name;
//         this.age = age;
//         this.roll = roll;
//     }
//     Ofg(){
//         return ("I'm "+this.name + " from Simplicode");
//     }
//     dob(){
//         return("The date of birth of "+ this.name +" is " + (2020 - this.age));
//     }
//     static add(a,b){
//         return a+b;
//     }
// }

// console.log(Student1.add(2,3));
// var Trun =  new Student1('Trun', 23, 34);
// console.log(Trun);


// class Student2 extends Student1{
//     constructor(name, age, roll, language, section){
//         super(name, age, roll);
//         this.language = language;
//         this.section = section;
//     }

// }

// var Aran = new Student2("Aran", 23, 45, "JS", "Array");
// console.log(Aran);
// console.log(Student2.add(22,33));
// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()


// A JavaScript Promise object can be:
//     Pending
//     Fulfilled
//     Rejected
// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.
// 
// Promise.then() takes two arguments, a callback for success and another for failure.
// Both are optional, so you can add a callback for success or failure only.



// //Promise
// function myDisplayer(some){
//     document.getElementById("demo").innerHTML = some;
// }

// var myPromise = new Promise(function(myResolve, myReject){
//     let x = 0;
//     //some code(try to change x to 5)

//     if(x == 3){
//         myResolve("OK");
//     } else {
//         myReject("Error");
//     }

// });
// //luôn luôn phải có 2 hàm, nếu như mệnh đề ở callback function myResolve okee thì ở then sẽ gọi hàm đầu tiên, bỏ qua hàm thứ 2
// //và ngược lại
// myPromise
// .then(
//     function(value) {myDisplayer(value);},
//     // function(error) {myDisplayer(error);}
//     )
// .catch(
//         function(error) {myDisplayer(error);}
//     )

//     ///
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//     }

// async function myFunction() {return "Hello";}
//same as:
//function myFunction() {
// return Promise.resolve("Hello");
// }

// myFunction()
// .then(
//     function(value) {myDisplayer(value);}
// )
// .catch(
//     function(error) {myDisplayer(error);}
// );

// The keyword await before a function makes the function wait for a promise
// The await keyword can only be used inside an async function.
// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise
//as soon as JS finds the await keyword, it will leave this function and start doing other works inside of this program(e.g myDisplay(), myDisplay2())
//and will comeback to this function and returns the result

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//     console.log("Order has been received")
//   }

//   myDisplay();

// async function myDisplay2(){
//     let myPromise2 = new Promise(function(resolve){
//         setTimeout(function(){ resolve('Huybn2');},3000);
//     });
//     document.getElementById("demo").innerHTML = await myPromise2;
//     console.log("Order has been received")
// }
// myDisplay2();
//Timing Function

// var myTime = setInterval(Start, 1000);

// function Start(){
//     const dd = new Date();
//     document.getElementById("demo1").innerHTML = dd.toLocaleTimeString();
// }

// function Stop(){
//     clearInterval(myTime);
// }


// var id = 0;
// var mess = () => alert("Welcome to Simplicode!");
// function Start(){
//     id = setInterval(mess, 5000);
// }
// function Stop(){
//     clearInterval(id);
// }

// function makeOrder(coffee) {
//     return new Promise((resolve, reject) => {
//         console.log("Making request for a " + coffee)
//         if (coffee == 'black coffee') {
//             resolve("Here is your coffee, have a nice day")
//         } else {
//             reject("Sorry! we serve black coffee only")
//         }
//     })
// }


// function processOrder(order) {
//     return new Promise((resolve, reject) => {
//         console.log("Processing Order")
//         resolve("Extra Information " + order)
//     })
// }

// makeOrder("black")
// .then(order => {
//     console.log("Order has been receiver")j
//     return processOrder(order)
// })
// .then(processOrder => {
//     console.log(processOrder)
// })
// .catch(error => {
//     console.log(error)
// })

// // as soon as finds the await
// //các từ khoá async và await có tác dụng làm cho các đoạn code của các hàm Promise(hàm bất đồng bộ) 
// //sẽ thực thi giống như các hàm đồng bộ sẽ thực thi từ trên xuống dưới
// async function func1() {
//     try {
//         var order = await makeOrder("black");
//         console.log("Order has been receiver");
//         var proOrder = await processOrder(order);
//         console.log(proOrder);
//     }
//     catch (error) {
//         console.log(error);
//     }

// }
// func1();



// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// const person = {
//     fname:"John",
//     lname:"Doe",
//     age:25
//   }; 
  
//   let txt = "";
//   for (let x in person) {
//     txt += person[x] + " ";
//   }
//   person.name = function () {
//     return this.fname + " " + this.lname;
//   };
//   console.log(person.name());
//   document.getElementById("demo").innerHTML = txt;


//   const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   const myArray = Object.values(person);
//   document.getElementById("demo").innerHTML = myArray;

//   const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   let myString = JSON.stringify(person);
//   document.getElementById("demo").innerHTML = myString;


//   // Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   // Create 2 Person objects
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");
//   // Add nationality to first object
//     myFather.nationality = "English";
//     // You cannot add a new property to an object constructor the same way you add a new property to an existing object
//     //Tức là bạn có thể thêm một property hoặc method vào một Object(like myFather) bạn vừa tạo nhưng
//     // bạn không thể thêm một property hoặc method vào một Constructor Object(like Person).
//   // Add a name method to first object
//   myFather.name = function() {
//     return this.firstName + " " + this.lastName;
//   };
//   //Add nationality property to Constructor Object
//   Person.prototype.nationality = "English";
//   //Add name method to Constructor Object
//   Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName;
//   };
//   const exam = new Person();
//   exam.nationality = 'huybn2';
//   // console.log(exam.nationality);

//   // Display full name
//   document.getElementById("demo").innerHTML =
//   "My father is " + myFather.name() + " has nationality is " + myFather.nationality;

// function Employee(name, id, salary){
//     this.name = name;
//     this.id = id;
//     this.salary = salary;
// }

// Employee.prototype.post = function(){
//     return (this.name + " " + " is a content creator!");
// }

// var per1 = new Employee('huybn2',2345,10000);
// // console.log(per1);
// // console.log(per1.post());
// //inheritance
// function Programmer(name, id, salary, language){
//     Employee.call(this, name, id, salary);
//     this.language = language;
// }
// // The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. 
// // All JavaScript objects inherit properties and methods from a prototype.
// Programmer.prototype =  Object.create(Employee.prototype);
// //to set constructor manually of Programmer
// Programmer.prototype.constructor = Programmer;
// var pro1 =  new Programmer('mienhv1',3245,20000,'JS');
// console.log(pro1);
// console.log(pro1.post());

// const x = document.getElementById("demo");

// function getLocation() {
//   try {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } catch {
//     x.innerHTML = err;
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }

// let w;

// function startWorker() {
//   if(typeof(w) == "undefined") {
//     w = new Worker("demo_workers.js");
//   }
//   w.onmessage = function(event) {
//     document.getElementById("result").innerHTML = event.data;
//   };
// }

// function stopWorker() { 
//   w.terminate();
//   w = undefined;
// }

// class Student{
//   constructor(name, age, roll){
//     this.name = name;
//     this.age = age;
//     this.roll = roll;
//   }

//   Org(){
//     return ("I am " + this.name + " from Simplicode");
//   }
//   dob(){
//     return ("The date of birth of " + this.name + " is " + (2022 - this.age));
//   }
//   //delare static method
//   static add(a, b){
//     return a + b;
//   }
// }

// //inheritance
// class Student1 extends Student{
//   constructor(name, age, roll, language, section){
//     super(name, age, roll);
//     this.language = language;
//     this.section = section;

//   }
// }

// // var Huybn2 = new Student('huybn2',29,39);
// // console.log(Huybn2);
// // console.log(Student.add(2,3));

// var Arun =  new Student1('Arun', 35, 4,"JavaScript", "A");
// console.log(Arun);
// console.log(Student1.add(12,23));

// function Func2(){
//   var x = document.getElementsByTagName('div');
//   for(let i=0; i<x.length;++i){
//     x[i].style.backgroundColor = 'Green';
//   }
// }


// let regex = /Welc?ome?/
// let str = "Welcome to our Youtube Channel. Welcome back"
// let output1 = regex.test(str);
// console.log(output1);
// //
// let output2 = regex.exec(str);
// console.log(output2)

//[^abc] means no characters start with a,b,or c
// let regex = /[^abc]def/
// let str = 'This string contains wdef'
// let output = regex.test(str);
// console.log(output)


// function getEmployeeID(){
//   var empID = document.getElementById("eid").value;
//   var check = /[DE]253[10-99]/i
//   if(check.test(empID)){
//     alert("Valid Employee ID")
//   } else {
//     alert("Invalid Employee ID")
//   }
// }

// i 	Perform case-insensitive matching 	
// g 	Perform a global match (find all matches rather than stopping after the first match) 	
// m 	Perform multiline matching
// [abc] 	Find any of the characters between the brackets 	
// [0-9] 	Find any of the digits between the brackets 	
// (x|y) 	Find any of the alternatives separated with |
// n+ 	Matches any string that contains at least one n 	
// n* 	Matches any string that contains zero or more occurrences of n 	
// n? 	Matches any string that contains zero or one occurrences of n
// \d 	Find a digit 	
// \s 	Find a whitespace character 	
// \b 	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
// The RegExp \D Metacharacter in JavaScript is used to search non digit characters i.e all the characters except digits. It is same as [^0-9].
// The RegExp \W Metacharacter in JavaScript is used to find the non word character i.e. characters which are not from a to z, A to Z, 0 to 9. It is same as [^a-zA-Z0-9].
//The \w metacharacter matches word characters. A word character is a character a-z, A-Z, 0-9, including _ (underscore).
// The \S metacharacter matches non-whitespace characters.

// Whitespace characters can be:

// A space character
// A tab character
// A carriage return character
// A new line character
// A vertical tab character
// A form feed character


// let regex = /\w+321/
// let str = "Users phone number is 9854321000"// 
// let output = regex.exec(str)
// console.log(output);
// console.log(output[0]);
// console.log(output.group);
// console.log(output.index);
// console.log(output.input);


// // Biểu thức ?= lookahead
// //Biểu thức ?! phủ định lookahead
// //Biểu thức (?<=...) Lookbehind
// // Biểu thức (?<!...) phủ định Lookbehind

// // let reg = /(T|t)he(?=\sfat)/     //Ký hiệu ?=. Phần đầu của biểu thức phải được tiếp nối bởi biểu thức lookahead(ở ví dụ này là fat)
// // let reg = /(T|t)he(?!\sfat)/        //Ký hiệu là ?!, nghĩa là lấy kết quả mà đi sau nó không có chuỗi lookahead(ở ví dụ này là fat)
// // let reg = /(?<=(T|t)he\s)(fat|mat)/   //Sử dụng để lấy các phù hợp mà đi trước là một mẫu cũ thể
// let reg = /(?<!(T|t)he\s)(cat)/     //Sử dụng để lấy các phù hợp mà đi trước không có một mẫu lookbehind chỉ ra.
// let strUser = "The fat cat sat on the mat."
// let out = reg.exec(strUser);
// console.log(out);


// /The n{X,Y} quantifier matches any string that contains a sequence of X to Y n's. X and Y must be a number.

//validate email

// let reg = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})$/
// let mail = "huybn2@gmail.com"
// let out = reg.test(mail)
// console.log(out)



// var arr = [4,2,6,7,9,2,3,4,0,1]
// function cars(values){
//   let index = 0;
//   return{
//     next: function(){
//       if(index < values.length){
//         return{
//           value: values[index++],
//           done: false
//         }
       
//       }
//       else{
//         return{
//           done: true
//         }
//       }
//     }
//   }
// }

// var newCars = cars(arr);
// console.log(newCars.next().value);
// console.log(newCars.next().value);
// console.log(newCars.next());
// console.log(newCars.next());
// console.log(newCars.next());


// // Create an Object
// myNumbers = {};

// // Make it Iterable
// myNumbers[Symbol.iterator] = function() {
//   let n = 0;
//   done = false;
//   return {
//     next() {
//       n += 10;
//       if (n == 100) {done = true}
//       return {value:n, done:done};
//     }
//   };
// }

// let text = ""
// for (const num of myNumbers) {
//   text += num +"<br>"
// }

// // The Symbol.iterator method is called automatically by for..of.

// // But we can also do it "manually": 
// // Create an Iterator
// let iterator = myNumbers[Symbol.iterator]();

// let text = ""
// while (true) {
//   const result = iterator.next();
//   if (result.done) break;
//   text += result.value +"<br>";
// }

// document.getElementById("demo").innerHTML = text;

// //generator is easy and more reliable than iterator

// function* generator(){
//   let  i = 0;
//   var arr = ['BMW', 'Audi','Mercedes','Honda']
//   while(i<arr.length){
//     yield arr[i]
//     i++
//   }
// }
// let gen = generator();
// console.log(gen.next().value);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());



// //create Object
// const person = new Object();
// //create properties of Object
// person.firstName = "John",
// person.lastName = "Doe",
// person.age = 50,
// person.eyeColor = "blue"
// console.log(person.age);


// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
//Each map have many entries, with key:value pairs


// //create Map
// const fruits = new Map();
// //set Map values
// fruits.set('apples',200);
// fruits.set('banana',300);
// fruits.set('grape',100);
// let obj = {}
// let func = function(){}
// fruits.set(obj,230);
// fruits.set(func, 280);

// console.log(fruits.get('apples'))
// console.log(fruits.get(obj))
// console.log(fruits.get(func))
// console.log(fruits.size)
// console.log(fruits.has("apples"))

// let text = '';
// fruits.forEach((key, value) => {
//   text += key + " " + value + "\n";
// }
// )
// console.log(text);

// //
// var myArr = [[1,'huybn2'],[2,'mienhv1'],[3,'longtp7']]
// var myUser = new Map(myArr);
// console.log(myUser);
// for(let [key,value] of myUser){
//   console.log(key + " " + value + "\n");
// }
// for(let key of myUser.keys()){
//   console.log(key + "\n");
// }

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.



// var mySet = new Set()
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(4);
// mySet.add(5);
// mySet.add(6);

// //this function will return xmlHttp object
// function httpGetAsync(theUrl, resolve){
//     //creates an XMLHttpRequest object:(đối tượng này sẽ có các thuộc tính nhưng đều chưa có giá trị)
//     var xmlHttp = new XMLHttpRequest();
//     //The onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes:
//     xmlHttp.onreadystatechange = function(){
//         //resolve(xmlHttp) sẽ lấy các giá trị gán vào các thuộc tính
//         //resolve(xmlHttp) là function của Promise nên sẽ đợi 2 hàm open và send bên dưới thực hiện xong để lấy được các giá trị.
//         if(xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
//     }
//     xmlHttp.open("GET", theUrl, true);//true for async
//     xmlHttp.send();
// }

// const currentPromise1 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve)
// });

// const currentPromise2 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve)
// });

// const currentPromise3 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve)
// });

// const executeAsync = async () => {
//     const data1 = await currentPromise1;
//     console.log(data1)
//     document.getElementById('img_1').setAttribute('src',data1.responseURL);
//     const data2 = await currentPromise2;
//     document.getElementById('img_2').setAttribute('src',data2.responseURL);
//     const data3 = await currentPromise3;
//     document.getElementById('img_3').setAttribute('src',data3.responseURL);
// }

// executeAsync()



// currentPromise1
// .then((data) => {
//     document.getElementById('img_1').setAttribute('src',data.responseURL);
//     return currentPromise2
// })
// .then((data) =>{
//     document.getElementById('img_2').setAttribute('src',data.responseURL);
//     return currentPromise3
// })
// .then((data) => {
//     document.getElementById('img_3').setAttribute('src',data.responseURL);
// })
// .catch((err) => {
//     console.log(err)
// })




// httpGetAsync('https://picsum.photos/200/300',(data) => {
//     // console.log(data);
//     document.getElementById('img_1').setAttribute('src',data.responseURL);
//     httpGetAsync('https://picsum.photos/200/300',(data) => {
//         document.getElementById('img_2').setAttribute('src',data.responseURL);
//         httpGetAsync('https://picsum.photos/200/300',(data) => {
//             document.getElementById('img_3').setAttribute('src',data.responseURL);
//         })
//     })
// })


const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

  const persons_new = persons.map(per => {
    return{
        ...per,
        firstname: `${per.firstname}Huybn2`
    }
  })

  console.log(persons_new)


  //acc is accumulate, reduce() function will override the acc argument after each loop through cur argument
  const numbers = [1,2,4,5,2,6,8];
  const total = numbers.reduce((acc,cur) => {
    return acc + cur;
  }, 0)

  console.log({total})