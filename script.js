// BOTÓN ABRIR INVITACIÓN

const musica = document.getElementById("musica");
const boton = document.getElementById("btnEntrar");

boton.addEventListener("click", () => {

    document.querySelector(".hero").classList.add("ocultar");

    setTimeout(() => {

        document.querySelector(".hero").style.display = "none";

        document.getElementById("invitacion").style.display = "block";

        musica.play().catch(() => {});

        document.querySelector(".bienvenida").scrollIntoView({

            behavior: "smooth"

        });

    }, 800);

});


// FECHA DEL EVENTO

const fechaEvento = new Date(
    "July 4, 2026 19:00:00"
);


// FUNCIÓN DEL CONTADOR

function actualizarContador() {

    const ahora = new Date();

    const diferencia = fechaEvento - ahora;


    if (diferencia <= 0) {

        document.getElementById("countdown").innerHTML =
        "🎉 ¡Llegó el gran día! 🎉";

        return;
    }


    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );


    document.getElementById("countdown").innerHTML = `

        <div class="contador-grid">

            <div class="tiempo-box">
                <span>${dias}</span>
                <small>Días</small>
            </div>

            <div class="tiempo-box">
                <span>${horas}</span>
                <small>Horas</small>
            </div>

            <div class="tiempo-box">
                <span>${minutos}</span>
                <small>Min</small>
            </div>

            <div class="tiempo-box">
                <span>${segundos}</span>
                <small>Seg</small>
            </div>

        </div>

    `;
}


// INICIAR CONTADOR

actualizarContador();

setInterval(
    actualizarContador,
    1000
);
btnSalir.addEventListener("click", () => {

    musica.pause();

    musica.currentTime = 0;

    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:2rem;
            text-align:center;
        ">
            💙 Gracias por visitar la invitación 💙
        </div>
    `;

});
setInterval(
    actualizarContador,
    1000
);
