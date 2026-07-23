///Variabler

//Start skærm og elementer
let start = document.querySelector("#start");
let startButton = document.querySelector("#start_button");

//Intro skærm og elementer
let introduction = document.querySelector("#introduction");
let introButton = document.querySelector("#agree_button");
let introtext = document.querySelector("#intro_text");

// Game elementer
let currentImage;


//Knapper i spillet
let anmeldButton = document.querySelector("#anmeld_button");
let delButton = document.querySelector("#del_button")

//Tid og point
let point = 0;
let time = 30;

let pointButton = document.querySelector("#score_button")
let pointLabel = document.querySelector("#score_text")
let gameTime;

//Level complete skærm og elementer
let levelCompleteScreen = document.querySelector("#levelcomplete");

//Game over skærm og elementer
let gameOverScreen = document.querySelector("#gameover");
let replayButton = document.querySelector("#replay_button");


//Lyde
let backgroundMusic = document.querySelector("#background_music");
let levelCompleteSound = document.querySelector("#level_complete_sound");
let gameOverSound = document.querySelector("#game_over_sound");
let anmeldSound = document.querySelector("#click_anmeld_sound");
let delSound = document.querySelector("#click_del_sound");



//Vis start skærm når siden er loaded

window.addEventListener("load", startScreen);

function startScreen() {

    console.log("startScreen");

    //Vis startskærm og knap

    start.style.display = "block";

    startButton.style.display = "block";

    //Giv knap en pulse animation

    startButton.classList.add("pulse");

    //Når man klikker på knap sendes man videre til intro skærm

    startButton.addEventListener("click", intro);

}

function intro() {

    console.log("intro");


    //Fjern knap, animation og eventlistener

    startButton.removeEventListener("click", intro);
    startButton.style.display = "none";
    startButton.classList.remove("pulse");

    //Vis intro
    introduction.style.display = "block";
    introButton.style.display = "block";
    introtext.style.display = "block";

    //Tilføj animation
    introButton.classList.add("pulse");

    //Load og start musik

    backgroundMusic.load();
    backgroundMusic.volume = 0.3;
    backgroundMusic.play();



    //Når skærmen er faded ud vis introduktion

    agree_button.addEventListener("click", hideIntro);
}



function hideIntro() {

    console.log("hideIntro");

    //Fjern animation og eventlistener

    introButton.classList.remove("pulse");
    introButton.removeEventListener("click", hideIntro);

    //Kør chooseGoodOrBad funktion

    chooseGoodOrBad();


    //Start ud animation

    introduction.classList.add("disappear");
    start.classList.add("disappear");

    //Når skærmen er væk vis selve spillet

    start.addEventListener("animationend", startGame);
}

function chooseGoodOrBad() {

    console.log("chooseGoodOrBad");

    //Fjerner animation og eventlistener, hvis det ikke er første gang funktionen er i brug

    if (currentImage != null) {

        delButton.classList.remove("scale");
        anmeldButton.classList.remove("scale");

        currentImage.classList.remove("scroll_out");
        currentImage.removeEventListener("animationend", chooseGoodOrBad);

        currentImage.style.display = "none";

        //Sæt eventlistener på igen

        anmeldButton.addEventListener("click", clickAnmeld);
        delButton.addEventListener("click", clickDel);
    }

    // Laver if sætning, hvor der er 50% chance for nude eller dyrebillede

    if (Math.random() > 0.5) {

        //Tilfældigt hvilket dyr vises og samme dyr får en animation på

        let randomAnimal = Math.floor(Math.random() * Math.floor(11)) + 1;

        document.querySelector("#ani_" + randomAnimal).style.display = "block";
        document.querySelector("#ani_" + randomAnimal).classList.add("scroll_in");

        //Lader variablen være det viste billede

        currentImage = document.querySelector("#ani_" + randomAnimal);

    } else {

        //Viser tilfældig nude og samme nude får en animation på

        let randomNude = Math.floor(Math.random() * Math.floor(12)) + 1;

        document.querySelector("#skin_" + randomNude).style.display = "block";
        document.querySelector("#skin_" + randomNude).classList.add("scroll_in");

        //Lader variablen være det viste billede

        currentImage = document.querySelector("#skin_" + randomNude);

    }
}

function startGame() {

    console.log("startGame");

    //Vis ikke intro og start skærm og knap

    introduction.style.display = "none";
    introButton.style.display = "none";
    start.style.display = "none";

    //Fjern anímationer og eventlistener
    introduction.classList.remove("disappear");
    start.classList.remove("disappear");
    start.removeEventListener("animationend", startGame);

    //Vis foreground

    document.querySelector("#game_foreground").style.display = "block";

    //Nulstil tid og point
    point = 0;
    time = 30;


    pointLabel.innerHTML = "" + point + "";
    document.querySelector("#time_board").innerHTML = "" + time + " sek tilbage";

    //Sæt tiden til at gå ned 1 sek af gangen
    gameTime = setInterval(timer, 1000);


    //Add eventlistener

    anmeldButton.addEventListener("click", clickAnmeld);
    delButton.addEventListener("click", clickDel);


}

function clickDel() {

    console.log("clickDel");

    //Fjern eventlistener og animation
    delButton.removeEventListener("click", clickDel);

    currentImage.classList.remove("scroll_in");

    //Afspil lyd
    delSound.load();
    delSound.play();

    //Tilføj animation på knap

    delButton.classList.add("scale");

    //Tilføj forsvind animation til billede
    currentImage.classList.add("scroll_out");


    if (currentImage.id.includes("skin")) {

        gameOver();

    } else {
        point++
        pointLabel.innerHTML = "" + point + "";

        currentImage.addEventListener("animationend", chooseGoodOrBad);
    }




}

function clickAnmeld() {

    console.log("clickAnmeld");

    //Fjern eventlistener og animation
    delButton.removeEventListener("click", clickAnmeld);

    currentImage.classList.remove("scroll_in");

    //Afspil lyd
    anmeldSound.load();
    anmeldSound.play();

    //Tilføj animation på knap
    anmeldButton.classList.add("scale");


    //Tilføj forsvind animation til billede
    currentImage.classList.add("scroll_out");


    if (currentImage.id.includes("skin")) {

        point++
        pointLabel.innerHTML = "" + point + "";

        currentImage.addEventListener("animationend", chooseGoodOrBad);
    } else {
        point--
        pointLabel.innerHTML = "" + point + "";

        currentImage.addEventListener("animationend", chooseGoodOrBad);
    }


}

function timer() {

    console.log("timer");

    // Lad tiden gå ned 1 sek af gangen

    time--;

    // Stop spillet hvis tiden er under 0

    if (time < 0) {

        levelComplete();

    }

    //Hvis tiden er over 0 bliv ved med at tælle ned
    else {

        document.querySelector("#time_board").innerHTML = "" + time + " sek tilbage";

    }
}

function gameOver() {

    console.log("gameOver");

    // Fjern foreground

    document.querySelector("#game_foreground").style.display = "none";

    //Fjern animationer og eventlistener
    anmeldButton.removeEventListener("click", clickAnmeld);
    delButton.removeEventListener("click", clickDel);
    currentImage.classList.remove("scroll_out");

    //Stop tid
    clearInterval(gameTime);

    //Vis skærm og knap

    gameOverScreen.style.display = "block";
    replayButton.style.display = "block";

    //Stop baggrundsmusik
    backgroundMusic.pause();


    //Afspil lyd
    gameOverSound.load();
    gameOverSound.play();

    //Tilføj animation
    replayButton.classList.add("pulse");

    //Tilføj eventlistener
    replayButton.addEventListener("click", tryAgain);


}

function levelComplete() {

    console.log("levelComplete");

    // Fjern foreground

    document.querySelector("#game_foreground").style.display = "none";

    //Fjern animationer og eventlistener
    anmeldButton.removeEventListener("click", clickAnmeld);
    delButton.removeEventListener("click", clickDel);
    currentImage.classList.remove("scroll_out");

    //Stop tid
    clearInterval(gameTime);

    //Vis skærm og knap

    levelCompleteScreen.style.display = "block";
    replayButton.style.display = "block";

    //Stop baggrundsmusik
    backgroundMusic.pause();

    //Afspil lyd
    levelCompleteSound.load();
    levelCompleteSound.play();

    //Tilføj animation
    replayButton.classList.add("pulse");

    //Tilføj eventlistener
    replayButton.addEventListener("click", tryAgain);

}

function tryAgain() {

    console.log("tryAgain");

    //Fjern knap og skærme
    gameOverScreen.style.display = "none";
    levelCompleteScreen.style.display = "none";
    replayButton.style.display = "none";

    //Fjern animation og eventlistener
    replayButton.classList.remove("pulse");
    replayButton.removeEventListener("click", tryAgain);

    //Stop lyde
    levelCompleteSound.pause();
    gameOverSound.pause();

    //Send til start

    startScreen();
}
