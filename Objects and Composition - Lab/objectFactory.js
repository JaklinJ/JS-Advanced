function objectFactory(library, orders) {

let fulfilledOrders = [];

for (const order of orders) {
    const current = Object.assign({}, order.template);
    
    for (const part of order.parts) {
        current[part] = library[part];
    }
    fulfilledOrders.push(current);
}
return fulfilledOrders;
}
