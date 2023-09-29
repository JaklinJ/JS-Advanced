function search() {
  let towns = Array.from(document.querySelectorAll("ul#towns li"));
   let searchedText = document.getElementById("searchText").value;
   let counter = 0;
  towns.forEach(town => {
  
   if (town.textContent.includes(searchedText)) {
    
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      return counter++;
   }
   town.style.fontWeight = "";
   town.style.textDecoration = "none";
 
}); 
   
  
  document.getElementById("result").textContent = `${counter} matches found`;
  
}
