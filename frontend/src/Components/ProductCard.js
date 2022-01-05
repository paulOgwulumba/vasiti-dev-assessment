import renderAllProducts from "../Utils/renderAllProducts";
import parse from 'html-react-parser'
import '../CSS/Carousel.css'
import '../CSS/Product.css'


function ProductCard (props){
  if(props.loading){
    return(
      <h3>Loading....</h3>
    )
  } else {
    return(
      <div>
        <h2>{props.seller? "Uploaded": "Available"} Products</h2>
        <h5>Use horizontal scroll-bar under product to see its variants</h5>
        <div className="product-wrapper">
          {parse(renderAllProducts(props.products))}
        </div>
      </div>
  )
  }
  
}

export default ProductCard