
// Referencias
const body = document.body;
const btnContraste = document.getElementById('btn-contraste');
const btnMas = document.getElementById('btn-mas');
const btnMenos = document.getElementById('btn-menos');
const avisos = document.getElementById('avisos');
// Tamaño de fuente inicial
let fontSize = 16;
// Alternar contraste
btnContraste.addEventListener('click', () => {
  const activo = body.classList.toggle('alto-contraste');
  btnContraste.setAttribute('aria-pressed', activo);
  avisos.textContent = activo ? "Modo alto contraste activado" : "Modo alto contraste desactivado";
});

// Aumentar tamaño de fuente
btnMas.addEventListener('click', () => {
  fontSize = Math.min(fontSize + 2, 24); // limite 24px
  body.style.fontSize = fontSize + "px";
  avisos.textContent = "Fuente aumentada a " + fontSize + " píxeles";
});
// Disminuir tamaño de fuente
btnMenos.addEventListener('click', () => {
  fontSize = Math.max(fontSize - 2, 12); // límite 12px
  body.style.fontSize = fontSize + "px";
  avisos.textContent = "Fuente reducida a " + fontSize + " píxeles";
});
