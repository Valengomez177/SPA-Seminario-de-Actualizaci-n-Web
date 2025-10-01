import { Card } from "./Card.js";

export const ContainerCard = (options) => {
    let { results } = options;
    let div = document.createElement('div');

    results.map((el) => div.append(Card(el))); // Por cada elemento del array results, me va a crear una card y la va a agregar al div
    //map es un metodo de los arrays que recorre todo el array y por cada elemento ejecuta una funcion
    return div;
}