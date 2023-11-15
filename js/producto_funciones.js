let productos = [];

const agregarProducto = () => {
    let nombreProducto = prompt("Ingrese el nombre del producto:");
    if (nombreProducto) {
        productos.push(nombreProducto);
        localStorage.setItem('producto',[productos]);
        actualizarListado();
    }
}

const modificarProducto = () => {
    let index = prompt("Ingrese el número de producto a modificar (empezando desde 1):");
    let nombreProducto = prompt("Ingrese el nuevo nombre del producto:");
    let productoLocal = localStorage.getItem('producto');
    let productos = productoLocal.split(',');
    if (index && nombreProducto && index > 0 && index <= productos.length) {
        productos[index - 1] = nombreProducto;
        localStorage.setItem('producto', productos.join(','));
        actualizarListado();
    }
}
const verListado = () => {
    let productoLocal = localStorage.getItem('producto')
    const productos = productoLocal.split(',');
    const listadoHTML = productos.map(producto => `<li><strong>Producto:</strong> ${producto}</li>`).join('');
    document.getElementById("listado").innerHTML = listadoHTML;
}

const itinerarioCompras = () => {
    alert("Funcionalidad de itinerario de compras aún no implementada.");
}

const actualizarListado = () => {
    verListado();
}
