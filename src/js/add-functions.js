let Producto = window.Producto;

const save = () => {
    let codigoBarras = document.getElementById('codigoBarras').value;
    let nombreProducto = document.getElementById('nombreProducto').value;
    let descripcionProducto = document.getElementById('descripcionProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;
    let costoProducto = document.getElementById('costoProducto').value;
    let producto = Producto;

    producto = {
        codigoBarras: codigoBarras,
        nombreProducto: nombreProducto,
        descripcionProducto: descripcionProducto,
        precioProducto: precioProducto,
        costoProducto: costoProducto,
    };

    let productoLocal = localStorage.getItem('producto');

    if(!productoLocal) {
        localStorage.setItem('producto', [JSON.stringify(producto)]);
        alert('Producto Guardado con exito.');
        return;
    }
    updateProducto(producto);
}

const updateProducto = (producto) => {
    let productoLocal = JSON.parse(localStorage.getItem('producto'));
    let productoActualizado = {
        producto:[
            productoLocal,
            producto
        ]
    }
    localStorage.setItem('producto', JSON.stringify(productoActualizado))
    alert('Producto Guardado con exito.');
    return;
}