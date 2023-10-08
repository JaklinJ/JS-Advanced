function cardReader(cardFace, cardSuit) {
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }
 
    if (validCardFaces.includes(cardFace)) {
        let suits = Object.keys(validCardSuits);
        
            return {
                cardFace,
                cardSuit,
                toString() {
                    let str = `${cardFace}${validCardSuits[cardSuit]}`
                    return str;
                }
            
        }
    } else {
   throw new Error('Error');
    }
}
