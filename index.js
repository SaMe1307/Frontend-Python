function guardar() {
    let nro = document.getElementById("nrosocio").value
    let n = parseFloat(document.getElementById("nombre").value)
    let h = parseInt(document.getElementById("horario").value)
    let d = document.getElementById("deporte").value

    
    let reserva = {
        nombre: nro,
        nombre: n,
        horario: h,
        deporte: d
    }
    // cambiar despues de levantar servidor
    let url = "http://localhost:5000/reservacanchas" 
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
            window.location.href = "./js/reservas.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}