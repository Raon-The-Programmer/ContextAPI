import React, { useContext } from 'react'
import { priceRate } from './App'

const Finalprice = () => {
    const {price} = useContext(priceRate)
  return (
    <div>
    <div style={{display:'flex',justifyContent:'space-between'}}><h5>Total:</h5>
    <p style={{fontWeight:'bold',justifyContent:'flex-end'}}> {price} $</p></div>
    <div style={{display:'flex',justifyContent:'flex-end'}}><p style={{color:'red'}}>Get daily cash with JoVi cards</p></div>
    </div>
  )
}

export default Finalprice