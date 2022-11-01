document.addEventListener("DOMContentLoaded", function() {

let head = document.createElement('div');
head.className = 'header-container';

let h1 = document.createElement('h1');
let headtext1 = document.createTextNode('This is an h1');
h1.appendChild(headtext1)
h1.className = "h1";

let h2 = document.createElement('h2');
let headtext2 = document.createTextNode('This is an h2');
h2.appendChild(headtext2)
h2.className = "h2";

let h3 = document.createElement('h3');
let headtext3 = document.createTextNode('This is an h3');
h3.appendChild(headtext3)
h3.className = "h3";

let h4 = document.createElement('h4');
let headtext4 = document.createTextNode('This is an h4');
h4.appendChild(headtext4)
h4.className = "h4";

let h5 = document.createElement('h5');
let headtext5 = document.createTextNode('This is an h5');
h5.appendChild(headtext5)
h5.className = "h5";

let h6 = document.createElement('h6');
let headtext6 = document.createTextNode('This is an h6');
h6.appendChild(headtext6)
h6.className = "h6";


document.body.appendChild(head);
document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(h3);
document.body.appendChild(h4);
document.body.appendChild(h5);
document.body.appendChild(h6);
});
