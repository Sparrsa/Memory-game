//Declaring our variables.
const mainContainer = document.querySelector("main");
const deckContainer = document.querySelector(".deck-container");
let playerPara = document.createElement("p");
// playerPara.classList.add("player-score"); // Skapa player score i js?
// playerPara.innerText = "Player 1 score: ";
let btnStart = document.querySelector(".btn-start");
let score = document.querySelector(".player-score");

//Skapar all musik och ljudeffekter
///////////////////////////////////////////////

//Theme song
const audioTheme = document.createElement("audio");
audioTheme.setAttribute("class", "theme-song");
audioTheme.setAttribute("autoplay", "");
audioTheme.setAttribute(
  "src",
  "./audio/Y2Mate.is - The Simpsons Main Title Theme-Fttst9dG6Ko-160k-1655507597330.mp3"
);

//flip sfx
const flipSfx = document.createElement("audio");
flipSfx.setAttribute("class", "card-flip");
flipSfx.setAttribute("src", "./audio/240776__f4ngy__card-flip.wav");

//correct sfx
const correctSfx = document.createElement("audio");
correctSfx.setAttribute("class", "audio-correct");
correctSfx.setAttribute(
  "src",
  "./audio/Y2Mate.is - Check mark sound effect-AbiiZErJFC4-160k-1655212547023.mp3"
);

//wrong sfx
const wrongSfx = document.createElement("audio");
wrongSfx.setAttribute("class", "audio-wrong");
wrongSfx.setAttribute(
  "src",
  "./audio/Y2Mate.is - Homer - D´OH-H22t-tiWiLw-128k-1659745984707.mp3"
);

//Lägger till allt i htmlen
mainContainer.append(audioTheme, flipSfx, correctSfx, wrongSfx);

///////////////////////////////////////////////////

let audio = document.querySelector(".theme-song");
audio.volume = 0.05;
audio.loop = true;
let flipAudio = document.querySelector(".card-flip");
flipAudio.volume = 0.5;
let correctAudio = document.querySelector(".audio-correct");
correctAudio.volume = 0.1;
let wrongAudio = document.querySelector(".audio-wrong");
wrongAudio.volume = 0.05;

audio.play();

//Generating alla bilder
function getData() {
  return [
    { imgSrc: "./img/img_Bart_1.png", name: "Bart Simpsons" },
    { imgSrc: "./img/img_Bart_1.png", name: "Bart Simpsons" },
    { imgSrc: "./img/img_family.png", name: "Family" },
    { imgSrc: "./img/img_family.png", name: "Family" },
    { imgSrc: "./img/img_Homer_2.png", name: "Homer" },
    { imgSrc: "./img/img_Homer_2.png", name: "Homer" },
    { imgSrc: "./img/img_Homer1.png", name: "Homer1" },
    { imgSrc: "./img/img_Homer1.png", name: "Homer1" },
    { imgSrc: "./img/img_Homer3.png", name: "Homer3" },
    { imgSrc: "./img/img_Homer3.png", name: "Homer3" },
    { imgSrc: "./img/Lisa.png", name: "Lisa" },
    { imgSrc: "./img/Lisa.png", name: "Lisa" },
    { imgSrc: "./img/maggie.png", name: "maggie" },
    { imgSrc: "./img/maggie.png", name: "maggie" },
    { imgSrc: "./img/NedFlanders.png", name: "Ned" },
    { imgSrc: "./img/NedFlanders.png", name: "Ned" },
    { imgSrc: "./img/Nirvana.png", name: "Nirvana" },
    { imgSrc: "./img/Nirvana.png", name: "Nirvana" },
    { imgSrc: "./img/reggae.png", name: "reggae" },
    { imgSrc: "./img/reggae.png", name: "reggae" },
    { imgSrc: "img/donut_family.png", name: "donut family" },
    { imgSrc: "img/donut_family.png", name: "donut family" },
    { imgSrc: "img/homer_donut.png", name: "homer donut" },
    { imgSrc: "img/homer_donut.png", name: "homer donut" },
  ];
}

//Randomizing
const randomize = () => {
  //Now the cardData is converted from getData
  const cardData = getData();
  console.log(cardData);
  //Randomizing the card for us
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Card generating function, genererar alla kort
const cardGenerator = () => {
  const cardData = randomize();

  //loop through the object
  for (let i = 0; i < cardData.length; i++) {
    let data = cardData[i];
    createCard(data.imgSrc, data.name);
  }

  // Skapar kort
  function createCard(imgSrc, name) {
    //skapar element
    let cardContainer = document.createElement("div"); // container till varje par
    // let cardFront = document.createElement("div"); // framsida på kort
    // let cardBack = document.createElement("div"); // baksida på kort
    let frontImg = document.createElement("img");
    let backImg = document.createElement("img");

    // ger classer
    cardContainer.setAttribute("class", "card-container");
    cardContainer.setAttribute("data-name", name);
    frontImg.setAttribute("class", "card-front"); //front-face
    backImg.setAttribute("class", "card-back"); //back-face
    frontImg.setAttribute("src", imgSrc);
    backImg.setAttribute("src", "img/pink_donut.png");

    // lägger ihop element
    deckContainer.append(cardContainer);
    cardContainer.append(frontImg, backImg);
  }
};
cardGenerator();

//Väljer ut alla kort. Måste ligga här eftersom allt tidigare är att skapa korten
const cards = document.querySelectorAll(".card-container");

let playerOne = {
  //Spelare 1
  name: "player 1",
  score: 0,
};

let playerTwo = {
  //Spelare 2
  name: "player 2",
  score: 0,
};

let players = [playerOne, playerTwo];
let playerTurn = 0;

const playerTurnLbl = document.querySelector(".player-turn-lbl");

let currentPlayer = players[playerTurn];

function startGame() {
  playerTurn = 0; // 0 = player 1 turn, 1 = player 2 turn

  currentPlayer = players[playerTurn];
  playerTurnLbl.innerText = currentPlayer.name;

  updateDisplay();
}

startGame();

function updateDisplay() {
  let currentPlayer = players[playerTurn];
  playerTurnLbl.innerText = currentPlayer.name;
}

//Generate if/else statements

let hasFlippedCard = false;
let firstCard;
let secondCard;
let cardLock = false;

// Card flip
function flipCard() {
  if (cardLock) return; //Avslutar funktionen och "låser" då möjligheten att flippa fler kort om man redan valt 2st kort
  if (this === firstCard) return;

  this.classList.add("flip"); //Genererar en ny "flip" class till htmlen i card-container varje gång man trycker på ett kort. "this" = det man har klickat på

  if (!hasFlippedCard) {
    console.log(!hasFlippedCard);
    //First card. "Om ett kort inte har vänts så är den false, och sedan om den vänds så blir den true"
    //bredvid .card-container får man ett till class namn som heter ".flip"
    hasFlippedCard = true;
    firstCard = this;
    console.log(hasFlippedCard, this);

    // Går vidare till else statement eftersom hasFlippedCard är true efter man vänt på ett kort
  } else {
    //second card
    hasFlippedCard = false;
    secondCard = this;
    console.log(hasFlippedCard);

    console.log(firstCard, secondCard);
    matchedCards(); //skickar vidare till matchedCards funktionen
  }

  flipAudio.play();
}

function matchedCards() {
  //Om kort ett och två matchar och har samma "data.name" så kommer addEventListener sluta gälla
  //för dem korten. Alltså de kommer inte vändas tillbaka.
  if (firstCard.dataset.name === secondCard.dataset.name) {
    console.log(firstCard);
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    // fadeAwayCards();
    correctAudio.play();
    scoreCounter();
  } else {
    cardLock = true; // "true" = Alla andra kort förutom dem två valda korten blir "låsta"
    // Om korten INTE stämmer med varandra så kommer "flipCard" funktionen sluta gälla
    // och ".flip" classen kommer tas bort från korten
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      playerTurn = (playerTurn + 1) % 2;
      wrongAudio.play();
      updateDisplay();
      resetCards();
    }, 1000); //1s timer
  }
}

let playerOneScoreLbl = document.querySelector(".player-one-score");
let playerTwoScoreLbl = document.querySelector(".player-two-score");

function scoreCounter() {
  //Lägger till score till player 1 och 2. Work in progress!!
  if (playerTurn === 0) {
    // Player 1 turn
    players[playerTurn].score = players[playerTurn].score + 1;
    playerOneScoreLbl.innerHTML = players[playerTurn].score;
    console.log(players[playerTurn]); // Visar räknginen i konsollen
  } else if (playerTurn === 1) {
    // Player 2 turn
    players[playerTurn].score = players[playerTurn].score + 1;
    playerTwoScoreLbl.innerHTML = players[playerTurn].score;
    console.log(players[playerTurn]); // Visar räknginen i konsollen
  } else {
    console.log("no score");
  }
}

// function fadeAwayCards() {
//   // Kanske går att sätta någon media@ så korten fadear ut?
//   firstCard.style.cssText = `visibility: hidden;
//   transition: ease-out;`; // Gömmer rätt valda kort
//   secondCard.style.visibility = "hidden"; // Gömmer rätt valda kort
// }

function resetCards() {
  //tar bort "låsningen" om
  firstCard = null; // gör så första valalternativet blir null
  secondCard = null; // gör så andra valalternativet blir null
  hasFlippedCard = false; // resettar tillbaka korten eftersom inget kort längre är flippat
  cardLock = false; // Gör låsningen false, alltså tar bort låset
}
//Lägger till en event listener på alla kort som lyssnar efter funktionen flipCard
cards.forEach((card) => card.addEventListener("click", flipCard));

//resetting the game through the btnStart
//Triggar igång en page refresher när man trycker på retart knappen.
document.querySelector(".btn-start").addEventListener("click", function () {
  window.location.reload();
  return false;
});
