for(let i=0;i<5;++i){
    console.log(`in loop: `,i);
}
console.log('loop finished!!!');
////
const names = ['vietnq3', 'huybn2', 'mienhv1'];
for(let i=0;i<names.length;++i){
    //console.log(names[i]);
    let exhtml = `<div>${names[i]}</div>`;
    console.log(exhtml);
}
//
let j=0;
let len = names.length;
while(j<len){
    j++;
    let exhtml1 = `<div>${names[j]}</div>`;
    console.log(exhtml1);
}
//
let z = 0;
do{
    console.log('do-while: '+names[z]);
    z++;
}while(z<len);
//
const grade = 'D';
switch(grade){
    case 'A': 
        console.log('You got an A score!');
        break;
    case 'B': 
        console.log('You got an B score!');
        break;
    case 'C': 
        console.log('You got an C score!');
        break;
    case 'D': 
        console.log('You got an D score!');
        break;
    default:
        console.log('Not a valid grade!');
}
//variables and block scope
let age = 30;
if(true){
    let age = 40;
    let name = 'huybn2';
    console.log('inside 1st code block', age, name);
}
console.log('outside code block', age, name);
