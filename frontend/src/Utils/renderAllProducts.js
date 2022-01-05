import renderProduct from "./renderProduct";

function renderAllProducts(productsArray){
  let html = ""
  for(let product of productsArray){
    if (typeof product.product_varieties === 'string'){
      product.product_varieties = JSON.parse(product.product_varieties)
    }
    html += renderProduct(product)
  }
  return html
}

export default renderAllProducts