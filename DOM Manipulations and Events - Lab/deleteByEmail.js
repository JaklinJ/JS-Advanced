function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    let secondColl = document.querySelectorAll("#customers tr td:nth-child(2)");
    for (let td of secondColl) {
        if (td.textContent === email) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').
                textContent = "Deleted."; return;
        }
        document.getElementById("result").textContent = "Not found."
    }
}
