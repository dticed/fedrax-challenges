import './style.css';

const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice-text');
const diceButton = document.querySelector('button');

function getAdvices() {
  let dice = Math.random();
  dice = Math.round(dice * 224);

  let url = `https://api.adviceslip.com/advice/${dice}`;
  fetch(url)
    .then((r) => r.json())
    .then((r) => {
      adviceNumber.textContent = `#ADVICE ${r.slip.id}`;
      adviceText.textContent = r.slip.advice;
    });
}

diceButton.addEventListener('click', getAdvices);
