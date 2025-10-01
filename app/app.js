import { Header } from "./components/Header.js"
import { Main } from "./components/Main.js"
import { Router } from "./components/Router.js"
import { Search } from "./components/Search.js"


export const app = () => {
    let divRoot = document.querySelector('#root')
    // divRoot.innerHTML = `<h1>Nuestra web SPA</h1>`;
    divRoot.innerHTML = `<h1>Nuestra web SPA</h1>`
    divRoot.append(Header())
    divRoot.append(Search())
    divRoot.append(Main())

    Router()
}