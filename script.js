const currentTime = document.getElementById("current-time");

function getTime() {
  const date = new Date();
  const timeString = date.toLocaleTimeString();
  currentTime.innerHTML = timeString;
}

getTime();

setInterval(getTime, 1000);
