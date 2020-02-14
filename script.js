const main = document.querySelector('main');
const voiceSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
  {
    img: './img/angry.jpg',
    text: "I'm angry"
  },
  {
    img: './img/drink.jpg',
    text: 'I want to drink'
  },
  {
    img: './img/food.jpg',
    text: 'I want to eat food'
  },
  {
    img: './img/grandma.jpg',
    text: "I wanna go to grandma's"
  },
  {
    img: './img/happy.jpg',
    text: "I'm happy"
  },
  {
    img: './img/home.jpg',
    text: "I'm home"
  },
  {
    img: './img/hurt.jpg',
    text: "I'm hurt"
  },
  {
    img: './img/outside.jpg',
    text: 'I wanna go outside'
  },
  {
    img: './img/sad.jpg',
    text: "I'm sad"
  },
  {
    img: './img/scared.jpg',
    text: "I'm scared"
  },
  {
    img: './img/school.jpg',
    text: 'I wanna go to school'
  },
  {
    img: './img/tired.jpg',
    text: "I'm tired"
  }
];

data.forEach(createBox);

function createBox(item) {
  const box = document.createElement('div');
  const { img, text } = item;
  box.classList.add('box');

  box.innerHTML = `
        <img src="${img}" alt="${text}" />
        <p class="info">${text}</p>
    `;

  // @todo - speech API

  main.appendChild(box);
}

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  console.log(voices);
  voices.forEach(voice => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.innerText = `${voice.name} (${voice.lang})`;

    voiceSelect.appendChild(option);
  });
}

speechSynthesis.addEventListener('voiceschanged', getVoices);

toggleBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.toggle('show')
);

closeBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.toggle('show')
);

getVoices();
