import { ajax } from "../helper/ajax.js"
import api from "../helper/url.js"
import { Card } from "./Card.js"
import { ContainerCard } from "./ContainerCard.js"

export const Router = () => {
    let {hash} = location
    console.log(hash)
    const section = document.querySelector('#section')
    section.innerHTML = ''
    // Limpia el contenido antes de agregar nuevo

    if(hash == " " || hash == '#/'){
        ajax ({
            url: api.TODOS,
            callback: (data) => document.querySelector('#section').append(ContainerCard(data))
        })
    }
    else if (hash == "#/buscador") {
        document.querySelector("#section").innerHTML = `<h2>Seccion de Buscador</h2>`
        let inputBuscador = document.querySelector('#buscador')
        inputBuscador.style.display = "block"

        inputBuscador.addEventListener("change", (event) => {
            console.log(event.target.value)
            let namebusqueda = event.target.value
            ajax({
                url:api.SEARCHNAME+namebusqueda,
                callback: (data) => { 
                    document.querySelector('#section').append(ContainerCard(data))
                    section.innerHTML = "" //Limpia el contenido antes de agregar
                    section.append(ContainerCard(data))
                }
                    
            
                })
            
        })
    }
    else if(hash == "#/contacto"){
        section.innerHTML = `<h2>Sección de contactos</h2>`
    }
    else{
        //console.log(api.SEARCHID+localStorage.getItem('id'))
        ajax({
            url:api.SEARCHID+localStorage.getItem('id'),
            callback: (data) => {
                document.querySelector('#section').append(Card(data))
                section.innerHTML = "" // Limpia el contenido antes de agregar nuevo
                section.append(Card(data))
            }
        })
    }
}


