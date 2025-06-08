function playSound() {
  let element = window.event.target;
  let number = element.getAttribute("data-sound");

  for (let i = 1; i <= 9; i++) {
    if (number == i) {
      let sound = document.getElementById("sound" + i);
      sound.currentTime = 0;
      sound.play();
    }
  }
}
