let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav1');

hamburger.addEventListener('click', 
 function(e) { 
 e.stopPropagation();
 nav.classList.toggle('active');
});

document.addEventListener('click', 
 function(e) { 
 if (!nav.contains(e.target)) {
  nav.classList.remove('active');
 }
});
function handle() {
    alert('Заявка отправлена!');
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
}

let button = document.querySelector('.btn');
button.addEventListener('click', handle);
    