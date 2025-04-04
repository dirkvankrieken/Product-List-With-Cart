// import { useState } from 'react'

export default function Button({ id, addToCart, data }) {
  //   const [number, setNumber] = useState(0)
  function handleClick() {
    addToCart(id)
    // setNumber(number + 1)
    // console.log(data)
  }
  return (
    <button
      onClick={addToCart}
      className="bg-white flex px-5 relative bottom-6 py-2 border-1 rounded-full hover:cursor-pointer"
    >
      <img src="./images/icon-add-to-cart.svg" />
      <span>Add to Cart</span>
    </button>
  )
}
