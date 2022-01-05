import React from 'react'
import '../CSS/bootstrap.min.css'
import convertToBase64 from '../Utils/convertToBase64'
import isReadyForSubmit from '../Utils/isReadyForSubmit'
import parseState from '../Utils/parseState'
import VariantForm from './VariantForm'

class UploadProduct extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      numberOfVarieties: 1,
      productName: "",
      productDescription: "",
      dateUploaded: "",
      dateEdited: "",
      productVarietiesID: [],
      productVarieties: [],
      displayNotReadyForSubmit: false,
      uploadSuccessful: false
    }
    this.handleVarietiesChange = this.handleVarietiesChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleVarietiesChange(event){
    let numberOfVarieties = event.target.value
    let productVarietiesID = this.state.productVarietiesID
    let idCache = productVarietiesID.slice()
    let productVarieties = this.state.productVarieties

    for(let spec of idCache){
      let variantIndex = parseInt(spec.slice(-1))
      // console.log(spec + " " + variantIndex)
      if(variantIndex > numberOfVarieties){
        productVarietiesID.splice(productVarietiesID.indexOf(spec), 1)
        productVarieties.splice(productVarietiesID.indexOf(spec), 1)
      }
    }
    this.setState({
      numberOfVarieties: event.target.value,
      productVarietiesID: productVarietiesID,
      productVarieties: productVarieties
    })
  }

  handleSubmit(event){
    event.preventDefault()
    if(isReadyForSubmit(this.state)){
      this.setState({
        displayNotReadyForSubmit: false
      })
      
      let data = parseState(this.state)
      console.log(data)
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
      fetch('http://localhost:5000', options)
        .then(response => response.json())
        .then(data => { 
          console.log(data)
          if(data.status === "successful"){
            this.setState({uploadSuccessful: true})
          }
        })
    } 
    else{
      this.setState({
        displayNotReadyForSubmit: true
      })
    }
    console.log(this.state)
  }

  async handleChange(event){
    // console.log("id: " + event.target.id + "\n value: " + event.target.value)
    if((event.target.id === "productName")||(event.target.id === "productDescription")){
      this.setState({
        [event.target.id] : event.target.value
      })
    } 
    else if(event.target.id.includes('image')){   // checks if image is uploaded
      let productVarietiesID = this.state.productVarietiesID
      let productVarieties = this.state.productVarieties
      let index = productVarietiesID.indexOf(event.target.id)
      const base64 = await convertToBase64(event.target.files[0])
      if(index !== -1){
        productVarieties.splice(index, 1, base64)
        this.setState({
          productVarieties: productVarieties
        })
      } else{
        productVarietiesID.push(event.target.id)
        productVarieties.push(base64)
      }

    } 
    else{ //pours all gotten values into two arrays, one holding the IDs and the other, their correspnding html value
      let productVarietiesID = this.state.productVarietiesID
      let productVarieties = this.state.productVarieties
      let index = productVarietiesID.indexOf(event.target.id)
      if(index !== -1){
        productVarieties.splice(index, 1, event.target.value)
        this.setState({
          productVarieties: productVarieties
        })
      } else{
        productVarietiesID.push(event.target.id)
        productVarieties.push(event.target.value)
      }
    }

  }

  render(){
    
    return(
      this.state.uploadSuccessful ? <h3>Upload Successful</h3> : 
      <div>
        <h2>Upload New Product</h2>
        {this.state.displayNotReadyForSubmit? <small>All fields must be filled</small> : null  }
        <form>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Product Name" id="productName" onChange={this.handleChange} />
          </div>
          
          <div className="form-group">
            <textarea className="form-control" rows="2" placeholder="Product Description" id="productDescription" onChange={this.handleChange} />
          </div>
  
          <div className="form-group">
            <label>Number of varieties </label>
            <input type="number" min="1" max="9" onChange= { this.handleVarietiesChange }/>
          </div>
          {
            Array.from({length: this.state.numberOfVarieties})
                .map((_, index) => (
                    <VariantForm index={index} key={index} handleChange={this.handleChange}/>
                )
            )
          }
          <button type="submit" className="btn btn-outline-dark" onClick= { this.handleSubmit }>Submit</button> 
          
        </form>
      </div>
    )
  }
  
}

export default UploadProduct