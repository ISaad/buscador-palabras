let palabras = [];

// Cargar palabras desde el archivo
fetch("palabras.txt")
  .then(response => response.text())
  .then(text => {
    palabras = text.split("\n").map(p => p.trim());
  });

document.getElementById("inputTexto").addEventListener("input", function () {
  const prefijo = this.value.toLowerCase();
  const resultados = palabras.filter(p => p.startsWith(prefijo));
  
  const lista = document.getElementById("resultado");
  lista.innerHTML = resultados.map(p => `<li>${p}</li>`).join("");
});
