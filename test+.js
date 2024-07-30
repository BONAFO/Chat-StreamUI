document.addEventListener("DOMContentLoaded", () => {
    const fullscreenButton = document.getElementById("fullscreenButton");
    const element = document.getElementById("myElement");

    fullscreenButton.addEventListener("click", () => {
        if (document.fullscreenElement) {
            // Salir del modo de pantalla completa
            document.exitFullscreen();
        } else {
            // Entrar en modo de pantalla completa
            element.requestFullscreen();
        }
    });

    // Opcional: Maneja el evento de cambio de estado de pantalla completa
    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
            alert("NOS VIMOS")
        }
    });
});