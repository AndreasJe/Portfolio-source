const gaest = document.getElementById("splash");
const flicker = document.getElementById("textbox");
const splash = document.getElementById("splash");
const introtxt = document.getElementById("intro");
let burger = document.getElementById("burger-nav");
let hello = document.getElementById("CTA");

window.onload = codeAddress;

// When page has been loaded - Do the first move of the splash image
function codeAddress() {
  gaest.classList.add("firstmove");
}

console.log("Start animation på splash unit");

// Starting second splash animation after intro-txt has run its animation
introtxt.onanimationend = function (event) {
  splash.classList.add("secondmove");

  //Hide the Introduction Text
  setTimeout(function () {
    flicker.classList.add("flicker-out-1");
  }, 2000);
  setTimeout(function () {
    hello.classList.add("show");
    burger.style.visibility = "visible";
  }, 3500);
};
