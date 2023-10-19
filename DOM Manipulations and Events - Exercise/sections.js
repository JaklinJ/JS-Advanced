function create(words) {
   let content = document.getElementById('content');

   let ourWords = words.slice(0);

   for (const word of ourWords) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = word;
      div.appendChild(p);
      div.addEventListener('click', onClick);
    
      content.appendChild(div);
   }
   function onClick(event) {
      event.target.querySelector('p').style.display = ''
      debugger;
   }
   
}
