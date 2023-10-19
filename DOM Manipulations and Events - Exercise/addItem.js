function addItem() {
   let item = document.getElementById('newItemText');
   let value = document.getElementById('newItemValue');
   let newOption = document.createElement('option');
   let menu = document.getElementById('menu');
   
   newOption.textContent = item.value;
   newOption.value = value.value;
    menu.appendChild(newOption);

    item.value = '';
    value.value = '';
}
