
function recomendar(genero) {
    let elementoRecomendacion = document.getElementById("textoRecomendacion");

    let edad = document.getElementById("edadUsusario").value;

    switch (genero) {
        case 'romance':
            if (edad < 13) {
                elementoRecomendacion.textContent = "UP";
            } else {
                if (edad < 16) {
                    elementoRecomendacion.textContent = "Una chica del siglo XX";
                } else {
                    elementoRecomendacion.textContent = "The Holiday";
                }
            }
            break;

        case 'comedia':
            if (edad < 13) {
                elementoRecomendacion.textContent = "Dog. Un viaje salvaje";
            } else {
                if (edad < 16) {
                    elementoRecomendacion.textContent = "Not Okay";
                } else {
                    elementoRecomendacion.textContent = "TED";
                }
            }
            break;

        case 'terror':
            if (edad < 13) {
                elementoRecomendacion.textContent = "Monser House";
            } else {
                if (edad < 16) {
                    elementoRecomendacion.textContent = "Poltergeist";
                } else {
                    elementoRecomendacion.textContent = "El conjuro";
                }
            }
            break;

        case 'suspenso':
            if (edad < 13) {
                elementoRecomendacion.textContent = "Frankenweenie";
            } else {
                if (edad < 16) {
                    elementoRecomendacion.textContent = "Coraline y la puerta secreta";
                } else {
                    elementoRecomendacion.textContent = "Terrifier";
                }
            }
            break;

        default:
            break;
    }
}