let usuarios = [
    { correo: "admin@petmarket.com", contrasena: "admin123" },
    { correo: "cliente1@petmarket.com", contrasena: "cliente123" },
    { correo: "michi@petmarket.com", contrasena: "gato123" },
    { correo: "perrito@petmarket.com", contrasena: "doggo123" },
    { correo: "juan@example.com", contrasena: "juan123" }
];

let cantidadClientes = document.getElementById("cantidadClientes");
if (cantidadClientes) {
    cantidadClientes.innerText = usuarios.length;
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
        <td class=text-center>
          <button class="btn btn-warning btn-sm me-1" onclick="editarCliente(${index})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarUsuario(${index})">Eliminar</button>
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

function editarCliente(index) {
    const usuario = usuarios[index];
    indexEditando = index;

    document.getElementById("edit-correo").value = usuario.correo;
    document.getElementById("edit-contrasena").value = usuario.contrasena;
    
    const modal = new bootstrap.Modal(document.getElementById("modalEditarCliente"));
    modal.show();
}


document.getElementById("form-editar-cliente").addEventListener("submit", function (e) {
    e.preventDefault();

    const correo = document.getElementById("edit-correo").value.trim();
    const contrasena = document.getElementById("edit-contrasena").value.trim();


    if (!correo || !contrasena) {
        alert("Por favor completa todos los campos.");
        return;
    }

    usuarios[indexEditando] = { correo, contrasena };
    renderTabla();

    const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarCliente'));
    modal.hide();
});

function eliminarUsuario(id) {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
        usuarios.splice(id - 1, 1);
        usuarios.forEach((u, i) => u.id = i + 1);
        renderTabla();
    }
}

renderTabla();


