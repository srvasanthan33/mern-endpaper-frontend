import React, { Component } from 'react'
import axios from 'axios'
export class CartComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       CartProducts:[]
    }
  }
  total = 0
  componentDidMount() {
    axios.get("http://localhost:3500/api/v1/products/cart")
    .then(response => {
      console.log(response)
      this.setState({CartProducts:response.data})
    })
  }
  render() {
    const {CartProducts} = this.state
    CartProducts.map(product => {
      return this.total += product.total
    })
    return (
      <div><h2 className='Title'>Your Cart</h2>
      <div className='container'>
            {
                CartProducts.map(product => {
                    return (
                        <div className='item' id = {product._id} key ={product._id}>
                        <h2 className='heading1'>{product.name}</h2>
                        <h3><b>Price: </b>{product.price}</h3>
                        <h3><b>Quantity:</b>{product.quantity}</h3>
                        
                    </div>
                    )
                })
            }
            <h2><b>Total Cart Value: <i>{this.total}</i></b></h2>


        </div></div>
    )
  }
}

export default CartComponent