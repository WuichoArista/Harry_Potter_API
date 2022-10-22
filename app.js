const renderizar = ( data ) => {
    let lugar = document.getElementById('lugar')
    let conteo = 0
    lugar.innerHTML=''
   data.forEach( (personaje) => {
    conteo++
    lugar.innerHTML += `
    <div class="tarjeta">
        <div class="contenedor_imagen">
            <img class="imagen" src="${ personaje.image === '' ? 'http://pm1.narvii.com/7043/9c916ad7fbf6a9abb16bbac8082ff7e2fb6fa058r1-635-783v2_uhq.jpg' : personaje.image }" alt="">
        </div>
        <h2 class="titulo">${personaje.name}</h2>
        <h3 class ="varita">Madera de varita: ${ personaje.wand.wood === '' ? 'Desconocido' : personaje.wand.wood }</h3>
        <h3 class ="varita">Nucleo de varita: ${ personaje.wand.core === '' ? 'Desconocido' : personaje.wand.core }</h3>
        <h2 class ="varita">patronus: ${ personaje.patronus === '' ? 'Desconocido' : personaje.patronus }</h2>
        <p class="id">id: ${conteo}</p>
    </div>
    `
   })
}

const cargar =  () => {
    
    let seleccion = document.getElementById('seleccionador')
   

    const mostrar = async () => {
        let url = 'https://hp-api.herokuapp.com/api/characters'
        if(seleccion.value === 'Estudiantes'){
            url = 'https://hp-api.herokuapp.com/api/characters/students'
        } else if( seleccion.value === 'ravenclaw' ){
            url = 'https://hp-api.herokuapp.com/api/characters/house/ravenclaw'
         
        } else if ( seleccion.value === 'Maestros') {
            url = 'https://hp-api.herokuapp.com/api/characters/staff'
          
        } else if ( seleccion.value === 'gryffindor') {
            url = 'https://hp-api.herokuapp.com/api/characters/house/gryffindor'
          
        } else if (seleccion.value === 'slytherin'){
            url = 'https://hp-api.herokuapp.com/api/characters/house/slytherin'
            
        } else if(seleccion.value === 'hufflepuff') {
            url = 'https://hp-api.herokuapp.com/api/characters/house/hufflepuff'
            
        }

        const Api = await fetch(url)
                            .then( (response) => response.json())
                            .then( (data) => {
                                    renderizar(data)
                                
                            }) 
    }
    mostrar()
    seleccion.addEventListener( 'change' , mostrar)
}

cargar()

