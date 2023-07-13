//RECIBE ->
// id=1&nombre=MICROONDAS&precio=50000&stock=10&imagen=https://picsum.photos/200/300?grayscale

console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
//separa el string por los “&” creando una lista
// [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(parts)


//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("nrosocio").value = decodeURIComponent(parts[1][1])
document.getElementById("nombre").value = decodeURIComponent(parts[2][1])
document.getElementById("horario").value = decodeURIComponent(parts[3][1])
document.getElementById("deporte").value =decodeURIComponent( parts[4][1])


function modificar() {
    let id = document.getElementById("id").value
    let nro = document.getElementById("nrosocio").value
    let nom = parseFloat(document.getElementById("nombre").value)
    let hor = parseInt(document.getElementById("horario").value)
    let dep = document.getElementById("deporte").value
   
    let reserva = {
        id: id,
        nrosocio: nro,
        nombre: nom,
        horario: hor,
        deporte: dep
    }
    let url = "http://localhost:5000/reservas/"+id
    var options = {
        body: JSON.stringify(reserva),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./reservas.html";  
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
