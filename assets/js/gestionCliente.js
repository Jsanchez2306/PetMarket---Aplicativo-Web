let usuarios = [
    { correo: "admin@petmarket.com", contrasena: "admin123" },
    { correo: "cliente1@petmarket.com", contrasena: "cliente123" },
    { correo: "michi@petmarket.com", contrasena: "gato123" },
    { correo: "perrito@petmarket.com", contrasena: "doggo123" },
    { correo: "juan@example.com", contrasena: "juan123" }
];

let cantidadClientes = document.getElementById("cantidadClientes");
if (cantidadClientes) {
    cantidadClientes.innerText=usuarios.length;
}


let boto = document.getElementById("registro")
if (boto) {
    boto.addEventListener("click", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const passwordVerify = document.getElementById("passwordVerify").value;
        const condiciones = document.getElementById("condiciones").checked;


        if (!email || !password || !passwordVerify) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (password !== passwordVerify) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (!condiciones) {
            alert("Debes aceptar los términos y condiciones.");
            return;
        }

        const nuevoUsuario = {
            correo: email,
            contraseña: password
        };


        usuarios.push(nuevoUsuario);

        console.log("Usuarios registrados:", usuarios);
        alert("Usuario registrado exitosamente ✅");


        document.querySelector(".formulario").reset();
    });

}


const tbody = document.getElementById("tablaUsuarios");


function renderTabla() {
    tbody.innerHTML = "";


    usuarios.forEach((usuario, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
        <td>${index + 1}</td>
        <td><input type="text" class="form-control" value="${usuario.correo}" disabled></td>
        <td><input type="password" class="form-control" value="${usuario.contrasena}" disabled></td>
        <td>
          <button class="btn btn-warning btn-sm me-1" onclick="editarUsuario(${usuario.id})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
        </td>
      `;

        tbody.appendChild(fila);
    });
}



const form = document.getElementById("formAgregar");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const correo = document.getElementById("correoNuevo").value.trim();
        const contrasena = document.getElementById("contrasenaNueva").value;

        if (correo && contrasena) {
            usuarios.push({ correo, contrasena });

            console.log("Usuarios registrados:", usuarios);

            alert("Usuario registrado exitosamente ✅");
            renderTabla();
            this.reset();
        }
    });
}

function editarUsuario(id) {
    const fila = tbody.querySelectorAll("tr")[id - 1];
    const inputs = fila.querySelectorAll("input");

    const estaEditando = inputs[0].disabled === false;

    if (estaEditando) {

        usuarios[id - 1].correo = inputs[0].value;
        usuarios[id - 1].contrasena = inputs[1].value;
        inputs.forEach(input => input.disabled = true);
    } else {

        inputs.forEach(input => input.disabled = false);
    }
}

function eliminarUsuario(id) {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
        usuarios.splice(id - 1, 1);
        usuarios.forEach((u, i) => u.id = i + 1);
        renderTabla();
    }
}

renderTabla();


