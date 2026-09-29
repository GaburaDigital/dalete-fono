// Keeps the footer copyright year current automatically.
// (Purely cosmetic — the page's visibility never depends on this
// script running.)
document.addEventListener("DOMContentLoaded", function () {
  var anoEl = document.getElementById("ano");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }
});
