window.onload = function(){
    let Box = document.getElementById('box');
    let Box_height = Box.clientHeight;
    let Box_width = Box.clientWidth;
    Box.addEventListener('mousemove', catchme);

    function catchme(){
        Box.style.top = Math.floor(Math.random() * (window.innerHeight - Box_height - 6)) + 'px';
        Box.style.left = Math.floor(Math.random() * (window.innerWidth - Box_width - 6)) + 'px';
    }
}