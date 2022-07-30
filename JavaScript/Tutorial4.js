//hoisting:treo, moc
//arrow function
//function declaration
function greet(){
    console.log('hello, there');
}
//function expression
greet();
greet();
greet();

//function declaration, default values
const speak = function(name='CloudAtlas'){
    console.log(`${name}, good day!`);
}
//function expression
speak('Huybn2');
speak();
//
// const calcArea = function(radius){
//     return 3*radius**2;
// };
// const calcArea = (radius) => {
//     return 3*radius**2;
// }; 
const calcArea = radius => 3*radius**2;

const area = calcArea(5);
console.log(area);