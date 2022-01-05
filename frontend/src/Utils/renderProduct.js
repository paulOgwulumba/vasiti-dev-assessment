function renderProduct(productObject){
  let html = `<div class="slider">
                <div class="slides">`
  for(let variant of productObject.product_varieties){
    html += `
        <div class=product-card>
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src="https://i.imgur.com/xdbHo4E.png" alt="">
          </div>
          <div class="product-details">
            <h4><a href="">${productObject.product_name}</a></h4>
            <span class="product-catagory">Size: ${variant["size"]},   Color: ${variant["color"]},   Quantity: ${variant["quantity"]},</span>
            <p>${productObject.product_description}</p>
            <div class="product-bottom-details">
              <div class="product-price">Price:   ${variant["price"]}</div>
              <div class="product-links">
                <a href=""><i class="fa fa-heart"></i></a>
                <a href=""><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
          </div>
        </div>
    `
  }

  html += ` </div>
          </div>`
  return html
}

export default renderProduct