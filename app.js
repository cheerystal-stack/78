const homeScreen = document.getElementById("homeScreen");
const oneCardBtn = document.getElementById("oneCardBtn");
const oneCardScreen = document.getElementById("oneCardScreen");

const backHome = document.getElementById("backHome");

const randomBtn = document.getElementById("randomBtn");

const questionScreen = document.getElementById("questionScreen");
const backQuestion = document.getElementById("backQuestion");
const drawFromQuestion = document.getElementById("drawFromQuestion");
const questionInput = document.getElementById("questionInput");
const moodChips = document.querySelectorAll(".mood-chip");

const resultScreen = document.getElementById("resultScreen");
const backOneCard = document.getElementById("backOneCard");
const drawAgain = document.getElementById("drawAgain");

const cardRoman = document.getElementById("cardRoman");
const cardName = document.getElementById("cardName");
const cardPosition = document.getElementById("cardPosition");
const readCardBtn = document.getElementById("readCardBtn");
const cardMeaning = document.getElementById("cardMeaning");

const meaningKeywords = document.getElementById("meaningKeywords");
const meaningMessage = document.getElementById("meaningMessage");
const meaningLove = document.getElementById("meaningLove");
const meaningWork = document.getElementById("meaningWork");


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

/* ================================
   CARD MEANINGS
================================ */

const cardMeanings = {

  "NINE OF CUPS": {
    upright: {
      keywords: "満足・願望成就・喜び・充足",
      message: "願っていたことが実り、満足感を得やすいとき。今ある幸せを素直に受け取って。"
    },
    reversed: {
      keywords: "満たされなさ・期待外れ・過剰・空虚",
      message: "望んだものがあっても、どこか満たされないとき。本当に欲しいものが何なのか、もう一度見つめて。"
    }
  },

  "TWO OF SWORDS": {
    upright: {
      keywords: "迷い・保留・均衡・静観",
      message: "まだ答えを急がなくてもいいとき。情報と気持ちが揃うまで、静かに状況を見つめて。"
    },
    reversed: {
      keywords: "停滞の解除・決断・混乱・動き出す",
      message: "保留されていたことが動き始めそう。避けていた選択にも、そろそろ向き合うとき。"
    }
  },

  "THE HERMIT": {
    upright: {
      keywords: "内省・静けさ・探求・ひとりの時間",
      message: "外の答えより、自分の内側にある答えを探すとき。静かな時間が大切なものを見せてくれそう。"
    },
    reversed: {
      keywords: "孤立・閉じこもる・迷走・内省の長期化",
      message: "考えることに少し疲れているのかも。ひとりで答えを探し続けるより、外の世界にも目を向けて。"
    }
  }

};

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

  const selectedCard = {
  roman: "",
  name: "TWO OF SWORDS"
};

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

randomBtn.addEventListener("click", () => {
  oneCardScreen.classList.remove("active");
  questionScreen.classList.add("active");
  window.scrollTo(0, 0);
});

backQuestion.addEventListener("click", () => {
  questionScreen.classList.remove("active");
  oneCardScreen.classList.add("active");
  window.scrollTo(0, 0);
});

moodChips.forEach(chip => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("selected");
  });
});

drawFromQuestion.addEventListener("click", () => {
  questionScreen.classList.remove("active");
  drawRandomCard();
});


drawAgain.addEventListener(
  "click",
  drawRandomCard
);


backOneCard.addEventListener("click", () => {

  resultScreen.classList.remove("active");
  oneCardScreen.classList.add("active");

  window.scrollTo(0, 0);

});
readCardBtn.addEventListener("click", () => {

  const card = cardMeanings[cardName.textContent];

  const isReversed =
    cardPosition.textContent.includes("REVERSED");

  if (card) {

    const meaning =
      isReversed ? card.reversed : card.upright;

    meaningKeywords.textContent =
      meaning.keywords;

    meaningMessage.textContent =
      meaning.message;

  } else {

    meaningKeywords.textContent =
      "COMING SOON";

    meaningMessage.textContent =
      "This card is waiting to be added to the 78 library.";

  }

  meaningLove.textContent = "";
  meaningWork.textContent = "";

  cardMeaning.classList.toggle("active");

});
