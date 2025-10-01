export const Header = () => {
    let nav = document.createElement('nav');

    nav.innerHTML = `
        <a href="#/">Home</a>
        <a href="#/buscador">Buscador</a>
        <a href="#/contacto">Contacto</a>
    `
    return nav
}

// Una sitio no es una sola pagina, son varias.