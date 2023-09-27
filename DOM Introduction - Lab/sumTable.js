function sumTable() {
    let table = document.querySelectorAll("table tr");
    let total = 0;
    for (let index = 1; index < table.length; index++) {
        let coll = table[index].children;
        let cost = coll[coll.length - 1].textContent;
        total += Number(cost);
    }
    document.getElementById("sum").textContent = total;
    
}
