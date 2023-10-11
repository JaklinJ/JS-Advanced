function carFactory(obj) {

    let engine = {
        "Small engine": { power: 90, volume: 1800 },

        "Normal engine": { power: 120, volume: 2400 },

        "Monster engine": { power: 200, volume: 3500 }
    }

    let carriage = {
        "Hatchback": { type: 'hatchback', color: obj.color },

        "Coupe": { type: 'coupe', color: obj.color },
    }

    if (obj.wheelsize % 2 === 0) {
        obj.wheelsize -= 1;
    }
    let wheels = {
        "wheels": Array(4).fill(obj.wheelsize)

    }

    let factory = {
        "model": obj.model,
    };
        
    if (obj.power <= 90) {
        factory.engine = engine["Small engine"];
    } else if (obj.power <= 120) {
        factory.engine = engine["Normal engine"];
    } else {
        factory.engine = engine['Monster engine'];
    }

    if (obj.carriage === 'hatchback') {
        factory.carriage = carriage['Hatchback'];
    } else if (obj.carriage === 'coupe'){
        factory.carriage = carriage['Coupe'];
    }

    factory.wheels = wheels['wheels'];

        return factory;
//{ model: 'VW Golf II', 
// engine: { power: 90, volume: 1800 }, 
// carriage: { type: 'hatchback', color: 'blue' }, 
// wheels: [13, 13, 13, 13] }
}
