function focused() {
    let div = document.getElementsByTagName("div")[0];

    Array.from(div.getElementsByTagName("input")).forEach(el => {
        el.addEventListener("focus", focuse);
    });
    Array.from(div.getElementsByTagName("input")).forEach(el => {
        el.addEventListener('blur', blured);
    });

    function focuse(e) {
        let parent = e.target.parentNode;
        parent.classList.add("focused");
    
    }
    function blured(e) {
        let parent = e.target.parentNode;
       parent.classList.remove("focused");
    
    }
}
