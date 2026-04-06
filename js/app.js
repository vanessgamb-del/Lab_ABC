const cardsContainer = document.getElementById("cards");
const btnVocales = document.getElementById("btn-vocales");
const btnTodas = document.getElementById("btn-todas");

const letras = [
  { letra: "A", palabra: "Aguacate", tipo: "vocal" },
  { letra: "B", palabra: "Banano", tipo: "consonante" },
  { letra: "C", palabra: "Carro", tipo: "consonante" },
  { letra: "D", palabra: "Dado", tipo: "consonante" },
  { letra: "E", palabra: "Elefante", tipo: "vocal" },
  { letra: "F", palabra: "Foca", tipo: "consonante" },
  { letra: "G", palabra: "Gato", tipo: "consonante" },
  { letra: "H", palabra: "Helado", tipo: "consonante" },
  { letra: "I", palabra: "Iglú", tipo: "vocal" },
  { letra: "J", palabra: "Jirafa", tipo: "consonante" },
  { letra: "K", palabra: "Koala", tipo: "consonante" },
  { letra: "L", palabra: "León", tipo: "consonante" },
  { letra: "M", palabra: "Mono", tipo: "consonante" },
  { letra: "N", palabra: "Nube", tipo: "consonante" },
  { letra: "O", palabra: "Oso", tipo: "vocal" },
  { letra: "P", palabra: "Pato", tipo: "consonante" },
  { letra: "Q", palabra: "Queso", tipo: "consonante" },
  { letra: "R", palabra: "Ratón", tipo: "consonante" },
  { letra: "S", palabra: "Sol", tipo: "consonante" },
  { letra: "T", palabra: "Tigre", tipo: "consonante" },
  { letra: "U", palabra: "Uva", tipo: "vocal" },
  { letra: "V", palabra: "Vaca", tipo: "consonante" },
  { letra: "W", palabra: "Wafle", tipo: "consonante" },
  { letra: "X", palabra: "Xilófono", tipo: "consonante" },
  { letra: "Y", palabra: "Yoyo", tipo: "consonante" },
  { letra: "Z", palabra: "Zorro", tipo: "consonante" }
];

// CREAR CARDS
letras.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.tipo = item.tipo;

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${item.letra}</div>
      <div class="card-back">
        <img src="images/${item.letra.toLowerCase()}-${item.palabra.toLowerCase()}.jpg" />
        <p>${item.palabra}</p>
      </div>
    </div>
  `;

  // CLICK: flip + sonido
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    hablar(`${item.letra} de ${item.palabra}`);
  });

  cardsContainer.appendChild(card);
});

// SONIDO
function hablar(texto) {
  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-ES";
  speechSynthesis.speak(voz);
}

// FILTROS
btnVocales.addEventListener("click", () => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      card.dataset.tipo === "vocal" ? "block" : "none";
  });
});

btnTodas.addEventListener("click", () => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = "block";
  });
});
``