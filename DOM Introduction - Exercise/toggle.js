function toggle() {
    let btn = document.getElementsByClassName("button")[0].textContent;
    let extra = document.getElementById("extra");
    if (btn === "More") {
        document.getElementsByClassName("button")[0].textContent = "Less";
        extra.style.display = "block";
    } else {
        document.getElementsByClassName("button")[0].textContent = "More";
        extra.style.display = "none";
    }
}
