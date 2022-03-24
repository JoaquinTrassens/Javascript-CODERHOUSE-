// Desafio de eventos por TRASSENS JOAQUIN ELIAS

// Incorporacion de evento

const boton1 = document.getElementById('idBoton1');
boton1.addEventListener('click',eventoBoton1);

const boton2 = document.getElementById('idBoton2');
boton2.addEventListener('click',eventoBoton2);

const boton3 = document.getElementById('idBoton3');
boton3.addEventListener('click',eventoBoton3);

const boton4 = document.getElementById('idBoton4');
boton4.addEventListener('click',eventoBoton4);

const boton5 = document.getElementById('idBoton5');
boton5.addEventListener('click',eventoBoton5);

function eventoBoton1(){
    alert("agregaste el producto 1 al carrito");
}
function eventoBoton2(){
    alert("agregaste el producto 2 al carrito");
}
function eventoBoton3(){
    alert("agregaste el producto 3 al carrito");
}
function eventoBoton4(){
    alert("agregaste el producto 4 al carrito");
}
function eventoBoton5(){
    alert("agregaste el producto 5 al carrito");
}


// Array de los productos

const productos = [
    {
        id: '01',
        arma: 'Pistola',
        tipo: 'USP',
        skin: 'Cortex',
        precio: 200,
        cantidad: 12,
    },
    {
        id: '02',
        arma: 'Pistola',
        tipo: 'Glock',
        skin: 'Fade',
        precio: 200,
        cantidad: 5,
    },
    {
        id: '03',
        arma: 'Pistola',
        tipo: 'Dual-Berettas',
        skin: 'Aladas',
        precio: 300,
        cantidad: 15,
    },
    {
        id: '04',
        arma: 'Rifle',
        tipo: 'AK-47',
        skin: 'Elite',
        precio: 2700,
        cantidad: 2,
    },
    {
        id: '05',
        arma: 'Sub-fusil',
        tipo: 'UMP',
        skin: 'Cortex',
        precio: 1200,
        cantidad: 8,
    }
]

const carrito = [];

// Capto los elementos desde el html

const divProductos = document.querySelector('.productos')

productos.forEach(element => {
    let card = document.createElement('div');
    card.className = 'col mb-5'
    console.log(card);

    card.innerHTML = `
    <div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${element.arma} ${element.tipo}</h5>
            <!-- Skin -->
            <p>Tipo: ${element.skin}</p>
            <!-- Product price-->
            <p>Precio: $${element.precio}</p>
            <!-- Cantidad -->
            <p>Stock: ${element.cantidad}</p>
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ver detalle</a></div>
        <button>Agregar al carrito</button>
    </div>
    </div>`

    divProductos.appendChild(card)
})