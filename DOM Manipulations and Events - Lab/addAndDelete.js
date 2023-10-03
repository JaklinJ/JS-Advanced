function addItem() {
    let inputField = document.getElementById("newItemText").value;
    let parent = document.getElementById("items");

    if (inputField === 0) return;
    let newLi = document.createElement("li");
    newLi.textContent = inputField;
    let remove = document.createElement('a');
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText)
    remove.href = "#";
    remove.addEventListener('click', deleteLink);

    newLi.appendChild(remove);
    parent.appendChild(newLi);


    function deleteLink() {
       newLi.remove();

    }
}
