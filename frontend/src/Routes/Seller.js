import React from 'react'
import ProductCard from '../Components/ProductCard'
import UploadProduct from '../Components/UploadProduct'
import '../CSS/bootstrap.min.css'

class Seller extends React.Component{
  constructor(props){
    super(props)

    this.state = { 
      products: [], 
      fetched: false,
      uploadProduct: false
    }

    this.toggleUpload = this.toggleUpload.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data, fetched: true })
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  toggleUpload(event){
    this.setState({uploadProduct: !this.state.uploadProduct})
  }
  render(){
    return (
      <div>
        { 
          this.state.uploadProduct ? 
          <>
            <button className="toggle-upload btn btn-outline-dark" onClick = { this.toggleUpload }>Display Products </button>
            <UploadProduct /> 
          </> :
          <>
            <button className="toggle-upload btn btn-outline-dark" onClick = { this.toggleUpload }>Upload New Product </button>
            <ProductCard products={this.state.products} loading={!this.state.fetched} seller={true}/>
          </>
          
        }
      </div>
    )
  }
  
}

export default Seller