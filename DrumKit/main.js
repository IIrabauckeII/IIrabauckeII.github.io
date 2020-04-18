const buttons = document.querySelectorAll('.key');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let target = document.getElementById(button.innerHTML.toLowerCase());
    target.play();
  })
});

document.addEventListener('keydown', (e) => {
  if (['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].includes(e.key)
) {
    let targetSound = document.getElementById(e.key + 'Sound');
    targetSound.currentTime = 0;
    targetSound.play();
    document.getElementById(e.key + 'Key').classList.add("keyDown");
  }
});

undoTransition = (e) => {
  if (e.propertyName !== "transform") {
    return
  }
  document.getElementById(e.target.id).classList.remove("keyDown");
}

buttons.forEach((button) => {
  button.addEventListener('transitionend', undoTransition)
});
