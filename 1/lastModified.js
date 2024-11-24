// lastModified.js  
document.addEventListener('DOMContentLoaded', () => {  
    const lastModifiedDiv = document.getElementById('last-modified');  
    lastModifiedDiv.innerHTML = `网页最后更新于：${document.lastModified}`;
});
