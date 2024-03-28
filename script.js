const circularBar = document.getElementById("circular-progress-bar");
const circularValue = document.getElementById("circular-bar-value");
const randomBtn = document.getElementById("randomBtn");
const randomBtnActive = (function () {
  const objOfObjs = document.styleSheets[0].cssRules;
  for (const obj of objOfObjs) {
    if (obj.selectorText === "#randomBtn:active") {
      return obj;
    }
  }
  return null;
})();

function barAnimation(percent = 100, intervalSpeed = 30) {
  randomBtnActive.style.pointerEvents = "none";
  let start = 0;
  circularValue.textContent = `${percent}%`;
  const progress = setInterval(() => {
    circularBar.style.setProperty("--percent", start);
    if (start === percent) {
      clearInterval(progress);
      randomBtnActive.style.pointerEvents = "auto";
    }
    start++;
  }, intervalSpeed);
}

window.onload = () => {
  barAnimation();
};

randomBtn.onclick = () => {
  barAnimation((percent = Math.floor(Math.random() * 100)));
};
