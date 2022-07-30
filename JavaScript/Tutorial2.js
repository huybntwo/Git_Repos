// //string
// let firstname = "Huy";
// let lastname = "Bui";
// //string concatenate
// let fullname = firstname + " " + lastname;
// console.log(fullname);
// //string length
// console.log(fullname.length);

// //string methods
// console.log(fullname.toUpperCase());
// console.log(fullname.toLowerCase());

// let email ="huyhoang.dhbk@gmail.com";
// //get index of letter in string
// let index = email.indexOf("@");
// console.log(index);

// //common string methods
// let last_index_string = email.lastIndexOf('n');
// console.log(last_index_string);
// //
// let slice_string = email.slice(0,10);
// console.log(slice_string);
// //
// let sub_string = email.substr(4,5);
// console.log(sub_string);
// //just repalce the first character, found in string.
// let replace_string = email.replace('h','w');
// console.log(replace_string);
// let likes = 10;
// console.log(likes);
// console.log(5*'hello');//error NaN
// let results = 'The blog has '+likes+' likes';
// console.log(results);
/////////////////////////////////////////////////////

const title = 'Best reads of 2022';
const author = 'Mario';
const likes = 20;
//concatenation way
let results1 = 'The blog called ' +title+' by '+author+' has '+likes+' likes.';
console.log(results1);
//template string way
let result0 = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result0);
// creating html templates
let html = 
`
<h2>${title}</h2>
<p>by ${author}</p>
<span>ths blog has ${likes} likes.</span>
`;
console.log(html);
/////////////////////////////////////////////////////
let ninjas = ['sham','ryu','chanlin',20, 30];
console.log(ninjas);
console.log(ninjas[0]);
console.log(ninjas[1]);
console.log(ninjas[2]);
console.log(ninjas[3]);
console.log(ninjas[4]);
console.log(ninjas.length);
//
let result1 = ninjas.join(',');
console.log(result1);
//
let index = ninjas.indexOf(20);
console.log(index);
//
let result2 = ninjas.concat([23,35]);
console.log(result2);
//push method will return the length of new array
let result3 = ninjas.push('huybn2');
console.log(ninjas);
let result4 = ninjas.pop();//return the value of last element in array
console.log(result3);
console.log(result4);
/////////////////////////////////////////////////////
// let age;//undefined
let age = null;
console.log(age, age+3,'the age is ${age}');
//undefined is have not yet defined
//method can return boolean
let email = 'huybn2@viettel.com.vn';
//let rt = email.includes('@');
//console.log(rt);
let number =  23;
console.log(number == 23);
console.log(number == '23');
//The strict equality operator (===) behaves identically to the abstract equality operator (==) except no type conversion is done,
// and the types must be the same to be considered equal.
// The === operator will not do the conversion, so if two values are not the same type === will simply return false. Both are equally quick
console.log(number === 23);
console.log(number === '23');
//
let score = '100';
console.log(typeof score);
score = Number(score);//conver string to number.
console.log(score + 1);
console.log(typeof score);
//
let rt2 = Boolean('2');
console.log(rt2, typeof rt2);



