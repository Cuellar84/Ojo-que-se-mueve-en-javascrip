let punto = document.querySelector('.punto');
let ojo = document.querySelector('.ojo');

let punto2 = document.querySelector('.punto2');
let ojo2 = document.querySelector('.ojo2');


document.onmousemove = (e) => {
    let x = e.clientX * 100 / window.innerWidth + "%";
    let y = e.clientY * 100 / window.innerHeight + "%";
    punto.style.left = x;
    punto.style.top = y;

    
    punto2.style.left = x;
    punto2.style.top = y;


}   


