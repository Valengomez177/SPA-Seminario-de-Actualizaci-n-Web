/* export const Card = (options) => {
    let {id, name, image, status, species} = options

    let div = document.createElement('div')
    div.setAttribute('class', 'card')
    div.style.width = '18rem'
    div.innerHTML = `<img src=${image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${species}</p>
                        <a href="#" id=${id} class="btn btn-primary">Ver más</a>
                    </div>`
    return div

} */

export const Card = (options) => {
    let {name, image, species, id} = options

    let div = document.createElement('div')
    div.setAttribute('class', 'card')
    div.style.width = '18rem'
    document.addEventListener("click", (event) => {
        //console.log(event.target.className)
        if(event.target.className == 'btn btn-primary') {
            localStorage.setItem("id", event.target.id)
        }
    })
    div.innerHTML = `
                    <img src=${image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${species}</p>
                        <a href="#" id=${id} class="btn btn-primary">Ver más</a>
                    </div>
                    `
    return div 
}