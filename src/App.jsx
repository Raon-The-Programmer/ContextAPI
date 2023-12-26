import React, { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Totalfair from './Totalfair'

const priceRate = createContext()

const App = () => {
  const [price,setPrice] = useState(0)
  const handleValue =(event)=>{

    setPrice(549*event.target.value)
    
  }
  return (
    <div>
    <div style={{display:'flex',flexWrap:'wrap',height:'50vh',marginTop:'50px',marginLeft:'50px',justifyContent:'space-evenly'}}>
      <img src="https://i.dummyjson.com/data/products/1/3.jpg" alt="" style={{width:'30%'}}/>
      <div>
      <h2>I PHONE 9</h2>
      <h5>Descripton</h5>
      <p>An apple mobile which is nothing like apple</p>
      </div>
      <div>
        <form action="">
          <input type="number" onChange={handleValue} placeholder='0' style={{width:'70px'}}/>
        </form>
      </div>
      <p style={{fontWeight:'bold'}}>{price}$</p>

    </div>
    <hr/>
    <div>
      <priceRate.Provider value={{price}}>
      <Totalfair/></priceRate.Provider>
    </div>
    </div>
  )
}

export {App as default,priceRate}