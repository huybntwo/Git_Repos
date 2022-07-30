//object literals
let user = {
    name:'crystal',
    age:30,
    email:'huyhoang.dhbk@gmail.com',
    location:'Da Nang',
    blogs:[
        {title:'something', likes:30},
        {title:'somewhere', likes:25}
        ],
    //shorthand version of function.
    login(){
        console.log('the user logged in here!');
    },
    logout(){
        console.log('the user logged out here!');
    },
    logBlog(){
        //console.log(this.blogs);
        console.log('this user has written the following blog: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};
console.log(user);
console.log(user.name);//way1

const key = 'name';
console.log(user[key]);//way2;using the square brackets

user.age = 21;
console.log(user.age);
//
console.log(typeof user);
//
user.login();
user.logout();
//
user.logBlog();
/////////////////////////////////////////////////////////////////////////////////
console.log(Math);
console.log(Math.PI);

//round
const area = 5.3;
//
console.log(Math.round(area));//round based on the decimal part
console.log(Math.floor(area));//round down
console.log(Math.ceil(area));//round up
console.log(Math.trunc(area));//take away the decimal part
//random
const rd = Math.random();
console.log(rd);
console.log(Math.round(rd));
//heap memory save the pointer datatypes
//stack memory save the normal datatypes
//primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;//not the same the address
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values
userOne = {name: 'huybn2', age: 20};
userTwo = userOne;//same the address
console.log(userOne, userTwo);
userOne.age = 35;
console.log(userOne, userTwo);