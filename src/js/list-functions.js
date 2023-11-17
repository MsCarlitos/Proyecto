"use strict";

(() => {
  let productoLocal = JSON.parse(localStorage.getItem('producto'));

  let productoListHTML = productoLocal.map((producto) =>
    `
      <tr>
        <th class="titles" scope="row">${producto.id}</th>
        <td class="titles">${producto.codigoBarras}</td>
        <td class="titles">${producto.nombreProducto}</td>
        <td class="titles">${producto.descripcionProducto}</td>
        <td class="titles">$ ${parseInt(producto.precioProducto).toFixed(2)}</td>
        <td class="titles">$ ${parseInt(producto.costoProducto).toFixed(2)}</td>
        <td class="titles">
          <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${producto.id})">
            <img src="../src/assets/edit.svg" alt="edit" title="edit">
          </button>
          <button class="btn btn-danger" onclick="remove(${producto.id})">
            <img src="../src/assets/trash.svg" alt="remove" title="remove">
          </button>
        </td>
      </tr>
    `
  ).join('');
  document.getElementById('producto').innerHTML = productoListHTML;
})()

const openModal = (pid) => {
  let productoLocal = JSON.parse(localStorage.getItem('producto'));
  let productSelected = productoLocal.find((producto) => producto && producto.id === pid);

  document.getElementById('codigoBarras').value = productSelected.codigoBarras;
  document.getElementById('nombreProducto').value = productSelected.nombreProducto;
  document.getElementById('descripcionProducto').value = productSelected.descripcionProducto;
  document.getElementById('precioProducto').value = productSelected.precioProducto;
  document.getElementById('costoProducto').value = productSelected.costoProducto;

  let buttonSave = `<button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="save(${pid})">Guardar</button>`;
  document.getElementById('save').innerHTML = buttonSave;
}

const save = (pid) => {
  let productoLocal = JSON.parse(localStorage.getItem('producto'));

  let nombreProducto = document.getElementById('nombreProducto').value;
  let descripcionProducto = document.getElementById('descripcionProducto').value;
  let precioProducto = document.getElementById('precioProducto').value;
  let costoProducto = document.getElementById('costoProducto').value;

  const productUpdated = productoLocal.map((product) => {
    if (product.id === pid) {
      return {
        ...product,
        nombreProducto: nombreProducto,
        descripcionProducto: descripcionProducto,
        precioProducto: precioProducto,
        costoProducto: costoProducto,
      }
    }
    return product;
  });
  localStorage.setItem('producto', JSON.stringify(productUpdated));
  window.location.reload(true);
}

const remove = (pib) => {
  let productoLocal = JSON.parse(localStorage.getItem('producto'));
  const productUpdated = productoLocal.filter((product) => product.id !== pib);
  localStorage.setItem('producto', JSON.stringify(productUpdated))
}