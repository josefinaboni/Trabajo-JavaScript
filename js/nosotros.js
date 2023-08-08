let contenedorOpiniones = document.getElementById(
    "contenedorOpiniones"
  );
  let botonVerOpiniones = document.createElement("button");
  botonVerOpiniones.innerText = "Ver opiniones de pacientes";
  contenedorOpiniones .appendChild(botonVerOpiniones);
  

 

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
    
          contenedor.className = " card p-2 m-2 col-sm-12 col-md-4 ";
    
          contenedor.style.width = "18rem";
    
          contenedorCardsOpiniones.appendChild(contenedor);
        }
      }
    
      mostrarComentarios();
      let deslizar =document.getElementById ("deslice");
      deslizar.innerText="Deslizar hacia la derecha";
      deslizar.className = "d-flex justify-content-center resaltadoDos";
      
  };
