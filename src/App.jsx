import { useState } from 'react'
import { useEffect } from 'react'
import Cart from './components/Cart'
import Product from './components/Product'
import OrderConfirmation from './components/OrderConfirmation'

function App() {
  const [data, setData] = useState([])
  const [cart, updateCart] = useState([])
  const [overlay, setOverlay] = useState(false)
  let showOverlay
  const getData = () => {
    fetch('/data.json', {
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
  if (overlay) {
    showOverlay = (
      <OrderConfirmation
        cart={cart}
        updateCart={updateCart}
        setOverlay={setOverlay}
      />
    )
  }
  return (
    <>
      <main className="p-5 max-w-300 mx-auto">
        <div className="flex flex-col lg:flex-row md:justify-between">
          <div>
            <h1 className="text-4xl font-bold pb-10 md:pb-5">Desserts</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {data.map((item, index) => (
                <Product
                  key={index}
                  data={data}
                  updateCart={updateCart}
                  item={item}
                  cart={cart}
                />
              ))}
            </div>
          </div>
          <Cart cart={cart} updateCart={updateCart} setOverlay={setOverlay} />
        </div>
        <div className="text-center attribution my-10">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . <br />
          Coded by{' '}
          <a href="https://github.com/dirkvankrieken">Dirk van Krieken</a>.
        </div>
      </main>
      {showOverlay}
    </>
  )
}

export default App
