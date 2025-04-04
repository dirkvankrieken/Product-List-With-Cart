// export default function Cart() {
//   return (
//     <>
//       <h1>Your Cart (Quantity)</h1>
//       <p>Your added items will appear here</p>
//       <hr />
//     </>
//   )
// }
export default function Cart({ cart }) {
  function calculateTotal() {
    let total = 0
    cart.map((item, index) => (total += item.price))
    return total
  }
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="border-2 flex justify-between">
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
      Total Price:
      {calculateTotal()}
    </div>
  )
}
