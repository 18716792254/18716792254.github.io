// mouseEvent.js  
document.addEventListener('click', function(event) {  
    const x = event.clientX;  
    const y = event.clientY;  
    alert(`点击位置：X=${x}, Y=${y}`);  
});
