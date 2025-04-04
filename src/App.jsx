// import { useState, useEffect } from 'react'
// import Products from './components/Products'
// import Cart from './components/Cart'

// function App() {
//   const [data, setData] = useState([])
//   const [cart, setCart] = useState([])

//   const addToCart = (id) => {
//     let newCart = (...cart).push.id
//     setCart(newCart)
//     console.log(cart)
//   }

//   const getData = () => {
//     fetch('data.json', {
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     })
//       .then((response) => {
//         return response.json()
//       })
//       .then((myJson) => {
//         setData(myJson)
//       })
//   }
//   useEffect(() => {
//     getData()
//   }, [])

//   return (
//     <>
//       <h1 className="text-2xl">Desserts</h1>
//       <Products addToCart={addToCart} data={data} />
//       <hr />
//       <Cart />
//       <div className="attribution">
//         Challenge by{' '}
//         <a href="https://www.frontendmentor.io?ref=challenge">
//           Frontend Mentor
//         </a>
//         . Coded by <a href="#">Dirk van Krieken</a>.
//       </div>
//     </>
//   )
// }

// export default App
import { useState } from 'react'
import { useEffect } from 'react'
import Cart from './components/Cart'
import Products from './components/Products'

function App() {
  const [data, setData] = useState([])
  const [cart, updateCart] = useState([])
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        setData(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <h1 className="text-2xl">Desserts</h1>
      <Products cart={cart} updateCart={updateCart} data={data} />
      <Cart cart={cart} />
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Dirk van Krieken</a>.
      </div>
    </>
  )
}

export default App
