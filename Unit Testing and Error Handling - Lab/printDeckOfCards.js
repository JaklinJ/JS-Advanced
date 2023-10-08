function printDeckOfCards(cards) {
    let res = [];
    let isValid = true;
    for (const el of cards) {
        let card;
        let suit;

        if (el.length > 2) {
            card = el.slice(0, 2);
            suit = el.slice(2);
        } else {
            [card, suit] = el.split("");
        }

        try {
            const thisCard = createCard(card, suit);
            res.push(thisCard);
        } catch (err) {
            console.log(`Invalid card: ${el}`)
            isValid = false;
            break;
        }
    }

    function createCard(cardFace, cardSuit) {
        const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validCardSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };

        if (validCardFaces.includes(cardFace) && validCardSuits.hasOwnProperty(cardSuit)) {
            return {
                cardFace,
                cardSuit,
                toString() {
                    return `${cardFace}${validCardSuits[cardSuit]}`;
                }
            };
        } else {
            throw new Error('Invalid card');
        }
    }
    if(isValid){
        console.log(res.join(" "));
    } 
    
}
