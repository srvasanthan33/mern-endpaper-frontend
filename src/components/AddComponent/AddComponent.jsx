import React, { Component } from 'react'
import './AddComponent.css'

export class AddComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:"",
     price:0,
     quantity:0
  }
}

nameChangeHandler = (event) =>{
    this.setState({name:event.target.value})
}

priceChangeHandler = (event) =>{
    this.setState({price:event.target.value})
}

quantityChangeHandler = (event) =>{
    this.setState({quantity:event.target.value})
}

submitHandler = (event) =>{
    event.preventDefault()
    console.log(this.state.name,this.state.price,this.state.quantity)

    fetch("http://localhost:3500/api/v1/products/add",{
        method:"POST",
        crossDomain:true,
        headers : {
            "Content-Type" :"application/json",
            'Access-Control-Allow-Origin':"*"
        },
        body:JSON.stringify({
            name:this.state.name,
            price:this.state.price,
            quantity:this.state.quantity
        })
    })
    alert("Succesfully entered")
}

  render() {
    const {name,price,quantity} = this.state
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
            <h2 className='Title'>Add Product</h2>
            <div className='form-data'>
                <div className='formItem'>
                    <label>Product Name</label>
                    <input  required type = "text" placeholder='Name'  value ={name} onChange = {this.nameChangeHandler}/>
                </div>

                <div className='formItem'>
                    <label>Product Price</label>
                    <input  required type = "number" placeholder='Price' value ={price} onChange={this.priceChangeHandler}/>
                </div>

                <div className='formItem'>
                    <label>Product Quantity</label>
                    <input  required type = "number" placeholder='Quantity' value = {quantity} onChange ={this.quantityChangeHandler}/>
                </div>

                <button className="btn" type = "submit">ADD</button>
            </div>
        </form>
      </React.Fragment>
    )
  }
}

export default AddComponent