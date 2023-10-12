function createRectangle(width, height, color){

return {
    width,
    height, 
    color: color = color[0].toUpperCase() + color.substring(1),
    calcArea: () => {
        return width * height;
    }

}
}
