// import Product from './Product'

// export default function Products({ addToCart, data }) {
//   return (
//     <div className="m-10">
//       {data.map((item, index) => {
//         return (
//           <Product
//             key={index}
//             data={data}
//             addToCart={addToCart}
//             id={index}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//             category={item.category}
//           />
//         )
//       })}
//     </div>
//   )
// }
import { useState } from 'react'

export default function Products({ data, cart, updateCart }) {
  //   const [cart, updateCart] = useState([])
  const buttonClicked = (item) => {
    updateCart([...cart, item])
    console.log(cart)
  }
  return (
    <div className="border-2 flex">
      {data.map((item, index) => (
        <div
          className="flex flex-col w-full justify-between border-2 p-2 m-2"
          key={index}
        >
          <h1>{item.name}</h1>
          <span>$ {item.price}</span>
          <button
            onClick={() => buttonClicked(item)}
            className="border-2 p-2 m-2"
          >
            ADD to cart
          </button>
        </div>
      ))}
    </div>
  )
}
