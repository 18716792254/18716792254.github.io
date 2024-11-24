// screeninfo.js  
function updateScreenInfo() {  
    const screenInfoDiv = document.getElementById('screen-info');  
    const screenWidth = screen.width;  
    const screenHeight = screen.height;  
    const windowWidth = window.innerWidth;  
    const windowHeight = window.innerHeight;  

    screenInfoDiv.innerHTML = `屏幕宽度：${screenWidth}px, 屏幕高度：${screenHeight}px<br>  
                               浏览器窗口宽度：${windowWidth}px, 浏览器窗口高度：${windowHeight}px`;  
}  

// 初始化屏幕信息  
updateScreenInfo();  
window.addEventListener('resize', updateScreenInfo); // 窗口大小改变时更新
