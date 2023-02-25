function mostrarTexto() {
  var elemento = document.getElementById("txt");
  if (elemento.style.display === "none") {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
  var elemento2 = document.getElementById("txt2");
  if (elemento2.style.display === "none") {
    elemento2.style.display = "block";
  } else {
    elemento2.style.display = "none";
  }
  var contenidoAdicional = document.querySelector(".contenido-adicional");
  if (contenidoAdicional.classList.contains("oculto")) {
    contenidoAdicional.classList.remove("oculto");
  } else {
    contenidoAdicional.classList.add("oculto");
  }
}
