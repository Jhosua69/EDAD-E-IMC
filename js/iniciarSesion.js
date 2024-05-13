function login() {
    let usuario = document.getElementById("u").value;
    let password = document.getElementById("p").value;
    let usr = "joani";
    let pass = "123456";
    let mensajeDiv = document.getElementById("mensaje");
    
    if (usuario === usr && password === pass) {
        mensajeDiv.innerText = "¡BIENVENIDO!";
        mensajeDiv.style.color = "green";
    } else {
        mensajeDiv.innerText = "Contraseña y Usuario Incorrecto";
        mensajeDiv.style.color = "red";
    }
    
    mensajeDiv.style.display = "block";
    
    // Limpiar los campos de usuario y contraseña
    document.getElementById("u").value = "";
    document.getElementById("p").value = "";
    
    return false;
}

