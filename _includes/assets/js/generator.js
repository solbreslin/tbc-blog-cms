window.addEventListener('DOMContentLoaded', () => {
  let content = '';

  TEXT.forEach((item, index) => {
    if (item.active) {
      content += item.content;
    }
  });
  
  const TEXT_BLOCKS = content.split(".");
  const OUTPUT = document.getElementById("output");
  const TRIGGER = document.getElementById("trigger");
  const MAIN = document.getElementById("main");
  let isPlaying = false;

  function update() {
    OUTPUT.textContent = `${getRandomItemInArray(TEXT_BLOCKS)}.`;
    document.body.classList = `colour-${getRandomNumber(5)}`;
  }

  function onFirstClick() {
    const main = document.querySelector('main');
    main.classList.add('is-playing');
  }

  function getRandomItemInArray(arr) {
    let max = arr.length;

    let randomIndex = getRandomNumber(arr.length);
    return arr[randomIndex];
  }

  function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function addEventListener() {
    TRIGGER.addEventListener("click", () => {
      if (!isPlaying) {
        isPlaying = true;
        onFirstClick();
      }
      update();
    });
  }

  function init() {
    addEventListener();
  }

  init();
});