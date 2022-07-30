// function person(name, age, color) {         // Hàm khởi tạo
//     this.name = name;                         // this tham khảo đến đối tượng cần tạo
//     this.age = age;
//     this.favColor = color;
//     this.changeName = function (name)
//     {
//         this.name = name;
//     }
//   }
  
//   var p1 = new person("John", 42, "green");   // tạo đối tượng
//   var p2 = new person("Amy", 21, "red");      // tạo đối tượng
//   p1.changeName("Huybn2");//use the method
//   document.write(p1.name);
//   document.write("\n");
//   document.write(p2.favColor);

//   function user(name, age)
//   {
//     this.name = name;
//     this.age = age;
//     this.yearOfBirth = bornYear;
//   }
//   function bornYear()
//   {
//     return 2020-this.age;
//   }
//   var p = new user("Huybn2",28);
//   document.write(p.yearOfBirth());

// function person(age) {
//     this.age = 0;
//     Object.defineProperty(this, 'ageInfo', {
//         set : function (age) {
//             console.log('setter - ' + age);
//             this.age = age;
//         },
//         get : function () {
//             console.log('getter');
//             return "Thông tin tuổi: " + this.age;
//         }
//     });
//  }

// var obj = new person(0);

// obj.ageInfo = 25;
// alert(obj.ageInfo);

// var i=0;
// var id = setInterval(myAlert, 3000);
// function myAlert()
// {
//     i++;
//     alert("Hi " + i);
//     if(i==5)
//     {
//         clearInterval(id);
//     }
// }

//   //
//   var user = prompt("Enter your name: ");
//   alert(user);
//   //
//   var per = confirm("Do you want to leave?");
//   if(per==true)
//   {
//     alert("Thanks you for browsing!!!");
//   }
//   else
//   {
//     alert("Thanks you for staying!!!");
//   }
//   document.write(p1.age);                     // Outputs 42
//   document.write(p2.name);                    // Outputs "Amy"
//   console.log(p1.age);
//   console.log(p2.name);

var courses = new Array("HTML", "CSS", "JS");
document.write(courses[1]);
document.write(courses.length);
//
alert(courses.length);