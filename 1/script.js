// bookInteraction.js  
document.addEventListener('DOMContentLoaded', function() {  
    const employees = document.querySelectorAll('.employee-card h3');  

    employees.forEach((employee) => {  
        const rating = employee.parentElement.getAttribute('data-rating');  
        employee.addEventListener('click', function() {  
            const text = employee.innerText; // 获取员工信息  
            alert(`你点击了：${text} - 评分：${rating}`); // 弹窗显示  
        });  

        employee.addEventListener('mouseover', function() {  
            this.style.color = 'blue'; // 鼠标悬停时变色  
        });  

        employee.addEventListener('mouseout', function() {  
            this.style.color = ''; // 鼠标移出时恢复颜色  
        });  
    });  
});
