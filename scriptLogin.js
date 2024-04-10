const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
var body = document.body;
    var currentGradient = body.style.background;

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function changeGradientDirection() {
    var body = document.body;
    var currentGradient = body.style.background;

    if (currentGradient.includes("to right")) {
        // Altera a direção para "to left"
        setTimeout(function() {
            
            body.style.transition = "background 300 milissegundos"; // Define a transição de 300 milissegundos
            body.style.background = "linear-gradient(to left, #c9d6ff, #BF2517)";   // Altera a direção para "to left"
        }, 300); // Atraso de 1 segundo (1000 milissegundos)
    } else if (currentGradient.includes("to left")) {
        setTimeout(function() {
            body.style.transition = "background 300 milissegundos"; // Define a transição de 300 milissegundos
            body.style.background = "linear-gradient(to right, #c9d6ff, #BF2517)";   // Altera a direção para "to right"
        }, 300); // Atraso de 1 segundo (1000 milissegundos)
    } else {
        setTimeout(function() {
            body.style.transition = "background 300 milissegundos"; // Define a transição de 300 milissegundos
            body.style.background = "linear-gradient(to left, #c9d6ff, #BF2517)";   // Define a direção padrão como "to left" se não estiver definida
        }, 300); // Atraso de 1 segundo (1000 milissegundos)
    }
};