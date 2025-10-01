// https://rickandmortyapi.com/documentation/#character

const TODOS = 'https://rickandmortyapi.com/api/character';
const SEARCHID = 'https://rickandmortyapi.com/api/character/'; // Le concatenas el id
const SEARCHNAME = 'https://rickandmortyapi.com/api/character/?name='; // Le concatenas el nombre

    export default{
        TODOS,
        SEARCHID,
        SEARCHNAME,
    }
// Ya tenemos las funciones que van a hacer la peticion
// y ya tenemos las rutas a las que vamos a consultar

// En la app.js vamos a ver si esta funcionando esta solicitud antes del cierre de la funcion colocamos ajax
// y vamos como solo nos importa ajax desde helpers