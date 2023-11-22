let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    timer = setInterval(updateTime, 10);
    document.getElementById("startBtn").disabled = true;
}

function stopStopwatch() {
    clearInterval(timer);
    document.getElementById("startBtn").disabled = false;
}

function resetStopwatch() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startBtn").disabled = false;
}

function updateTime() {
    milliseconds++;

    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
    
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function formatMilliseconds(ms) {
    return ms < 10 ? "0" + ms : ms;
}
