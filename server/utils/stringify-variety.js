/**
 * @description Changes varieties object array to a single line string
 * @param {Array} array containing varieties Object(s) with keys {size, color, quantity, images, price}
 */
module.exports = function stringifyVariety( varietiesArray ){
  let finalString = "["
  for(let object of varietiesArray){
    finalString += `{"size": "${object.size}", "color": "${object.color}", "quantity": "${object.quantity}", "images": [`
    // "images": "${object.size}", "price": "${object.price}"},`
    for(let image of object.images){
      finalString += `"${image}", `
    }
    finalString += `], "price": "${object.price}"}, `
  }
  return finalString + "]";
}