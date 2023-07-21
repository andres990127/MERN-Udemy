// Función de objeto
const reproductor = {
    reproducir: (id) => {
        console.log('Reproduciendo canción con el id ' + id)
    },
    pausar: () => {
        console.log('pausando...')
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();