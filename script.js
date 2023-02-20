setInterval( () => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hand_rotation = 30*htime + mtime/2;
    minute_rotation = 6*mtime;
    second_rotation = 6*stime;

    hour.style.transform = `rotate(${hand_rotation}deg)`;
    minute.style.transform = `rotate(${minute_rotation}deg)`;
    second.style.transform = `rotate(${second_rotation}deg)`;
},1000);