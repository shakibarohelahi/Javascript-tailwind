function setClock() {
  const second = document.getElementById("second");
  const minute = document.getElementById("minute");
  const hour = document.getElementById("hour");

  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours() % 12;

  const secDeg = (sec / 60) * 360 + 90;
  const minDeg = (min / 60) * 360 + (sec / 60) * 6 + 90;
  const hrDeg = hr * 30 + (min / 60) * 30 + 90;

  implementRotation(second, sec, secDeg);
  implementRotation(minute, min, minDeg);
  implementRotation(hour, hr, hrDeg);
}

function implementRotation(kindName, kindValue, kindDeg) {
  if (kindValue === 0) {
    kindName.style.transition = "none";
  } else {
    kindName.style.transition = "transform 0.1s linear";
  }
  kindName.style.transform = `rotate(${kindDeg}deg)`;
}

setClock();
setInterval(setClock, 1000);
