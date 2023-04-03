const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {
    let timers = setInterval(() => {
      let second = Math.floor(seconds % 60);
      let minute = Math.floor((seconds / 60) % 60);
      let hour = Math.floor((seconds / 60 / 60) % 60);
      let strTimer;
        second = ("0" + second).slice(-2);
        minute = ("0" + minute).slice(-2);
        hour = ("0" + hour).slice(-2);
        strTimer = `${hour}:${minute}:${second}`;
        timerEl.innerHTML = strTimer;
      if (seconds <= 0) {
        clearInterval(timers);
        alert("Время закончилось");
      }
      --seconds;
      console.log(seconds)
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
