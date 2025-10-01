export const ajax = (options) => {
    let {url, callback} = options

    fetch(url)
    .then(res => res.json())
    .then(data => callback(data))
}