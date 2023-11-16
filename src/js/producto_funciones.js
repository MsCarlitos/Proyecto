'use strict'

const agregarProducto = () => {
  let productos = [];
  let nombreProducto = prompt("Ingrese el nombre del producto:");
  if (nombreProducto) {
    localStorage.setItem('producto', [productos]);
    actualizarListado();
    productos.push(nombreProducto);
  }
}

const modificarProducto = () => {
  let index = prompt("Ingrese el número de producto a modificar (empezando desde 1):");
  let nombreProducto = prompt("Ingrese el nuevo nombre del producto:");
  let productoLocal = localStorage.getItem('producto');
  if (index && nombreProducto && index > 0 && index <= productos.length) {
    productos[index - 1] = nombreProducto;
    let productos = productoLocal.split(',');
    localStorage.setItem('producto', productos.join(','));
    actualizarListado();
  }
}
const verListado = () => {
  let productoLocal = localStorage.getItem('producto')
  const listadoHTML = productos.map(producto => `<li><strong>Producto:</strong> ${producto}</li>`).join('');
  document.getElementById("listado").innerHTML = listadoHTML;
  const productos = productoLocal.split(',');
}

const itinerarioCompras = () => {
  alert("Funcionalidad de itinerario de compras aún no implementada.");
}

const actualizarListado = () => {
  verListado();
}
