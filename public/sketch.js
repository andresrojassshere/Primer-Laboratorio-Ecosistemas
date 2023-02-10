let canvas;

//random user
let randomUserURL = "https://randomuser.me/api/";
let randomUser = null;

//bitcoin price
let bitcoinPriceURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
let bitcoinPrice = null;

//random fact about cats
let randomCatFactURL = "https:catfact.ninja/fact";
let randomCatFact = null;

//population US
let populationUsURL =
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
let populationUs = null;

function setup() {
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.style("position", "fixed");
  canvas.style("top", "0");
  canvas.style("right", "0");

  console.log(fetch(randomUserURL).then((response) => response.json()));

  //random user
  fetch(randomUserURL)
    .then((response) => response.json())
    .then((data) => {
      randomUser = data;
      console.log(randomUser.results);
    });

  //bitcoin price
  console.log(fetch(bitcoinPriceURL).then((response) => response.json()));

  fetch(bitcoinPriceURL)
    .then((response) => response.json())
    .then((data) => {
      bitcoinPrice = data;
      console.log(bitcoinPrice.results);
    });

  //random cats fact
  console.log(fetch(randomCatFactURL).then((response) => response.json()));

  fetch(randomCatFactURL)
    .then((response) => response.json())
    .then((data) => {
      randomCatFact = data;
      console.log(randomCatFact.results);
    });

  //population US
  console.log(fetch(populationUsURL).then((response) => response.json()));

  fetch(populationUsURL)
    .then((response) => response.json())
    .then((data) => {
      populationUs = data;
      console.log(populationUs.data[0].results);
    });
}

function draw() {
  background(0, 50);
  newCursor();

  textSize(40);
  text("Lab-01: Fetch API", 100, 90);
  textSize(10);
  fill(0, 102, 153);
  text("If you want new responses please refresh the page", 100, 105);

  //random user
  if (randomUser != null) {
    textSize(20);
    fill(0, 102, 153);
    text("Random User:", 100, 140);
    fill(255);
    textSize(16);
    text("First Name:", 100, 160);
    textSize(12);
    text(randomUser.results[0].name.first, 110, 180);
    textSize(16);
    text("Last Name:", 100, 200);
    textSize(12);
    text(randomUser.results[0].name.last, 110, 220);
    textSize(16);
    text("Email:", 100, 240);
    textSize(12);
    text(randomUser.results[0].email, 110, 260);
    textSize(16);
    text("City:", 100, 280);
    textSize(12);
    text(randomUser.results[0].location.city, 110, 300);
  }

  //current bitcoin population
  if (bitcoinPrice != null) {
    textSize(20);
    fill(0, 102, 153);
    text("Bitcoin Current Price:", 100, 340);
    fill(255);
    textSize(16);
    text("Rate:", 100, 360);
    textSize(12);
    text(bitcoinPrice.bpi.GBP.rate, 110, 380);
    text("Code:", 100, 400);
    textSize(12);
    text(bitcoinPrice.bpi.GBP.code, 110, 420);
  }

  // random cats fact
  if (randomCatFact != null) {
    textSize(20);
    fill(0, 102, 153);
    text("Random Cat Fact:", 400, 140);
    fill(255);
    textSize(16);
    text("Fact:", 400, 160);
    textSize(12);
    text(randomCatFact.fact, 410, 180);
  }

  //pSopulation US
  if (populationUs != null) {
    textSize(20);
    fill(0, 102, 153);
    text("Population US:", 400, 220);
    fill(255);
    textSize(16);
    text("US Population 2017", 400, 240);
    textSize(12);
    text(populationUs.data[3].Population, 410, 260);
    textSize(16);
    text("US Population 2018", 400, 280);
    textSize(12);
    text(populationUs.data[2].Population, 410, 300);
    textSize(16);
    text("US Population 2019", 400, 320);
    textSize(12);
    text(populationUs.data[1].Population, 410, 340);
  }
}

function mouseClicked() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
  noStroke();
  fill(255);
  ellipse(pmouseX, pmouseY, 10, 10);
}
