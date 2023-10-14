function sortingTickets(arr, criteria) {

let result = [];
class Ticket {
    constructor(destination,price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

for (const line of arr) {
    let [curDestination, curPrice, curStatus] = line.split("|");
    curPrice = Number(curPrice);
    const newTicket = new Ticket(curDestination, curPrice, curStatus);
    result.push(newTicket);
}
    if(criteria === 'price') {
        let sortedArr = result.sort(function (a,b) {
            return (a[criteria] - b[criteria]);
        })
        return sortedArr;
    } else {
        let sortedArr = result.sort(function (a, b) {
            return (a[criteria]).localeCompare((b[criteria]));
           })
           return sortedArr;
    }
   
    
}
