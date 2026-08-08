// Keeps the footer copyright year current automatically.
// (Purely cosmetic — the page's visibility never depends on this
// script running; see the @supports-gated reveal animation in
// style.css, which works with or without JavaScript.)
document.addEventListener("DOMContentLoaded", function () {
  var anoEl = document.getElementById("ano");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }
});
