document.addEventListener('DOMContentLoaded', () => {
    //Tut3
// const titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));//false
// console.log(Array.isArray(Array.from(titles)));//turn it into array

// Array.from(titles).forEach(function(title){
//   console.log(title);
// });
// //Tut4
// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books1 = document.querySelector('#book-list li .name');
// console.log(books1);//return one element

// books1 = document.querySelectorAll('#book-list li .name');
// console.log(books1);//return collecntion curly bracket

// Array.from(books1).forEach((book) => {
//   console.log(book);//return collection in array
// });
// //Tut5
// const books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach((book) => {
//     console.log(book.textContent);//print text in book
//   book.textContent += ' (Book title)';//append more string
// });

// const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML);//print all tag and content in this tag
// bookList.innerHTML = '<h2>Books and more books...</h2>';//assign
// bookList.innerHTML += '<p>This is how you add HTML content</p>';//append

//Tut6

// The innerHTML property returns:
// The text content of the element, including all spacing and inner HTML tags.
// The innerText property returns:
// Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.
// The textContent property returns:
// The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags.
// The nodeType property returns the node type, as a number, of the specified node.

// If the node is an element node, the nodeType property will return 1.

// If the node is an attribute node, the nodeType property will return 2.

// If the node is a text node, the nodeType property will return 3.

// If the node is a comment node, the nodeType property will return 8.

// This property is read-only.
const banner = document.querySelector('#page-banner');
//console.log(nodes);
console.log('#page-banner node type is: ', banner.nodeType);
console.log('#page-banner node name is: ', banner.nodeName);
console.log('#page-banner has child node is: ', banner.hasChildNodes());

// const nodes = document.querySelector('#book-list').childNodes;
// Array.isArray(Array.from(nodes))
// let text = "";
// for (let i = 0; i < nodes.length; i++) {
//   text += nodes[i].nodeType + " " + nodes[i].nodeName + "<br>";
// }

//cloneNode(deep)
//Set the deep parameter to true if you also want to clone descendants (children).
// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// //Tut7
// const bookList = document.querySelector('#book-list');
// console.log('the parent node is: ', bookList.parentNode);
// console.log('the parent element  of parent element is: ', bookList.parentElement.parentElement);

// console.log(bookList.childNodes);
// console.log(bookList.children);
// In the HTML DOM (Document Object Model), an HTML document is a collection of nodes with (or without) child nodes.

// Nodes are element nodes, text nodes, and comment nodes.

// Whitespace between elements are also text nodes.

// Elements are only element nodes.

// childNodes returns child nodes (element nodes, text nodes, and comment nodes).

// children returns child elements (not text and comment nodes).

// //Tut8
// const bookSib = document.querySelector('#book-list');
// console.log(bookSib.firstChild);
// console.log(bookSib.firstElementChild);
// console.log('booksib next sibling is: ',bookSib.nextSibling);
// console.log('booksib next element sibling is: ',bookSib.nextElementSibling);

// console.log('booksib next sibling is: ',bookSib.previousSibling);
// console.log('booksib next element sibling is: ',bookSib.previousElementSibling);

// bookSib.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else'

// //Tut9
//listen all span element, affect performance
// // The difference between parentElement and parentNode, is that parentElement returns null if 
//the parent node is not an element node:
// var btns = document.querySelectorAll('#book-list .delete');
// console.log(Array.isArray(Array.from(btns)));
// Array.from(btns).forEach((btn) => {
//     console.log(btn);
//     btn.addEventListener('click', (e) => {
//         e.stopPropagation();
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     })
// })


// var getLink = document.querySelector('#page-banner a');
// getLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('navigate to ',e.target.textContent,'was prevented');
// })
//Tut10 Event Bubbling
//just listen the li element, best performance
var getUl = document.querySelector('#book-list ul');

getUl.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentNode;
        getUl.removeChild(li);
    }
})

//Tut11
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    //console.log(value);
    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
//Tut12
    //add content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete'
    //add attribute
    // bookName.className = 'name';
    bookName.classList.add('name');
    deleteBtn.className = 'delete';
    deleteBtn.classList.add('delete');
    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    getUl.appendChild(li);
})

//Tut13
const hideBooks = document.querySelector('#hide');
hideBooks.addEventListener('change', (e) => {
    if(hideBooks.checked){
        getUl.style.display = 'none';
    } else{
        getUl.style.display = 'initial';
    }
})

//Tut16
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',(e) => {
    const term = e.target.value.toLowerCase();
    //console.log(term);
    const books = getUl.getElementsByTagName('li');
    //console.log(books);
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }

    });
})
//Tut17
// The dataset read-only property of the HTMLElement interface provides read/write access to 
//custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) 
//with an entry for each data-* attribute.

// The data-* attribute is used to store custom data private to the page or application.

// The data-* attribute gives us the ability to embed custom data attributes on all HTML elements.

// The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).

// The data-* attribute consist of two parts:

// The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-"
// The attribute value can be any string
// Note: Custom attributes prefixed with "data-" will be completely ignored by the user agent.
// The tagName property returns the tag name of an element.

// The tagName property returns the tag name in UPPERCASE.

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});

})
