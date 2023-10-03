function addItem() {
    let inputField = document.getElementById("newItemText").value;
    let parent = document.getElementById("items");


    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(inputField));
    parent.appendChild(newLi);

    document.getElementById("newItemText").value = "";
}
