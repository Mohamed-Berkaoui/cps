import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

function Product() {
    const [product,setProduct]=useState({})
    const params=useParams() 
    const navigate=useNavigate()
    useEffect(function(){
        axios.get('https://fakestoreapi.com/products/'+params.id)
        .then(res=>setProduct(res.data))
    },[])
  return (
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <button onClick={function(){
            navigate(-1)
        }}>back</button>
    </div>
  )
}

export default Product