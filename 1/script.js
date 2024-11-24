// script.js  

// 显示书名和评分的弹窗  
function showInfo(element) {  
    const title = element.getAttribute('data-title');  
    const rating = element.getAttribute('data-rating');  
    alert(`你点击了：${title} - 评分：${rating}`);  
}  

// 改变颜色的函数  
function changeColor(element, color) {  
    element.style.backgroundColor = color;  
}  

// 为每个员工卡片添加事件监听器  
document.querySelectorAll('.employee-card').forEach(card => {  
    card.addEventListener('mouseenter', function() {  
        changeColor(this, '#f0f0f0'); // 鼠标悬停时变色  
    });  

    card.addEventListener('mouseleave', function() {  
        changeColor(this, ''); // 鼠标离开时恢复原色  
    });  
}); 
