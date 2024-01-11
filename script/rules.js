function mostrarVentana() {
  var ventanaFlotante = document.getElementById("ventanaFlotante");
  ventanaFlotante.style = `   
        display: grid;
        grid-template-areas: 
            "T T T S"
            "C C C C"
            "C C C C"
            "C C C C";`;
  // Agregar una clase para aplicar estilos específicos
}

function cerrarVentana() {
  var ventanaFlotante = document.getElementById("ventanaFlotante");
  ventanaFlotante.style.display = "none";
  ventanaFlotante.classList.remove("mostrando"); // Remover la clase para quitar estilos específicos
}

//Exportar las funciones
export { mostrarVentana, cerrarVentana };