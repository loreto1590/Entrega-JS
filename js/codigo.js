const nombre = document.getElementById("nombreInput");
const apellido = document.getElementById("apellidoInput");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
console.log(usuarios);

const agregarUsuario = () => {
  const usuario = {
    id: crypto.randomUUID(),
    nombre: nombre.value,
    apellido: apellido.value,
  };

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));    

  console.log(usuario);
  console.log(JSON.stringify());
};
