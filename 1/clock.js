function updateClock() {
    const year = now.getFullYear();  
    const month = now.getMonth() + 1; // 月份从0开始  
    const date = now.getDate();  
    const weekday = now.toLocaleString('default', { weekday: 'long' });  
    const day = now.getDay(); // 星期几  
    const hours = now.getHours();  
    const minutes = now.getMinutes();  
    const seconds = now.getSeconds();  

    console.log(`今天的日期是：${year}年${month}月${date}日 ${weekday}`);  
    console.log(`当前时间是：${hours}时${minutes}分${seconds}秒`);  
    const daysOfWeek = ["日", "一", "二", "三", "四", "五", "六"];  
    const dayName = daysOfWeek[day];  
    const clockDiv = document.getElementById('clock');  
    clockDiv.innerHTML = `今天是 ${year}年${month}月${date}日 星期${dayName} ${hours}时${minutes}分${seconds}秒`;  

    if (minutes === 20 || minutes === 50) {  
        console.log("站起来活动一下吧！");  
    }  
}  

// 每秒更新一次时钟  
setInterval(updateClock, 1000);
setInterval(updateClock, 1000);  
updateClock(); // 初始化时钟
