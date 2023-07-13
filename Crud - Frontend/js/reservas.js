const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"http://127.0.0.1:5000/reservas",
        reservas:[],
        error:false,
        cargando:true
      }
    },
    // Se llama después de que la instancia haya 
    // terminado de procesar todas las opciones relacionadas con el estado.
    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            // Acá se consume la Api
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.reservas = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        // reserva; es el id que necesita para buscar en la DB y eliminarlo
        eliminar(reservas) {
            const url = 'http://localhost:5000/reservas/' + reserva;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        }
    },
  }).mount('#app')