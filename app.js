let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let pm_am = document.getElementById("pm-am");

function clock() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  s < 10 ? (second.textContent = "0" + s) : (second.textContent = s);
  m < 10 ? (minute.textContent = "0" + m) : (minute.textContent = m);
  h < 10 ? (hour.textContent = "0" + h) : (hour.textContent = h);

  h < 12 ? (pm_am.textContent = "AM") : (pm_am.textContent = "PM");
}

setInterval("clock()", 1000);
