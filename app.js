const homeScreen = document.getElementById("homeScreen");
const oneCardBtn = document.getElementById("oneCardBtn");
const oneCardScreen = document.getElementById("oneCardScreen");

const backHome = document.getElementById("backHome");

const randomBtn = document.getElementById("randomBtn");

const resultScreen = document.getElementById("resultScreen");
const backOneCard = document.getElementById("backOneCard");
const drawAgain = document.getElementById("drawAgain");

const cardRoman = document.getElementById("cardRoman");
const cardName = document.getElementById("cardName");
const cardPosition = document.getElementById("cardPosition");


/* ================================
   TAROT DECK — 78 CARDS
================================ */

const majorArcana = [
  ["0", "THE FOOL"],
  ["I", "THE MAGICIAN"],
  ["II", "THE HIGH PRIESTESS"],
  ["III", "THE EMPRESS"],
  ["IV", "THE EMPEROR"],
  ["V", "THE HIEROPHANT"],
  ["VI", "THE LOVERS"],
  ["VII", "THE CHARIOT"],
  ["VIII", "STRENGTH"],
  ["IX", "THE HERMIT"],
  ["X", "WHEEL OF FORTUNE"],
  ["XI", "JUSTICE"],
  ["XII", "THE HANGED MAN"],
  ["XIII", "DEATH"],
  ["XIV", "TEMPERANCE"],
  ["XV", "THE DEVIL"],
  ["XVI", "THE TOWER"],
  ["XVII", "THE STAR"],
  ["XVIII", "THE MOON"],
  ["XIX", "THE SUN"],
  ["XX", "JUDGEMENT"],
  ["XXI", "THE WORLD"]
];


const suits = [
  "WANDS",
  "CUPS",
  "SWORDS",
  "PENTACLES"
];


const ranks = [
  "ACE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
  "PAGE",
  "KNIGHT",
  "QUEEN",
  "KING"
];


const tarotDeck = [];


/* Major Arcana */

majorArcana.forEach(card => {

  tarotDeck.push({
    roman: card[0],
    name: card[1]
  });

});


/* Minor Arcana */

suits.forEach(suit => {

  ranks.forEach(rank => {

    tarotDeck.push({
      roman: suit,
      name: `${rank} OF ${suit}`
    });

  });

});


/* ================================
   NAVIGATION
================================ */

oneCardBtn.addEventListener("click", () => {

  homeScreen.classList.add("home-hidden");
  oneCardScreen.classList.add("active");

  window.scrollTo(0, 0);

});


backHome.addEventListener("click", () => {

  oneCardScreen.classList.remove("active");
  homeScreen.classList.remove("home-hidden");

  window.scrollTo(0, 0);

});


/* ================================
   RANDOM DRAW
================================ */

function drawRandomCard() {

  const randomIndex =
    Math.floor(Math.random() * tarotDeck.length);

  const selectedCard =
    tarotDeck[randomIndex];


  const reversed =
    Math.random() < 0.5;


  cardRoman.textContent =
    selectedCard.roman;

  cardName.textContent =
    selectedCard.name;

  cardPosition.textContent =
    reversed
      ? "REVERSED ↓"
      : "UPRIGHT ↑";


  oneCardScreen.classList.remove("active");
  resultScreen.classList.add("active");

  window.scrollTo(0, 0);

}


randomBtn.addEventListener(
  "click",
  drawRandomCard
);


drawAgain.addEventListener(
  "click",
  drawRandomCard
);


backOneCard.addEventListener("click", () => {

  resultScreen.classList.remove("active");
  oneCardScreen.classList.add("active");

  window.scrollTo(0, 0);

});
