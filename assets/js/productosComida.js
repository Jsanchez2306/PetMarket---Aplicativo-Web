document.addEventListener("DOMContentLoaded", () => {
    // Array compartido de productos
    let productos = [
        {
            imagen: "assets/Imagenes/pedigree.webp",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna.",
            precio: 15000
        },
        {
            imagen: "assets/Imagenes/pedigree.webp",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna.",
            precio: 15000
        },
        {
            imagen: "assets/Imagenes/pedigree.webp",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna.",
            precio: 15000
        }
        ,
        {
            imagen: "assets/Imagenes/pedigree.webp",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna.",
            precio: 15000
        },
        {
            imagen: "assets/Imagenes/pedigree.webp",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna.",
            precio: 15000
        },
        {
            imagen: "assets/Imagenes/pedigree.webp",
            titulo: "Collar Reflectante",
            descripcion: "Collar ajustable con tira reflectante para mayor seguridad nocturna.",
            precio: 15000
        }
    ];


    const contenedor = document.getElementById("productosContainer");

    if (contenedor) {
        productos.forEach(producto => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
                <div class="card h-100 shadow">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.titulo}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text"> Precio: $${producto.precio}</p>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            `;
            contenedor.appendChild(card);
        });
    }
});
