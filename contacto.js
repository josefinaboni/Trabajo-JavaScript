const miFormulario = document.getElementById("formulario")
const nombre = document.getElementById('nombredepaciente')
const edad = document.getElementById('edad')
const nombreAdulto = document.getElementById('nombredeladultoresponsasble')
const email = document.getElementById('emailInput')

miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let usuario={
        nombre:nombre.value,
        edad: edad.value,
        nombreAdulto: nombreAdulto.value,
        email: email.value
    }
    localStorage.setItem('usuario', JSON.stringify(usuario))
})


