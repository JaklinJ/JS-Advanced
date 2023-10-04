function solve(area, vol, input) {
    let objects = JSON.parse(input);
    let output = [];

    objects.forEach(obj => {
        const areaCube = area.apply(obj)
        const volumeCube = vol.apply(obj);
        
        output.push({
            area: areaCube,
            volume: volumeCube
        })
    });

    return output;
}
