let main = document.getElementById('main');



async function FindMe(e)
{
    e.preventDefault();
    let name = document.getElementById('inp').value;
    let res= await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyA5U7lnFOgfm2xP7j7H5HSZvyH9oF4kMjE&cx=8d59952f3963391e6&q='+name);
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
}