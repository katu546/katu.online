// Script mínimo, sem dependências e sem animações.
(function () {
  "use strict";

  // 1) Sublinha no menu a página atual
  var arquivo = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (link) {
    if (link.getAttribute("href") === arquivo) {
      link.classList.add("atual");
    }
  });

  // 2) Monta estrelas a partir de data-nota="0..5"
  //    Exemplo: <span class="estrelas" data-nota="4"></span>  ->  ★★★★☆
  document.querySelectorAll(".estrelas[data-nota]").forEach(function (el) {
    var texto = el.getAttribute("data-nota");
    if (texto === "") return; // sem nota: deixa vazio
    var nota = Math.max(0, Math.min(5, parseInt(texto, 10) || 0));
    el.textContent = "★".repeat(nota) + "☆".repeat(5 - nota);
  });

  // 3) Preenche "ultima atualizacao" com a data de modificação da página
  var alvo = document.getElementById("atualizado");
  if (alvo && document.lastModified) {
    var d = new Date(document.lastModified);
    if (!isNaN(d.getTime())) {
      var dd = String(d.getDate()).padStart(2, "0");
      var mm = String(d.getMonth() + 1).padStart(2, "0");
      alvo.textContent = dd + "/" + mm + "/" + d.getFullYear();
    }
  }
})();
