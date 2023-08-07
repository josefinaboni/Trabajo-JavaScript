let contenedorOpiniones = document.getElementById(
    "contenedorOpiniones"
  );
  let botonVerOpiniones = document.createElement("button");
  botonVerOpiniones.innerText = "Ver opiniones de pacientes";
  contenedorOpiniones .appendChild(botonVerOpiniones);
  
  let contenedorCerrarOpiniones = document.getElementById(
    "contenedorCerrarOpiniones"
  );
  let botonCerrarOpiniones = document.createElement("button");
  botonCerrarOpiniones.innerText = "Cerrar opiniones de pacientes";
  contenedorCerrarOpiniones .appendChild(botonCerrarOpiniones);
  
  botonVerOpiniones.onclick = () => {
    async function obtenerComentarios() {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    
        const data = await response.json();
    
        return data;
      }
    
      async function mostrarComentarios() {
        const fotos = await obtenerComentarios();
    
        for (const post of fotos) {
          let contenedorCardsOpiniones= document.getElementById("contenedorCardsOpiniones")
          let contenedor = document.createElement("div");
    
          contenedor.innerHTML = `
      
              <h4>${post.name}</h4>
            
              <p>${post.email}</p>
              <h3>${post.body}</h3>
      
            `;
    
          contenedor.className = "imagenes d-flex justify-content-center";
    
          contenedor.style.width = "18rem";
    
          contenedorCardsOpiniones.appendChild(contenedor);
        }
      }
    
      mostrarComentarios();
  };

  botonCerrarOpiniones.onclick = () => {
    mostrarComentarios().style.display = "none";
  };
  