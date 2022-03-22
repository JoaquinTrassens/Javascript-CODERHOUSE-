// Desafio complementario de DOM por TRASSENS JOAQUIN ELIAS

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
            <p>tipo: ${element.skin}</p>
            <!-- Product price-->
            <p>${element.precio}</p>
            <!-- Cantidad -->
            <p>${element.cantidad}</p>
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
    </div>
    </div>`

    divProductos.appendChild(card)
})