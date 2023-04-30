import express from 'express'
import { response } from 'express'
import fs from 'fs'

import { v4 as uuidv4 } from "uuid"


const app = express()

app.use(express.json())




const DataBase = {
    file: './data1.json',
    read(){
        return JSON.parse(fs.readFileSync(this.file))
    },
    save(db){
        fs.writeFileSync(this.file, JSON.stringify(db))
    }
}



app.post('/create', (request, response) => {

    const users = DataBase.read()
    const {name, lastname, edad}= request.body

    const id= uuidv4()

    console.log({name, lastname, id})

    users.push({name, lastname, id, edad})

    DataBase.save(users)

    response.json({

        msg: "creado nuevibno"

    })

})


app.get('/mostrar', (request, response) => {

    response.send('id')

})




app.listen(4000, () => {
    console.log('server listening at port 4000')
})




app.get('/mostrar/:id',(request, response) =>{
    const users = DataBase.read()

    const id = request.params.id;
    let userFound=null;

    users.forEach(user => {
        if(user.id === id) userFound = user
    })
    if (userFound){
        return response.status(200).json(userFound)
    } else {
        response.status(404).json ({error:"Usuario no encontrado"});
    }

})

app.put('/actualizar/:id', (request, response) => {
    const users = DataBase.read();
    const id = request.params.id;
    let userFound = false;

    users.forEach(user => {
        if (user.id === id) {
            user.name = "upa";
            user.lastname = "secambia";
            user.edad = '23';
            userFound = true;
        }
    });

    if (userFound) {
        DataBase.save(users);
        response.status(200).json({ message: 'Usuario actualizado correctamente' });
    } else {
        response.status(404).json({ error: 'No se encontro el usuario' });
    }
});

