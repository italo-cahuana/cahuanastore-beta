// function miBoton (){
// const boton = document.getElementById('boton');

// boton.addEventListener('click', function() {
//     alert('¡Hiciste clic en el botón!');
// });
// }
// miBoton()

function ocultar (){
    const divs = document.querySelectorAll('.contenido');
    divs.forEach(div => div.style.display = 'none')
}

let mensajeServicio = "en adquirir una cuenta"
const inputOpccion = document.getElementById('opccionusuario');
inputOpccion.addEventListener('input', function(){
    const opcion = inputOpccion.value.toLowerCase();
                  
    const opcionesNetflix = ["netflix", "n", "ne", "net", "netf", "netfl", "netfli", "netflix "]
    const opcionesAmazon = ["amazon", "a", "am", "ama", "amaz", "amazo", "amazon "]
    const opcionesHbo = ["hbo", "h", "hb", "hbo "]
    const opcionesSpotify = ["spotify", "s", "sp", "spo", "spot", "spoti", "aspotif", "spotify "]
    const opcionesDisney = ["disney", "d", "di", "dis", "disn", "disne", "disney "]

if (opcionesNetflix.includes(opcion)){
    ocultar();
    document.querySelector('.netflix').style.display = 'block';
    mensajeServicio = "en el servicio de Netflix";
} 
else if (opcionesAmazon.includes(opcion)){
    ocultar();
    document.querySelector('.amazon').style.display = 'block';
    mensajeServicio = "en el servicio de Amazon"
} 
else if (opcionesHbo.includes(opcion)){
    ocultar();
    document.querySelector('.hbo').style.display = 'block';
    mensajeServicio = "en el servicio de HBO";
}
else if (opcionesSpotify.includes(opcion)){
    ocultar();
    document.querySelector('.spo').style.display = 'block';
    mensajeServicio = "en el servicio de Spotify";
} 
else if (opcionesDisney.includes(opcion)){
    ocultar();
    document.querySelector('.disney').style.display = 'block';
    mensajeServicio = "en el servicio de Disney";
}
else {
    const divs = document.querySelectorAll('.contenido');
    divs.forEach(div => div.style.display = 'block');
    //document.querySelector('.info').style.display = 'block';
    mensajeServicio = "en otra cuenta que no esta en la pagina web"
}
});

// Funciones para que  al hacer click en la imagen del servicio de streaming se abra wapp con ese nombre de streaming
document.getElementById('net-img').addEventListener('click', function () {
    mensajeServicio = "en el servicio de Netflix";
redirigirAWhatsApp();
});
document.getElementById('ama-img').addEventListener('click', function () {
    mensajeServicio = "en el servicio de Amazon";
redirigirAWhatsApp();
});
document.getElementById('hbo-img').addEventListener('click', function () {
    mensajeServicio = "en el servicio de HBO";
redirigirAWhatsApp();
});
document.getElementById('spo-img').addEventListener('click', function () {
    mensajeServicio = "en el servicio de Spotify";
redirigirAWhatsApp();
});
document.getElementById('dis-img').addEventListener('click', function () {
    mensajeServicio = "en el servicio de Disney";
redirigirAWhatsApp();
});

function redirigirAWhatsApp (){
    //redirige a wapp con esta funcion, (la funcion ya fue creada a arriba en el boton de wapp)
    //const servicioSeleccionado = servicio;       
    const mensaje = `Hola, estoy interesado ${mensajeServicio}. ¿Me puedes brindar más información?`;

    const urlWhatsApp = `https://wa.me/573042453303?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp);           
}

// funciones para redireccionar a las redes sociales si toca la imagen de ellas
function instagram (){
    const urlInstagram = 'https://instagram.com/cahuana__/';
    window.open(urlInstagram);    
}
function linkedin (){
    const urlLikendin = 'https://linkedin.com/in/angel-cahuana-17608b246/';
    window.open(urlLikendin);     
}

// Función para obtener los datos de Google Sheets usando la API
async function obtenerDatosDeGoogleSheets() {
const apiKey = 'AIzaSyDig51SHK4ciSnQkdqTeuN60r-8hNN3RdA'; // Reemplaza con tu clave de API
const sheetId = '13lbO-8p3H6c07iqVv5iZizrWyA7XlnS8sfOpCB1Pi0M'; // Reemplaza con el ID de tu hoja de cálculo
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

try {
    const response = await fetch(url); // Aquí se hace la solicitud HTTP a la API de Google Sheets usando fetch. La palabra clave await pausa la ejecución de la función hasta que la solicitud se complete.
    
    const data = await response.json(); // Una vez que se recibe la respuesta, se convierte a formato JSON.
    mostrarSaldos(data.values); //Finalmente, se llama a la función mostrarSaldos pasando los valores obtenidos de la hoja de cálculo.

} catch (error) {
    console.error("Error al obtener los datos:", error); // si no se obtienen los datos mandamos un msj de error, para eso es el "catch"
}
}

// Función para mostrar los saldos usando if-else, Esta función toma los datos obtenidos de la hoja de cálculo y los muestra en el DOM.
function mostrarSaldos(data) {

// Itera sobre cada fila de datos obtenidos de la hoja de cálculo. Cada fila es un array donde item[0] es el nombre del servicio y item[1] es el saldo disponible.
data.forEach(function (item) {

    // (se utiliza toLoweCase) para que cuando se compare con la hoja de calculo no sea sensible a las mayusculas
    const servicio = item[0].toLowerCase(); // Columna "Servicio"
    const saldo = item[1]; // Columna "Saldo"
    const precio = item[2]; // Columna "precio"

    // se compara la constante servicio que esta en la hoja de calculo con el de "netflix" si coinciden se ejecuta
    if (servicio === "netflix") {
        
        // se optiene el elemeto "saldo" y "precio" del div de netflix y se cambian por la constante saldo y precio que = equivalen a la columna saldo y precio en la hoja de calculo
        document.getElementById('saldo-netflix').textContent = saldo;
        document.getElementById("precio-netflix").textContent = precio
    } 
    else if (servicio === 'amazon prime') {
        document.getElementById('saldo-amazon').textContent = saldo;
        document.getElementById('precio-amazon').textContent = precio
    } 
    else if (servicio === 'hbo max') {
        document.getElementById('saldo-hbo').textContent = saldo;
        document.getElementById('precio-hbo').textContent = precio
    } 
    else if (servicio === 'spotify') {
        document.getElementById('saldo-spotify').textContent = saldo;
        document.getElementById('precio-spotify').textContent = precio
    } 
    else if (servicio === 'disney+') {
        document.getElementById('saldo-disney').textContent = saldo;
        document.getElementById('precio-disney').textContent = precio
    } 
    else {
        console.log("Servicio no reconocido:", servicio); //Si el servicio no coincide con ninguno de los anteriores, se muestra un mensaje en la consola indicando que el servicio no fue reconocido.
    }
});
}

// Inicializar la obtención de datos cuando la página cargue
window.onload = function () {
obtenerDatosDeGoogleSheets();
setInterval(obtenerDatosDeGoogleSheets, 30000); // funcion propia de js para actualizar la obtencion de datos cada 5 segundos
};