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


function User(email, name){
    this.email = email;
    this.name = name;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, ' has logged in');
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, ' has logged out');
}

function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
}

//inherit from User to Admin
Admin.prototype = Object.create(User.prototype);
//create function, which is just belong to Admin
Admin.prototype.deleteUser = function(u){ 
    users = users.filter(user => {
        return user.email != u.email;
    })
};


var userOne = new User('huybn2@viettel.com.vn', 'huybn2');
var userTwo = new User('mienhv1@viettel.com.vn','mienhv1');
var admin = new Admin('admin@viettel.com','admin');

users = [userOne, userTwo, admin];
admin.deleteUser(userOne);

console.log(users);

// console.log(userOne);
// userTwo.login();