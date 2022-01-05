function parseState(state){
  let object = {
    product_name: "",
    product_description: "",
    product_varieties: [],
    date_uploaded: "",
    date_edited: ""
  }
  object.product_name = state.productName
  object.product_description = state.productDescription
  let date = new Date()
  let dateString = date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear()
  object.date_edited = dateString
  if(state.dateUploaded === ""){
    object.date_uploaded = dateString
  } else {
    object.date_uploaded = state.dateUploaded
  }
  
  
  for(let i = 0; i < state.numberOfVarieties; i++){
    object.product_varieties.push({
      size: "",
      color: "",
      quantity: "",
      images: [],
      price: ""
    })
  }
  for(let i = 0; i < state.productVarieties.length; i++){
    let variantIndex = parseInt(state.productVarietiesID[i].slice(-1)) - 1
    let variantName = state.productVarietiesID[i].slice(0, -1)
    if(variantName === 'image'){
      object.product_varieties[variantIndex].images.push(state.productVarieties[i])
    } else{
      object.product_varieties[variantIndex][variantName] = state.productVarieties[i]
    }
  }
  return object
}

export default parseState