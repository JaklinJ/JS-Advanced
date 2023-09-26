function colorize() {
    let list = document.querySelectorAll("table tr");

    let index = 0;
    for (const el of list) {
        index++;
        if (index % 2 === 0) {
            el.style.background = "teal";
        }
    }
}
