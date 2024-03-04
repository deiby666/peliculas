const select = document.querySelector('#select')

document.addEventListener('DOMContentLoaded', getData)
function getData (){

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((categories) => {

        return categories.json()

    })
    .then((data) => {
        inyectar(data.categories)
        select.addEventListener('input', (e) => {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.value}`)
            .then(todo =>{
                console.log(todo)
                return todo.json()
            })
            .then(datos =>{
                console.log(datos)
                console.log(datos.categories)
                inyectar2(datos.meals)
            })
    

    })
})
    
}


function inyectar(categoria){
    limpiar()
    const select = document.querySelector('#select')
    const peliculas = document.querySelector('.peliculas')

    categoria.forEach(elemento => {

        const {idCategory, strCategory, strCategoryThumb} = categoria

        optionAdd = document.createElement('option')
        optionAdd.textContent = elemento.strCategory
        optionAdd.value = elemento.strCategory


        select.appendChild(optionAdd)

        imagen = document.createElement('img')
        parrafo = document.createElement('p')
        imagen.src = elemento.strCategoryThumb;
        parrafo.textContent = elemento.strCategory;

        cartica = document.createElement('div')
        cartica.classList.add('cartica')
        
        cartica.appendChild(imagen)
        cartica.insertBefore(parrafo, imagen)
        peliculas.appendChild(cartica)
        
    });
}


function inyectar2(categoria){
    limpiar()
    const select = document.querySelector('#select')
    const peliculas = document.querySelector('.peliculas')

    categoria.forEach(elemento => {

        const {idCategory, strCategory, strCategoryThumb} = categoria

        select.appendChild(optionAdd)

        imagen = document.createElement('img')
        parrafo = document.createElement('p')
        imagen.src = elemento.strMealThumb;
        parrafo.textContent = elemento.strCategory;

        cartica = document.createElement('div')
        cartica.classList.add('cartica')
        
        cartica.appendChild(imagen)
        cartica.insertBefore(parrafo, imagen)
        peliculas.appendChild(cartica)
        
    });
}


function limpiar(){

    const peliculas = document.querySelector('.peliculas')
    peliculas.innerHTML = `` 
}