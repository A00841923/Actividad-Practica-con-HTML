const btnDaleClick = document.getElementById("btnLogin");
const username = document.getElementById("username");

btnDaleClick.addEventListener("click", evento)

function evento(){
    console.log(username.value)
    alert("Le diste click " + username.value)
}

// validar login y que cuando se presione enter tambien funcione
// mandar llamar con el clic al boton validar el login y con el enter tambien