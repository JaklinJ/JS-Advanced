function extractText() {
    let itemList = document.querySelectorAll("ul#items li");
    let text = document.querySelector("#result");
    
    for (const list of itemList) {
        text.value += list.textContent + "\n";
    }
}
