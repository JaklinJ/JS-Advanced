function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let tableInfo = Array.from(document.querySelectorAll("table tbody tr"));
   let searchField = document.getElementById("searchField");

   function onClick() {
      let searchText = searchField.value;
     for (let row of tableInfo) {
      let tableData = Array.from(row.querySelectorAll("td"));
      for (let td of tableData) {
         if (td.textContent.includes(searchText)) {
            row.classList.add("select");
            break;
         } else {
            row.classList.remove("select");
         }
      }
     }
     searchField.value = "";

   }
}
