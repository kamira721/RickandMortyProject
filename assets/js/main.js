import DetallesPersonajes from './detallesPersonajes.js';


let llamadoPersonajes = (()=>{

    let cantidad = document.getElementById('cantidadPersonajes');
    let resultados = document.querySelector('.resultados');
    let datosT;
    let url = "https://rickandmortyapi.com/api/character/";

    let getRick = async ()=> {
        try {
            let respuesta = await fetch(url);
            datosT = await respuesta.json();
            datosT = datosT.results;
            return datosT;
        } catch (error) {   
            console.error(error);
        }   
    };

    let personsId = async (id)=> {
        try {
            let respuesta = await fetch(`${url}/${id}`);
            let infoPersonaj = await respuesta.json();
            
            let usuarios = new DetallesPersonajes(infoPersonaj.id, infoPersonaj.name, infoPersonaj.species);
            let detalleIdPersonaje = document.querySelector(`#char-${infoPersonaj.id}`);
        
            let detalleCharacter = `
                ${usuarios.infoGeneral()}
                     `;
                console.log(detalleCharacter);
            detalleIdPersonaje.innerHTML = detalleCharacter;

        } catch (error) {   
            console.error(error);
        }   
    };

    return {
        mostrarRick: async () => {
            let valores = await getRick();
            console.log(valores);
            valores.forEach((element) => {
                resultados.innerHTML += `
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="bloque">
                            <img src="${element.image}" alt="${element.id}"> 
                            <div id="char-${element.id}" class="d-inline-block">
                                ${personsId(element.id)}
                            </div>
                        </div>
                    </div>
                    
                `;
              
            });
        },

        eliminarSpiner: () => {
            let spiner = document.querySelector('.spinner-border');
            spiner.style.display = "none";
            cantidad.innerHTML = `${datosT.length}`;
        }
    }
})();

console.log(llamadoPersonajes);

llamadoPersonajes.mostrarRick();

setTimeout(()=>{
    llamadoPersonajes.eliminarSpiner();
},1000);