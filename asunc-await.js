


const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Chirstopher'
    },
    {
        id: 3,
        nombre: 'Emma'
    },

];
const salarios = [
    {
        id: 1,
        salario: '1000'
    },
    {
        id: 2,
        salario: '150000000'
    },
  
];
// promesas 

const getEmpleado = (id) => {

   return new Promise ( ( resolve, reject)=> {
            const empleado = empleados.find(e => e.id === id)?.nombre;

            (empleado)
            ? resolve (empleado)
            : reject(`No existe empleado con id ${id}`);
    });
}
    const getSalario = (id)=>{
        return new Promise ( ( resolve, reject)=> {
            const salario = salarios.find(s => s.id === id)?.salario;

            (salario)
            ? resolve (salario)
            : reject(`el salario con id ${id} no existe` );
    });

}
// el await solo es valido dentro de una funcion asincrona.

    const getInfoUsuario = async()=>{
        try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;
        }catch(error){
            throw error;
        }
    }
    const id = 3;
        getInfoUsuario(id)
        .then(msg => {
            console.log('TODO BIEN!')
            console.log(msg)}
        )
        .catch (err => {
            console.log('TODO MAL!')
            console.log(err)}
        );





