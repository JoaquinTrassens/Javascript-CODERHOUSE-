// Desafio de agregar arrays al proyecto por TRASSENS JOAQUIN

const carrito = [];

const skins = [
    { id: 01, arma:`Pistola`, tipo:`USP`, skin:`cortex`, precio:200},
    { id: 02, arma:`Pistola`, tipo:`Glock`, skin:`fade`, precio:200},
    { id: 03, arma:`Pistola`, tipo:`Dual-Berettas`, skin:`aladas`, precio:300},
    { id: 04, arma:`Rifle`, tipo:`AK-47`, skin:`elite`, precio:2700},
    { id: 05, arma:`sub-fusil`, tipo:`UMP`, skin:`cortex`, precio:1200},
]

agregarAlCarrito(skins[0]);

function agregarAlCarrito(producto) {
    carrito.push(producto);
}

skins.forEach(skin => {
    console.table(skin);
})

// sumar el total del carrito

const totalDelCarrito = skins.reduce((acumulador, skins) =>
acumulador + skins.precio, 0);
console.log(`El total del carrito es:$ ${totalDelCarrito}`)