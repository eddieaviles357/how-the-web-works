let get = document.querySelector.bind(document);
let form1 = get('.form1');
let form2 = get('.form2');

form1.addEventListener('submit', (e) => {
    console.dir(e.target)
    console.dir(e.target[0].value)
    console.dir(e.target[1].value)
    e.preventDefault();
})

form2.addEventListener('submit', (e) => {
    console.dir(e.target)
    console.dir(e.target[0].value)
    console.dir(e.target[1].value)
    e.preventDefault();
})