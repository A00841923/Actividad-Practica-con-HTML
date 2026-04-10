window.onload = () => {
    const id = sessionStorage.getItem("id");
    console.log("ID:", id);

    if(!id){
        window.location = "./index.html";
    }else{
        cargarUsuario();
    }
};

// Función para cargar y mostrar los datos del usuario actual en la página de perfil :)
async function cargarUsuario() {
    const id = sessionStorage.getItem("id");

    const res = await fetch(`http://localhost:7000/users/${id}`);
    const data = await res.json();

    const user = data[0]; 
    
    document.getElementById("first_name").textContent = user.first_name;
    document.getElementById("last_name").textContent = user.last_name;
    document.getElementById("birthdate").textContent = new Date(user.birthdate).toLocaleDateString();
    document.getElementById("username").textContent = user.username;
    document.getElementById("email").textContent = user.email;
}