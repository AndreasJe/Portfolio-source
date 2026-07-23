function show() {
  document.getElementById("results1").style.display = "block", document.getElementById("results2").style.display = "block", document.getElementById("spil1").style.display = "block", document.getElementById("liste").style.height = "100%", document.getElementById("results2").scrollIntoView()
}

function labResults() {
  document.getElementById("lab").style.display = "block", document.getElementById("lab").scrollIntoView()
}

function hide() {
  document.getElementById("results1").style.display = "none", document.getElementById("results2").style.display = "none", document.getElementById("spil1").style.display = "none", document.getElementById("liste").style.height = "1px", document.getElementById("lab").style.display = "none"
}

function filterSelection(e) {
  var t, s;
  for (t = document.getElementsByClassName("filterDIV"), "all" == e && (e = ""), s = 0; s < t.length; s++) w3RemoveClass(t[s], "show"), t[s].className.indexOf(e) > -1 && w3AddClass(t[s], "show")
}

function w3AddClass(e, t) {
  var s, n, l;
  for (n = e.className.split(" "), l = t.split(" "), s = 0; s < l.length; s++) - 1 == n.indexOf(l[s]) && (e.className += " " + l[s])
}

function w3RemoveClass(e, t) {
  var s, n, l;
  for (n = e.className.split(" "), l = t.split(" "), s = 0; s < l.length; s++)
    for (; n.indexOf(l[s]) > -1;) n.splice(n.indexOf(l[s]), 1);
  e.className = n.join(" ")
}
filterSelection("all");
for (var btnContainer = document.getElementsByClassName("myBtnContainer"), btns = document.getElementsByClassName("btn"), i = 0; i < btns.length; i++) btns[i].addEventListener("click", (function() {
  var e = document.getElementsByClassName("active");
  e[0].className = e[0].className.replace(" active", ""), this.className += " active"
}));
const boxes = gsap.utils.toArray(".box");

function closeButton(e) {
  e.classList.toggle("change")
}

function closeNavonClick() {
  $("#mobil-burger").toggleClass("nav-preset")
}
gsap.set(boxes, {
  autoAlpha: 0,
  y: 50
}), boxes.forEach(((e, t) => {
  const s = gsap.to(e, {
    duration: 1,
    autoAlpha: 1,
    y: 0,
    paused: !0
  });
  ScrollTrigger.create({
    trigger: e,
    end: "bottom bottom",
    once: !0,
    onEnter: e => {
      1 === e.progress ? s.progress(1) : s.play()
    }
  })
})), jQuery(document).ready((function(e) {
  var t = e(".cd-section"),
    s = e("#cd-vertical-nav a");

  function n() {
    t.each((function() {
      $this = e(this);
      var t = e('#cd-vertical-nav a[href="#' + $this.attr("id") + '"]').data("number") - 1;
      $this.offset().top - e(window).height() / 2 < e(window).scrollTop() && $this.offset().top + $this.height() - e(window).height() / 2 > e(window).scrollTop() ? s.eq(t).addClass("is-selected") : s.eq(t).removeClass("is-selected")
    }))
  }

  function l(t) {
    e("body,html").animate({
      scrollTop: t.offset().top
    }, 600)
  }
  n(), e(window).on("scroll", (function() {
    n()
  })), s.on("click", (function(t) {
    t.preventDefault(), l(e(this.hash))
  })), e(".cd-scroll-down").on("click", (function(t) {
    t.preventDefault(), l(e(this.hash))
  })), e(".touch .cd-nav-trigger").on("click", (function() {
    e(".touch #cd-vertical-nav").toggleClass("open")
  })), e(".touch #cd-vertical-nav a").on("click", (function() {
    e(".touch #cd-vertical-nav").removeClass("open")
  }))
})), $("#toggle-menu").click((function() {
  $("#mobil-burger").toggleClass("nav-preset")
}));