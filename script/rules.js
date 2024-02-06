function mostrarVentana() {
  let ventanaFlotante = document.getElementById("ventanaFlotante");
  ventanaFlotante.classList.remove("hiddenContent");
  ventanaFlotante.classList.add("flotante");
}

function cerrarVentana() {
  let ventanaFlotante = document.getElementById("ventanaFlotante");
  ventanaFlotante.setAttribute("class","hiddenContent");
  ventanaFlotante.classList.remove("flotante"); // Remover la clase para quitar estilos específicos
}

//Exportar las funciones
export { mostrarVentana, cerrarVentana };