//Declaring our variables.
const deckContainer = document.querySelector(".deck-container");
const cardContainer = document.querySelector(".card-container");
let btnStart = document.querySelector(".btn-start");
let score = document.querySelector("span");

let playerOne = {
  //Spelare 1
  name: " ",
  score: 0,
};

let playerTwo = {
  //Spelare 2
  name: " ",
  score: 0,
};

//Generating alla bilder
const getData = () => [
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
    let cardFront = document.createElement("div"); // framsida på kort
    let cardBack = document.createElement("div"); // baksida på kort
    let cardImg = document.createElement("img"); //bild till både fram och baksida
    let cardBackImg = document.createElement("img");

    // ger classer
    cardContainer.setAttribute("class", "card-container");
    cardContainer.setAttribute("name", name);
    cardFront.setAttribute("class", "card-front"); //front-face
    cardBack.setAttribute("class", "card-back"); //back-face
    cardImg.setAttribute("class", "card-img");
    cardImg.setAttribute("src", imgSrc);

    cardBackImg.setAttribute("class", "card-back");
    cardBackImg.setAttribute("src", "img/pink_donut.png");

    // lägger ihop element
    deckContainer.append(cardContainer);
    cardContainer.append(cardFront, cardBack);
    cardFront.append(cardImg);
    cardBack.append(cardBackImg);
  }
};
cardGenerator();

//if-else statements

//Score keeper.
// btnStart.addEventListener("click", function () {
//   score = score + 1;
//   return score;
// });

let cardOne;
let cardTwo;

function hasFlipped(event) {
  // targets cards
  let clickedCard = event.target;
  let clickedCardBack = clickedCard.querySelector(".card-back");

  if (clickedCard != cardOne) {
    clickedCardBack.style.zindex = "1";
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
  }
  matchCards();
}

function matchCards() {
  // kollar om targeted cards matchar
}

//Generate if/else statements

//Reset the game.
function reset() {
  //Reset all the functions.

  return;
}
