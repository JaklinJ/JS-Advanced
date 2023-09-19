function pieceOfPie(arr, flavor1, flavor2) {

const result = arr.slice(arr.indexOf(flavor1), arr.indexOf(flavor2)+1);
return result;


}
