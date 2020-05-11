const areaPaises = document.getElementById("mostrarpaises"); //Traigo a mi js el elemento html a traves del DOM

const buscarPaises = () => {                           //creo una arrow function para consumir mi API dentro de un scope pequeño
    fetch("https://restcountries.eu/rest/v2/all")      //utilizo el metodo fetch para consumir una API publica
    .then(response => response.json())                 //primera promesa. Le digo que mis datos de la API los necesito en formato json
    .then(datos => {                                   //segunda promesa. la informacion de la Api ya en formato json le dire que hacer con ella.
        datos.map(pais => {                //Utilizo .map para decirle que hacer con cada elemento dentro del json por medio de la arrowfunction.
            areaPaises.innerHTML +=  //Aqui voy a insertar un template string por medio del metodo .innerHTML en el elemento html traido previamente.
            `                        
            
            <div>
                <img class="bandera" src="${pais.flag}" style="width: 400px" >
                <h1> ${pais.name} </h1>
                <p><b>Region: </b>${pais.region}</p>
                <p${pais.capital}</p>
                <p${pais.subregion}</p>
                <ul>
                    <li>Español: "${pais.translations.es}</li>
                    <li>Alemán: "${pais.translations.de}</li>
                    <li>Japonés: "${pais.translations.ja}</li>
                </ul>
                <p style="display:inline-block">Border:  ${pais.borders.map(border => {
                    return `
                           <p style="display:inline-block">${border}</p>
                           `;
                })}</p>
            </div>
            <hr>
            
            `;   //Aqui creé la estructura html donde se va a insertar mi informacion.
        })       //En un template string se utilizo la funcion .map para un elemento array y poder separar cada elemento creado un 
    })           // template string por cada elemento del array
}
buscarPaises();

/* DUDAS */
//que diferencia hay entre .map y .forEach
//Segun busqué el .map se utiliza para array, quiere decir que el objeto json puede ser tratado como un array? porque no me funcionó
// el .lenght para un json.
//porque aun utilizando un arrow function en border =>, se utiliza el return si se supone ya viene implicito en las arrowfunctions?