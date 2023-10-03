function attachGradientEvents() {
    let result = document.getElementById('result').textContent;
    let gradient = document.getElementById('gradient');

    gradient.addEventListener("mousemove", mouseOver);
    gradient.addEventListener('mouseout', mouseOut);

    function mouseOver(event) {
        const gradientBoxWidth = event.target.clientWidth;
        const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1); 
        const percentage = Math.trunc(positionOfTheMouse * 100); 
        document.getElementById("result").textContent = percentage + "%";
    }
    function mouseOut() {
        document.getElementById("result").textContent = "";
    }
}
