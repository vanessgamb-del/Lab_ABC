const cards = document.querySelectorAll(".card");
const btnVocales = document.getElementById("btn-vocales");
const btnTodas = document.getElementById("btn-todas");

btnVocales.addEventListener("click", () => {
  cards.forEach(card => {
    card.style.display =
      card.dataset.tipo === "vocal" ? "block" : "none";
  });
});

btnTodas.addEventListener("click", () => {
  cards.forEach(card => {
    card.style.display = "block";
  });
});
