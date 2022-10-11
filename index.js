/*Lluvia */

const estaciones = {
  primavera: 0.3,
  verano: 0.1,
  otoño: 0.5,
  invierno: 0.85,
};

let lluviaProb = estaciones.otoño;
const lloviendo = "#002175";
const despejado = "#00D0FA";
let viewLluvia = despejado;
let estacionInterval = 1;
setInterval(() => {
    estacionInterval++;
  if (estacionInterval == 1) {
    lluviaProb = estaciones.primavera;
    console.log("Es primavera");
  } else if (estacionInterval == 2) {
    lluviaProb = estaciones.verano;
    console.log("Es Verano");
  } else if (estacionInterval == 3) {
    lluviaProb = estaciones.otoño;
    console.log("Es Otoño");
  } else if (estacionInterval == 4) {
    lluviaProb = estaciones.invierno;
    console.log("Es Invierno");
    estacionInterval = 0;
  }
}, 10000);

setInterval(() => {
  const r = Math.random();

  if (r < lluviaProb) {
    viewLluvia = lloviendo;
    console.log("Tormenta ");
  } else {
    viewLluvia = despejado;
    console.log("Oceano Despejado ");

  }
}, 2000);

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let Enki = function () {
    this.x = width / 2;
    this.y = height / 2;
  };

  Enki.prototype.display = function () {
    stroke(129, 0, 250);
    strokeWeight(10);
    point(this.x, this.y);
  };

  Enki.prototype.walk = function () {
    let stepx = floor(random(3) - 1);
    let stepy = floor(random(3) - 1);
    this.x += stepx;
    this.y += stepy;
  };
  let adam = new Enki();

  draw = function () {
    background(viewLluvia);
    adam.walk();
    adam.walk();
    adam.walk();
    adam.display();
  };
}
