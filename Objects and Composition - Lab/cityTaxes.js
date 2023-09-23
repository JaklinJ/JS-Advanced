function cityTaxes(name, population, treasury) {

    let city = {
        name, 
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function collectTaxes() {
            city.treasury += city.population * city.taxRate;
        },
        applyGrowth: function applyGrowth(percentage) {
            city.population += Math.floor(city.population * percentage/100);
        },
        applyRecession: function applyRecession(percentage) {
            city.treasury -= Math.floor(city.treasury * percentage/100);
        }
    }

return city;

}
