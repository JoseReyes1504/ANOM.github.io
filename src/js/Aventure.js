const btnPregunt = document.getElementById("btnPregunta");
const Preguntas = document.querySelectorAll("#Pregunta");


console.log(Preguntas);


btnPregunt.addEventListener("click", () => {
    Preguntas.forEach(pr =>{                
        pr.setAttribute("style", "opacity:100%" );
        pr.classList.add("AnimarCajasPreguntas");
        // console.log("Si mostro");
    })
});