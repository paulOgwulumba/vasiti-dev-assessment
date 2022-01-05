function VariantForm(props){
  return(
    <div>
      <h6>Variant {props.index + 1}</h6>
      <div className="form-row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Size" id={`size${props.index + 1}`} onChange={ props.handleChange } />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Color" id={`color${props.index + 1}`} onChange={ props.handleChange } />
        </div>
      </div>
      <hr />
      <div className="form-row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Quantity" id={`quantity${props.index + 1}`} onChange={ props.handleChange } />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Price" id={`price${props.index + 1}`} onChange={ props.handleChange } />
        </div>
      </div>
      <hr />
      <div className="form-group">
        <label>Upload product Image</label> 
        <input type="file" id={`image${props.index + 1}`} onChange={ props.handleChange } accept="image/*"/>
      </div>
      <hr />
      <hr />
    </div>
  )  
}

export default VariantForm