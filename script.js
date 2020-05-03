const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words
const words = [
  'sigh',
  'tense',
  'airplane',
  'boat',
  'pies',
  'juice',
  'elements',
  'costumes',
  'heroes',
  'aardvark',
  'dogs',
  'silver',
  'cosmopolitan',
  'admit',
  'quizzing',
  'zebra'
];

// Init word
let randomWord;
// Init score
let score = 0;
// Init time
let time = 10;
// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
// Add word to DOM
function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

addWordToDom();

// Eventlisteners
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDom();
    updateScore();

    e.target.value = '';
  }
});
