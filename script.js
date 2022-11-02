document.addEventListener("DOMContentLoaded", function () {



    let head = document.createElement('div');
    head.className = 'header-container';
    document.body.appendChild(head)
    head.appendChild

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
    head.appendChild(h1);
    head.appendChild(h2);
    head.appendChild(h3);
    head.appendChild(h4);
    head.appendChild(h5);
    head.appendChild(h6);


    let colors = ['DodgerBlue', 'BurlyWood', 'Brown', 'Chocolate',
        'Blue', 'Crimson', 'Cyan', 'DarkRed']

    // let h1click = document.getElementsByClassName('h1');
    // let h2click = document.getElementsByClassName('h2');
    //let h3click = document.getElementsByClassName('h3');
    //let h4click = document.getElementsByClassName('h4');
    //let h5click = document.getElementsByClassName('h5');
    // let h6click = document.getElementsByClassName('h6');
    /// 

    // function to change the color of the headers. ***[]
    function colorchange() {
        let headColor = colors [Math.floor(Math.random() * colors.length)];
        return headColor;
    }
    h1.addEventListener('dblclick', function () {
        h1.style.color = colorchange();
        
    });
    h2.addEventListener('dblclick', function () {
        h2.style.color = colorchange();
        
    });
    h3.addEventListener('dblclick', function () {
        h3.style.color = colorchange();
       
    });
    h4.addEventListener('dblclick', function () {
        h4.style.color = colorchange();
        
    });
    h5.addEventListener('dblclick', function () {
        h5.style.color = colorchange();
       
    });
    h6.addEventListener('dblclick', function () {
        h6.style.color = colorchange();
         
    });

    // stops the text from being highlighted after click. ****
    document.addEventListener('mousedown', function (event) {
        if (event.detail > 1) {
            event.preventDefault();

        }
    }, false);
    
    let listCount = 0;
    
    
    let btn = document.getElementById('listbtn');
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    

    function newlist() {
        listCount++;
        const li = document.createElement('li');
        const litext = document.createTextNode('This is list item' + ' ' + listCount);
        li.appendChild(litext);
        ul.appendChild(li);
        
        
        li.addEventListener('click', function() {
            li.style.color = colorchange();
        });
        li.addEventListener('dblclick', function () {
            ul.removeChild(li);
    });  
} 
       
btn.addEventListener("click", newlist);
    //let ul = document.createElement('ul');



    
    //console.log(Math.floor(Math.random() * colors.length));
});
