//PRRIMER PRE ENTREGA
/*function carrito () {
    let suma = 0;
    let producto = prompt ("Ingrese el nombre del producto");
    while (producto !== "esc") {
    let precio = prompt ("Ingrese el precio del producto");
    console.log (producto + ": " + "$ " +precio);
    suma =suma + parseInt(precio);
    producto = prompt ("Ingrese el nombre del producto");
    }
    console.log("El total de su compra es: $" + suma)
    }
    carrito ()*/
//SEGUNDA PRE ENTREGA
/*function Proyecto() {
  const productos = [];
  let limite = 3;
  class Producto {
    constructor(nombre, precio, stock) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
    precioConIva() {
      return this.precio * 1.21;
    }
  }

  for (let i = 0; i < limite; i++) {
    let entrada1 = prompt("Ingrese el nombre del producto");
    let entrada2 = parseInt(prompt("Ingrese el precio del producto"));
    let entrada3 = prompt(
      "Ingrese si en el caso de que haya stock, y no en el caso contario"
    );

    let lista = new Producto(entrada1, entrada2, entrada3);
    productos.push(lista);
  }
  for (const producto of productos) {
    console.log(
      "Producto: " + producto.nombre + ". Precio: " + producto.precio
    );
    console.log(
      "Producto: " +
        producto.nombre +
        ". Precio con IVA: " +
        producto.precioConIva()
    );
  }
  const stock = productos.filter((el) => el.stock === "si");
  console.log("Los productos en stock son: ", stock);

  //TERCERA PRE ENTREGA
  let botonSumar = document.getElementById("carrito");
  let botonResta = document.getElementById("carritoQuitar");
  botonSumar.onclick = () => {
    let numero = document.getElementById("contador");
    let resultado = parseInt(numero.innerHTML) + 1; //especifico que es un valor que esta en el HTML
    numero.innerHTML = resultado; //le doy un nuevo valor a la variable numero
  };
  botonResta.onclick = () => {
    let numero = document.getElementById("contador");
    let resultado = parseInt(numero.innerHTML) - 1; //especifico que es un valor que esta en el HTML
    numero.innerHTML = resultado; //le doy un nuevo valor a la variable numero
  };
  localStorage.setItem("productos", JSON.stringify(productos));
  let carritoLocalStorage = JSON.parse(localStorage.getItem("productos"));
  if (carritoLocalStorage) {
    carrito = carritoLocalStorage;
  } else {
    productos = [];
  }
}*/

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
      <img  class= "prod-img" src="${producto?.img}" alt="${producto?.nombre}" style = "width:75px"/>
      <div class= "prod-description">
          <h5> ${producto?.nombre} </h5>
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
    })
    .catch((error) => {
      spinner.style.display = "none";

      alert(error);
    });

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
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
}
Data();
