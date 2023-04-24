
// en cierto momento del tiempo
// setTimeout(() => {
//         console.log('Hola pepito Perez');

// },400);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Asly'
    }
    setTimeout(()=> {
        callback(usuario)
    }, 1500)

}
getUsuarioByID(24, (usuario)=> {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});