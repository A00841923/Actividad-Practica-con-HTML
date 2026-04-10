const btnLogin = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

btnLogin.addEventListener("click", validarLogin);

// Función para validar el login del usuario
async function validarLogin(){
    const credentials = {username:username.value, password:password.value};
    const res = await fetch("http://localhost:7000/login", {
        method:"POST", 
        headers:{"content-type":"application/json"}, 
        body:JSON.stringify(credentials)
    });

    const data = await res.json();
    console.log(data);

    if(data.isLogin == true){
        window.location = "./menu.html";
        sessionStorage.setItem("id", data.user.user_id);
    }else{
        alert("Credenciales incorrectas");
    }
}

// Agregar evento para que al presionar Enter también se valide el login
password.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        validarLogin();
    }
})