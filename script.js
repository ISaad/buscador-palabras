let palabras = [];

// Cargar palabras desde el archivo
fetch("palabras.txt")
  .then(response => response.text())
  .then(text => {
    palabras = text.split("\n").map(p => p.trim());
  });

document.getElementById("inputTexto").addEventListener("input", function () {
  const prefijo = this.value.toLowerCase();

   // Si la entrada está vacía, no mostrar resultados
  if (prefijo === "") {
    document.getElementById("resultado").innerHTML = "";
    return;  // Detener la ejecución si la entrada está vacía
  }
   
  const resultados = palabras.filter(p => p.startsWith(prefijo));
  
  const lista = document.getElementById("resultado");
  if 
  lista.innerHTML = resultados.map(p => `<li>${p}</li>`).join("");
});
