document.addEventListener("DOMContentLoaded", function() {  
  // 选择所有书籍项  
  const bookItems = document.querySelectorAll(".employee-card");  

  // 添加点击事件（onclick）  
  bookItems.forEach(function(item) {  
    item.onclick = function() {  
      const title = this.querySelector('h3').textContent; // 获取书名和评分  
      alert("你点击了： " + title);  
    };  
  });  

  // 添加鼠标按下事件（onmousedown）  
  bookItems.forEach(function(item) {  
    item.onmousedown = function() {  
      this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色  
    };  
  });  

  // 添加鼠标移出事件（onmouseout）  
  bookItems.forEach(function(item) {  
    item.onmouseout = function() {  
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样  
    };  
  });  

  // 添加鼠标悬停事件（onmouseover）  
  bookItems.forEach(function(item) {  
    item.onmouseover = function() {  
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色  
    };  
  });  

  // 添加鼠标松开事件（onmouseup）  
  bookItems.forEach(function(item) {  
    item.onmouseup = function() {  
      this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色  
    };  
  });  
});
