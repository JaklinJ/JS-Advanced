function encodeAndDecodeMessages() {
    let messages = document.querySelectorAll('textarea');
    let encodeMessage = document.querySelectorAll('textarea')[0];
    let decodeMessage = document.querySelectorAll('textarea')[1];

    let btnEncode = document.querySelectorAll('button')[0];
    let btnDecode = document.querySelectorAll('button')[1];
    btnEncode.addEventListener('click', encode);
    btnDecode.addEventListener('click', decode);
    
    
    
    function encode(){
        let decodingResult ='';
        decodeMessage.value = '';
        let currentMsg = encodeMessage.value;

        for (const char of currentMsg) {
            
           let newChar = char.charCodeAt(0) + 1;
            newChar = String.fromCharCode(newChar);
            decodingResult += newChar;
        };
        encodeMessage.value = '';
        decodeMessage.value = decodingResult
    }

    function decode() {
        let encodeMessage = '';
        let decodedMsg = decodeMessage.value;

        for (const char of decodedMsg) {
            let decChar = char.charCodeAt(0) - 1;
            decChar = String.fromCharCode(decChar);
            encodeMessage += decChar;
        }
        decodeMessage.value = encodeMessage;
    }
    decodeMessage.value = '';
}
