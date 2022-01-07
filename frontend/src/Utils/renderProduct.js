function renderProduct(productObject){
  const numOfVarieties = productObject.product_varieties.length;

  let html = `<div class="slider">
                <div class="slideshow">
                  <!-- carousel control buttons -->
                  <button class="slide-btn slide-btn-1"></button>
                  <button class="slide-btn slide-btn-2"></button>
                  <button class="slide-btn slide-btn-3"></button>
                  <button class="slide-btn slide-btn-4"></button>
                  <div class="slideshow-wrapper" style="width: ${productObject.product_varieties.length * 100}%">`
  for(let variant of productObject.product_varieties){
    html += `
        <div class=" slide product-card" >
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

  html += `   </div>
            </div>
          </div>`
  return html
}

/**
 * @description This creates the CSS styling that handles the event triggered when the carousel buttons for products with multiple categories
 * are focused on. 
 * @param {Integer} numOfButtons 
 * @returns String
 */
function createBtnStylingOnFocus(numOfButtons) {
  let styling = "";

  for (let i = 1; i <= numOfButtons; i++ ) {
    styling += `
      .slide-btn-${i}:focus~.slideshow-wrapper {
        animation: none;
        left: ${(1 - i) * 100}%;
    `;
  }

  return styling;
}

/**
 * @description This creates the CSS styling for the positions of the carousel buttons used to toggle product varieties.
 * @param {Integer} numOfButtons 
 * @returns String
 */
function createBtnStylingPosition(numOfButtons) {
  let styling = "";
  for (let i = 1; i <= numOfButtons; i++ ) {
    styling += `
      .slide-btn-${i} {
        left: ${52.5 - (2.5 * numOfButtons)}%;
    `;
  }
}

export default renderProduct