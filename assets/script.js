/* =========================================================
   Shared interactions: theme, mobile nav, reveal, lightbox, slideshow
   ========================================================= */
(function () {
  "use strict";

  /* ---- Theme (persisted, respects OS preference first time) ---- */
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved) {
      root.setAttribute("data-theme", saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.setAttribute("data-theme", "dark");
    }
  } catch (e) {}

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-theme-toggle]");
    if (!t) return;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e2) {}
  });

  /* ---- Mobile nav ---- */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Gallery lightbox ---- */
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img");
    var lbCap = lb.querySelector("figcaption");
    document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        lbImg.src = btn.getAttribute("data-src");
        lbCap.textContent = btn.getAttribute("data-caption") || "";
        lb.classList.add("open");
      });
    });
    function closeLb() { lb.classList.remove("open"); lbImg.src = ""; }
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.closest(".lightbox-close")) closeLb();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });
  }

  /* ---- Home slideshow ---- */
  var show = document.querySelector("[data-slideshow]");
  if (show) {
    var slides = Array.prototype.slice.call(show.querySelectorAll(".slide"));
    var dotsWrap = show.querySelector(".slide-dots");
    var i = 0, timer = null;
    slides.forEach(function (s, idx) {
      var d = document.createElement("button");
      d.setAttribute("aria-label", "Slide " + (idx + 1));
      d.addEventListener("click", function () { go(idx); restart(); });
      dotsWrap.appendChild(d);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);
    function go(n) {
      slides[i].classList.remove("active"); dots[i].classList.remove("active");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("active"); dots[i].classList.add("active");
    }
    function next() { go(i + 1); }
    function restart() { if (timer) clearInterval(timer); timer = setInterval(next, 4500); }
    show.querySelector(".slide-next").addEventListener("click", function () { next(); restart(); });
    show.querySelector(".slide-prev").addEventListener("click", function () { go(i - 1); restart(); });
    go(0); restart();
  }

  /* ---- Footer year ---- */
  var y = document.getElementById("footer-year");
  if (y) y.textContent = new Date().getFullYear();
})();
