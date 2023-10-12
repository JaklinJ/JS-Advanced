function listProcessor(arr) {

    let result = [];

    let obj = {
        add: s => result.push(s),
        remove: s => result = result.filter( (x) => x !== s),
        print: () => console.log(result.join(','))
    }
    arr.forEach(element => {
        let [command, string] = element.split(" ");

        obj[command](string);
    });
}
