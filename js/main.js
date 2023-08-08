
function Data() {
  const contenedorProductos = document.querySelector("#contenedorProductos"); //este es el contenedor de todos los prodcutos
  console.log(contenedorProductos);
  function obtenerProductos() {
    return new Promise((resolve, reject) => {
      const num = Math.random();

      setTimeout(() => {
        if (num > 0.1) {
          resolve(productos);
        } else {
          reject("Ha ocurrido un error");
        }
      }, 2000);
    });
  }

  let spinner = document.getElementById("spinner");

  spinner.style.display = "block";
  obtenerProductos()
    .then((productos) => {
      spinner.style.display = "none";

      const mostrarProductos = (data) => {
        data.forEach((producto) => {
          const cardProducto = document.createElement("div"); //contenedor de cada uno de loss productos
          cardProducto.setAttribute("id", "tarjeta-Producto"); //le doy atributos para despues trabajarlo con css
          cardProducto.innerHTML = ` 
      <img  class= "prod-img img" src="${producto?.img}" alt="${producto?.nombre}" />
      <div class= "prod-description imagenes col-lg-6 col-md12 col-sm-12">
          <h5 class="nombre"> ${producto?.nombre} </h5>
          <h3> ${producto?.precio} </h3>
        <button id = "${producto?.id}" class = "boton"> AGREGAR AL CARRITO </button>
      </div>
      `;
          contenedorProductos.style.padding = "20px";
          contenedorProductos.style.margin = "15px";
          contenedorProductos.appendChild(cardProducto);
        });
      };
      mostrarProductos(productos);

  const carrito = [];
  let botones = document.getElementsByClassName("boton");
  for (const boton of botones) {
    boton.onclick = (e) => {
      let productoSeleccionado = productos.find(
        (producto) => producto.id === parseInt(e.target.id)
      );
      swal({
        title: "Desea agregar el producto al carrito?",

        text: `${productoSeleccionado.nombre}, precio: ${productoSeleccionado.precio}`,
        buttons: ["Cancelar", "Aceptar"],
      }).then((respuesta) => {
        if (respuesta) {
          carrito.push({
            id: productoSeleccionado.id,
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
          });

          console.log(carrito);
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
      });
    };
  }

  let contenedorBotonFinalizar = document.getElementById(
    "contenedorBotonFinalizar"
  );
  let botonFinalizar = document.createElement("button");
  botonFinalizar.innerText = "Finalizar compra";
  contenedorBotonFinalizar.appendChild(botonFinalizar);
  botonFinalizar.onclick = () => {
    swal({
      title: "Desea confirmar la compra?",

      text: `${carrito
        .map((p) => `Producto: ${p.nombre}, Precio: ${p.precio}`)
        .join("\n")}`,

      buttons: ["Cancelar", "Aceptar"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({
          title: "Tu compra ha sido exitosa!",
        });
      }
    });
    
  };
  let contenedorBotonVerCarrito = document.getElementById(
    "contenedorBotonVerCarrito"
  );
  let botonVerCarrito = document.createElement("button");
  botonVerCarrito.innerText = "Ver Carrito";
  contenedorBotonVerCarrito.appendChild(botonVerCarrito);

  botonVerCarrito.onclick = () => {
    const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    console.log(carritoLocalStorage);

    swal({
      title: "Su carrito",

      text: `${carritoLocalStorage
        .map((p) => `Producto: ${p.nombre}, Precio: ${p.precio}`)
        .join("\n")}`,
      buttons: ["Cancelar", "Aceptar"],
    });
    const nombreProductos = carritoLocalStorage.map(
      (producto) => producto.nombre
    );
    console.log(nombreProductos);
  };
    })
    .catch((error) => {
      spinner.style.display = "none";

      alert(error);
    });
}
Data();