function solve() {
  let text = document.getElementById("text").value.toLowerCase().split(" ");
  let output = document.getElementById("naming-convention").value;

  let result = "";

  switch (output) {
    case "Camel Case" :
      let firstWord = text.shift().toLowerCase();
      result += firstWord;
      for (const word of text) {
        result += word[0].toUpperCase() + word.substring(1);
      }
      break;
      case "Pascal Case":
        for (const word of text) {
          result += word[0].toUpperCase() + word.substring(1);
        }
        break;
        default: 
        result += "Error!";
        break;
  }

  document.getElementById("result").textContent = result;
}
