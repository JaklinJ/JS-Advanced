function solve(data, criteria)  {
    let objects = JSON.parse(data);
    let index = 0;

    let [key, value] = criteria.split("-");
    objects.forEach(obj => {
        if( obj[key] === value) {
        filterByCriteria.call(obj);
        }
    });
    function filterByCriteria(){
        console.log(`${index++}. ${this.first_name} ${this.last_name} - ${this.email}`)
    }
}
