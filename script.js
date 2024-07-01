// script.js
function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('timeUTC').textContent = utcTime;
    document.getElementById('day').textContent = day;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 60000);
