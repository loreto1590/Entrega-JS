const nombre = document.getElementById("nombreInput");
const apellido = document.getElementById("apellidoInput");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");
const btnEditar = document.getElementById("btnEditar");
const btnAgregar = document.getElementById("btnAgregar")

const agregarUsuario = () => {
  const usuario = {
    id: crypto.randomUUID(),
    nombre: nombre.value,
    apellido: apellido.value,
  };

  usuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios();
};

const mostrarUsuarios = () => {
  cuerpoTabla.innerHTML = "";
  usuarios.forEach((usuario) => {
    cuerpoTabla.innerHTML += `<tr>
        <th scope="row">${usuario.id}</th>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>
        <button
          type="button"
          class="btn btn-danger"
          onclick="eliminarUusario('${usuario.id}')"
        >
          Eliminar
        </button><td>
        <td>
        <button
          type="button"
          class="btn btn-warning"
          onclick="editarUusuario ('${usuario.id}')"
        >
          Editar
        </button><td>
  
    </tr>`;
  });
};

const eliminarUusario = (id) => {
  console.log(id);
  const usuario = usuarios.find((usuario) => usuario.id === id);
  const index = usuarios.indexOf(usuario);
  usuarios.splice(index, 1);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios();
};

const editarUusuario = (id) => {
  btnAgregar.style.display = "none";
  btnEditar.style.display = "inline";
const usuario = usuarios.find((usuario) => usuario.id === id )
nombre.value = usuario.nombre;
apellido.value = usuario.apellido;
}

const confirmarEdicion = () => {
  console.log("Información actualizada")
}

window.addEventListener("load", mostrarUsuarios);
