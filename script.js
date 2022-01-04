// time

setInterval(() => {
    let time = document.getElementById('time');
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    time.style.color = "blue";
    time.innerHTML = `${hour}. ${minutes}. ${second}`;
}, 1000);