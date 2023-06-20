import React, { Component } from 'react'
import './HomeComponent.css'
import axios from 'axios'
export class HomeComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Products: [],
         fetched_id:""
      }
    }

    cartAddHandler = event =>{
        event.preventDefault()
        this.setState({fetched_id:event.target.id})
        console.log(this.state.fetched_id)

        fetch("http://localhost:3500/api/v1/products/addCart",
        {
        method:"POST",
        crossDomain:true,
        headers : {
            "Content-Type" :"application/json",
            'Access-Control-Allow-Origin':"*"
        },
        body:JSON.stringify({
            id:event.target.id
        })
        })
        alert("Successfully added")

    }

    componentDidMount() {
        axios.get("http://localhost:3500/api/v1/products")
        .then(response => {
            console.log(response)
            this.setState({Products:response.data})
            
        })
        
    }
  render() {
    const {Products,idkey} = this.state
    return (
      <div className='compon'>
        <h1 className='Title'>Products</h1>
        <div className='container'>
            {
                Products.map(product => {
                    return (
                        <div className='item' id = {product._id} key ={product._id}>
                        <h2 className='heading1'>{product.name}</h2>
                        <h3><b>Price: </b>{product.price}</h3>
                        <h3><b>Quantity:</b>{product.quantity}</h3>
                        <form  >
                            <button className = "add" type = "submit" id = {product._id} onClick={this.cartAddHandler}>Add to Cart</button>
                        </form>
                    </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}

export default HomeComponent