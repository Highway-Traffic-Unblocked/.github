document.addEventListener("DOMContentLoaded", function() {
    const car = document.getElementById("car");
    let score = 0;

    function moveCar(event) {
        // Logic for car movement
    }

    function checkCollision() {
        // Logic for collision detection
    }

    function updateScore() {
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
    }

    setInterval(updateScore, 1000);
});
