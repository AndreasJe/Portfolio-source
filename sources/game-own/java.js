window.addEventListener("load", visStart);


let point;
let liv;
let myRand;
let erSpilletStoppet;
let gameTimer;


function visStart() {


  //Titel-melodi

  //Gør at genstart-knappen virker.
  console.log("visStart");
  document.querySelector("#gameOver").classList.add("hide");
  document.querySelector("#levelComplete").classList.add("hide");

  //viser startskærmen og lytter efter om der klikkes på startknappen
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#play").addEventListener("click", startGame);






}

function startGame() {



  document.querySelector('#gameSound').volume = 1;
  document.querySelector('#gameSound').play();
  console.log("lyd - start titel-melodi");

  erSpilletStoppet = false;
  clearTimeout(gameTimer);
  gameTimer = setTimeout(slutSpillet, 30000);

  document.querySelector("#start").classList.add("hide");
  console.log('startGame: ');
  //Nulstil point og liv
  liv = 3;
  myPoint = 0;
  console.log("timer - start animation");
  document.querySelector("#viser_sprite").classList.add("drej");

  //Anton m gaver - position
  document.querySelector("#anton_container1").classList.add("position1");
  document.querySelector("#anton_container2").classList.add("position2");
  document.querySelector("#anton_container3").classList.add("position3");
  document.querySelector("#anton_container4").classList.add("position4");


  //Anton u gaver - position
  document.querySelector("#anton_gave_container1").classList.add("position5");
  document.querySelector("#anton_gave_container2").classList.add("position6");
  document.querySelector("#anton_gave_container3").classList.add("position7");
  document.querySelector("#anton_gave_container4").classList.add("position8");

  // //Anton m gaver - animation
  // document.querySelector("#anton_container1").classList.add("popop");
  // document.querySelector("#anton_container2").classList.add("popop");
  // document.querySelector("#anton_container3").classList.add("popop");
  // document.querySelector("#anton_container4").classList.add("popop");
  //
  // //Anton u gaver - animation
  // document.querySelector("#anton_gave_container1").classList.add("popop");
  // document.querySelector("#anton_gave_container2").classList.add("popop");
  // document.querySelector("#anton_gave_container3").classList.add("popop");
  // document.querySelector("#anton_gave_container4").classList.add("popop");



  // Eventlisteners på Anton
  document.querySelector("#anton_container1").addEventListener("click", nonGift);
  document.querySelector("#anton_container2").addEventListener("click", nonGift);
  document.querySelector("#anton_container3").addEventListener("click", nonGift);
  document.querySelector("#anton_container4").addEventListener("click", nonGift);
  document.querySelector("#anton_gave_container1").addEventListener("click", pointClick);
  document.querySelector("#anton_gave_container2").addEventListener("click", pointClick);
  document.querySelector("#anton_gave_container3").addEventListener("click", pointClick);
  document.querySelector("#anton_gave_container4").addEventListener("click", pointClick);

}


function pointClick() {

  //Lyd kriterier
  document.querySelector('#pointClick_sound').volume = 1;
  document.querySelector('#pointClick_sound').play();
  console.log("lyd - start point-lyd");


  //Point counter
  console.log('pointClick: Gaver!');
  //Få et Point
  myPoint++;
  console.log('myPoint: ' + myPoint);
  // Vis samlet antal myPoint
  document.querySelector("#score_board").textContent = myPoint;


  //Anton forsvinder
  this.classList.add("dissappear");

  //Forsvind animationen er færdig -> nyAnton
  this.addEventListener("animationend", nyAnton);
}

function nonGift() {

  //Lyd kriterier
  document.querySelector('#nonGift_sound').volume = 1;
  document.querySelector('#nonGift_sound').play();
  console.log("lyd - start mistliv-lyd");


  console.log('nonGift: Ups! Ingen gave til dig ');

  liv--;
  console.log('liv: ' + liv);
  document.querySelector("#heart").textContent = liv;

  this.classList.add("dissappear");

  //Forsvind animationen er færdig -> nyAnton
  this.addEventListener("animationend", nyAnton);
  //[ingen liv tilbage]->stopSpillet
  if (liv == 0) {
    slutSpillet();
  }


}

function nyAnton() {
  console.log('nyAnton: Hvad kommer der nu?');
  //    vis anton igen
  this.classList.remove("dissappear");

  //Fjern eksisterende position.
  this.classList.remove("position1");
  this.classList.remove("position2");
  this.classList.remove("position3");
  this.classList.remove("position4");
  this.classList.remove("position5");
  this.classList.remove("position6");
  this.classList.remove("position7");
  this.classList.remove("position8");


  //Giv anton en ny (random) position

  myRandom = Math.floor(Math.random() * 8 + 1);
  this.classList.add("position" + myRandom);
  erSpilletStoppet == false;
}


function levelComplete() {
  erSpilletStoppet == true;

  //Lyd kriterier
  document.querySelector('#levelComplete_sound').volume = 1;
  document.querySelector('#levelComplete_sound').play();
  console.log("lyd - start levelComplete-lyd");

  document.querySelector("#anton_container1").removeEventListener("click", pointClick);
  document.querySelector("#anton_container2").removeEventListener("click", pointClick);
  document.querySelector("#anton_container3").removeEventListener("click", pointClick);
  document.querySelector("#anton_container4").removeEventListener("click", pointClick);
  document.querySelector("#anton_gave_container1").removeEventListener("click", nonGift);
  document.querySelector("#anton_gave_container2").removeEventListener("click", nonGift);
  document.querySelector("#anton_gave_container3").removeEventListener("click", nonGift);
  document.querySelector("#anton_gave_container4").removeEventListener("click", nonGift);
  document.querySelector("#play").removeEventListener("click", startGame);

  console.log("removeEventListener");
  //Skriv “Level complete - du fik XX myPoint” ud i konsollen, hvor XX er antal myPoint.

  document.querySelector("#levelComplete").classList.remove("hide");
  document.querySelector("#replay_btn").addEventListener("click", visStart);

  console.log('Level complete - du fik ' + myPoint);

}

function gameOver() {

  //Lyd kriterier
  document.querySelector('#gameOver_sound').volume = 1;
  document.querySelector('#gameOver_sound').play();
  console.log("lyd - start gameOver-lyd");

  document.querySelector("#anton_container1").removeEventListener("click", pointClick);
  document.querySelector("#anton_container2").removeEventListener("click", pointClick);
  document.querySelector("#anton_container3").removeEventListener("click", pointClick);
  document.querySelector("#anton_container4").removeEventListener("click", pointClick);
  document.querySelector("#anton_gave_container1").removeEventListener("click", nonGift);
  document.querySelector("#anton_gave_container2").removeEventListener("click", nonGift);
  document.querySelector("#anton_gave_container3").removeEventListener("click", nonGift);
  document.querySelector("#anton_gave_container4").removeEventListener("click", nonGift);
  document.querySelector("#play").removeEventListener("click", startGame);

  document.querySelector('#gameSound').pause();

  console.log("removeEventListener");
  //    Skriv “Game over - du fik XX myPoint” ud i konsollen, hvor XX er antal myPoint.

  document.querySelector("#gameOver").classList.remove("hide");
  document.querySelector("#replay_btn").addEventListener("click", visStart);

  console.log('game over - du fik  ' + myPoint);

}

function slutSpillet() {
  console.log('slutSpillet');

  if (myPoint > 8) {
    levelComplete();
  } else {
    gameOver();
  }

  document.querySelector('#gameSound').pause();

}
