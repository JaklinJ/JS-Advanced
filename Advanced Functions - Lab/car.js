function create(arr) {

let result = {};

let obj = {
    create: (name, inherit, name2) => (
        result[name] = inherit ? Object.create(result[name2]) : {}
    ),
    set: (name, key, value) => (
        result[name][key] = value
    ),
    print: (name) => {
       let strResult = [];
       for (const key in result[name]) {
        strResult.push(`${key}:${result[name][key]}`);
       }
       console.log(strResult.join(","))
    }
}
    arr.forEach(line => {
        let [command, name, key, value] = line.split(" ");
        obj[command](name, key, value);
    });
}
