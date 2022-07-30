// //interacting with a Browser
// //- DOM(document object model)
// //- add, change, delete content
// //-make a cool pop-up effect in the web page
// //use document.querySelector() to grab the first element.
// const para1 = document.querySelector('p');//grab the first p tag.
// console.log(para1);
// const para2 = document.querySelector('.error');//grab the element tag with class='error'.
// console.log(para2);
// const para3 = document.querySelector('div.error');//grab the div tag with class='error'.
// console.log(para3);
// const para4 = document.querySelector('body>h1');//grab the h1 tag.
// console.log(para4);
// //use document.querySelectorAll() to grab the all elements.
// const paraAll1 = document.querySelectorAll('p');
// console.log(paraAll1);
// paraAll1.forEach(para => console.log(para));
// const paraAll2 = document.querySelectorAll('.error');
// console.log(paraAll2);
// //get the element by ID, single element
// const title = document.getElementById('page-title');
// console.log(title);

// //get the element by their class name, multiple element
// const error = document.getElementsByClassName('error');
// console.log(error);
// //error.forEach(er => {console.log(er)});// have not used it.


// //get the element by their tag name
// const paratag = document.getElementsByTagName('p');
// console.log(paratag);
// //paratag.forEach(pr => {console.log(pr)});// have not used it.
// //
// const parainner = document.querySelector('p');//grab the first p element
// console.log(parainner.innerText);
// parainner.innerText = 'thanks you so much for subcriber my channel!';//override the new text to p element.
// //
// const paras = document.querySelectorAll('p');
// paras.forEach(pr => {console.log(pr); pr.innerText+=' new text'});
// //innnerText is just text of this element.
// //innerHTML is everychild elements in this element.
// const divcon = document.querySelector('div.content');
// console.log(divcon.innerHTML);//get the child element in this element.
// //add one child element to this element, = equal to replace, += equal to add one more.
// divcon.innerHTML += '<h2>this is the element which is replaced.</h2>';
// //add more 
// const people = ['huybn2', 'mienhv1','longtp7'];
// people.forEach(pp => {
//     divcon.innerHTML += `<p>${pp}</p>`;
// });
// ////////////////////////////////////////////////////////////////////////
// const anchor = document.querySelector('a');
// //get the value of attribute
// console.log(anchor.getAttribute('href'));
// //set the value of attribute
// anchor.setAttribute('href','https://www.google.com.vn');
// anchor.innerText = 'The Google here';
// //
// const messg = document.querySelector('p.error');
// //get the value of attribute
// console.log(messg.getAttribute('class'));//error
// //set the value of attribute
// messg.setAttribute('class','success');
// //if the attribute have not declared in HTML, JS can create them and declare them.
// messg.setAttribute('style','color:green');
// //want to add more style into element, not replace it.
// const heading = document.querySelector('h1');
// console.log(heading.style);
// console.log(heading.style.color);
// //add margin style to element
// heading.style.margin = '50px';
// //camel case
// heading.style.fontSize = '50px';
// //remove the property
// heading.style.margin = '';
// //classList
const pclass = document.querySelector('p');
console.log(pclass.classList);
//add the class to element
pclass.classList.add('errorpara');
// pclass.classList.remove('errorpara');
pclass.classList.add('alertpara');
//loop all p element
const paraloop = document.querySelectorAll('p');
paraloop.forEach(pr => {
    // console.log(pr.innerText);
    //console.log(pr.textContent);
    if(pr.textContent.includes('two')){
        pr.classList.add('errorpara');
    }
})
//toggle
const tg = document.querySelector('.title');
tg.classList.toggle('test');
tg.classList.toggle('test');