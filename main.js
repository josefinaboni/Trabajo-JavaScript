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
function Proyecto() {
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
  localStorage.setItem('productos', JSON.stringify(productos))
  let carritoLocalStorage = JSON.parse(localStorage.getItem("productos"));
  if (carritoLocalStorage) {
    carrito = carritoLocalStorage;
  } else {
    productos = [];
  }
 
 
}
