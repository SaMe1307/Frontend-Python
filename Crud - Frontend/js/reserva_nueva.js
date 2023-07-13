function guardar() {
    let nro = document.getElementById("nrosocio").value
    let nom = document.getElementById("nombre").value
    let hor = parseFloat(document.getElementById("horario").value)
    let dep = parseInt(document.getElementById("deporte").value)
   
//Presenta las Reservas en formato json

    let reserva = {
        nrosocio: nro, 
        nombre: nom,
        horario: hor,
        deporte: dep
    }

    let url = "http://localhost:5000/reservas"
    var options = {
        body: JSON.stringify(reserva),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "./reservas.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}

