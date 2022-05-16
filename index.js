let main = document.getElementById('main');


async function FindMe(e)
{
    e.preventDefault();
    let name1 = document.getElementById('inp').value;
    let res= await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyA5U7lnFOgfm2xP7j7H5HSZvyH9oF4kMjE&cx=8d59952f3963391e6&q='+name1);
    let result = await res.json();
    let data = result.items;
    
    while(main.hasChildNodes())
    {
        main.removeChild(main.firstChild);
    }

    data.map(n => {
        let div = document.createElement('div');
        div.innerHTML = `<div class='my-div'><a href = ${n.link}>${n.title}</a><br /> ${n.htmlSnippet}</div>`
        
        main.appendChild(div);

    })

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(name1,time);
    let arr1 = [];
    arr1.push(name1,time);
    console.log(arr1);
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    
