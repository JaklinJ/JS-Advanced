function townPopulation(arr) {

    let registry = {};

for (const info of arr) {
    let [town, population] = info.split(" <-> ");
    population = Number(population);
    
    if (registry[town] != undefined) {
        population += registry[town];
    }
    registry[town] = population
}

for (const key in registry) {
    console.log(`${key} : ${registry[key]}`);
} 

}
