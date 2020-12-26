var btn = document.querySelector('#btn');
var modal = document.querySelector('.modal');
var min = document.querySelector('#min');
var max = document.querySelector('#max');
var close = document.querySelector('#close')

btn.addEventListener('click', function () {
    modal.style.transform = 'scale(1)'
})

max.onclick = function () {
    modal.style.width = '100%'
    modal.style.height = '100vh'
    modal.style.fontSize = "1.5rem";
}
min.onclick = function () {
    modal.style.width = "60%";
    modal.style.height = "70%";
    modal.style.fontSize = "1.1rem";
}

close.onclick = function () {
    modal.style.transform = "scale(0)";
}