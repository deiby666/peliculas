const buscar = document.querySelector("#buscar")

document.addEventListener("DOMContentLoaded", ()=>{
    let valor = ""
    buscar.addEventListener("input", (e) =>{
        valor = e.target.value
        obtenerApi(valor)
   })

   obtenerApi(valor)
})



function obtenerApi(valor){
    let url = ""
    if(valor == ""){
         url = `http://www.omdbapi.com/?apikey=15fdf9b0&s=batman`
    }else{
         url = `http://www.omdbapi.com/?apikey=15fdf9b0&s=${valor}`
    }

    fetch(url)
    .then(todo =>{
        return todo.json()
    }).then(datos =>{
        injectHtml(datos.Search)
    })
}

function injectHtml(datos){

    limpiarHtml()
    const peliculas = document.querySelector(".peliculas")
    peliculas.classList.add("peliculas")

    datos.forEach(dato => {
        peliculas.innerHTML += `
        <div class="tarjeta">
        <img src="${dato.Poster}" alt="">
        <h2>${dato.Title}</h2>
        <p>Danisson</p>
        <p>2023</p>
        </div>
        `
    });


}

function limpiarHtml(){
        const peliculas = document.querySelector(".peliculas")
        peliculas.innerHTML = ""
}