import axios from 'axios'
//Tener en cuenta que todos se ejecutan utilizando "npm run test" en la terminal, recomiendo ir probando comentando todos menos el que quiera utilizar :p
axios.post('http://localhost:4000/create', { //Crear usuario
    id: '1', 
    name: 'Sebastian', 
    lastname: 'Britez', 
    edad:'23'})
.then((respuesta)=>{
    console.log(respuesta.data)
})

/*axios.get('http://localhost:4000/mostrar/869b00f0-8bc0-4cb6-9791-753c8d7cb131').then(resp => { //Mostrar el id pedido, ej: "/mostrar/(id que quiere buscar)"
    console.log('usuario: ', resp.data)
}).catch(error => {
    if(error && error.response && error.response.data){
        console.log('usuario error: ', error.response.data)
    }
    console.log('error general: ', error)
})


axios.put('http://localhost:4000/actualizar/869b00f0-8bc0-4cb6-9791-753c8d7cb131').then(resp => {  //Actualizar id, ej: "/mostrar/(id que quiere buscar)

    console.log('usuario: ', resp.data)
}).catch(error => {
    if(error && error.response && error.response.data){
        console.log('usuario error: ', error.response.data)
    }
    console.log('error general: ', error)

})
*/
