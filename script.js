let palabras = [];

// Cargar palabras desde el archivo solo una vez cuando la página se carga
fetch("palabras.txt")
  .then(response => response.text())
  .then(text => {
    palabras = text.split("\n").map(p => p.trim()); // Almacena las palabras en la variable
  })
  .catch(error => console.error("Error al cargar el archivo de palabras:", error));

document.getElementById("inputTexto").addEventListener("input", function () {
  const prefijo = this.value.toLowerCase(); // Convierte a minúsculas para que la búsqueda no sea sensible a mayúsculas

  // Si la entrada está vacía, no mostrar resultados
  if (prefijo === "") {
    document.getElementById("resultado").innerHTML = "";
    document.querySelector(".resultado").classList.remove("visible");
    return;
  }

  // Filtra las palabras que comienzan con el prefijo
  const resultados = palabras.filter(p => p.startsWith(prefijo));

  // Muestra los resultados en la lista
  const lista = document.getElementById("resultado");
  lista.innerHTML = resultados.map(p => `<li>${p}</li>`).join(""); // Convierte el array en una lista HTML

  // Si hay resultados, mostramos el borde y la lista
  if (resultados.length > 0) {
    document.querySelector(".resultado").classList.add("visible");
  } else {
    document.querySelector(".resultado").classList.remove("visible");
  }
});
