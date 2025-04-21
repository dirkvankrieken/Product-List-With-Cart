export default function Cart({ cart, updateCart, setOverlay }) {
  function calculateCartAmmount() {
    let ammount = 0
    cart.map((item) => (ammount += item.quantity))
    return ammount
  }
  function calculateTotal() {
    let total = 0
    cart.map((item) => (total += item.quantity * item.price))
    return total
  }
  function removeItem(item) {
    let cartItem
    for (let i = 0; i < cart.length; i++) {
      cartItem = cart[i]
      if (cartItem.name === item.name) {
        updateCart(cart.filter((cartItem) => cartItem.name != item.name))
      }
    }
  }
  function confirmClicked() {
    console.log('Confirm clicked')
    setOverlay(true)
  }
  const cartAmmount = calculateCartAmmount()
  let cartContent
  if (cartAmmount == 0) {
    cartContent = (
      <>
        <img
          className="m-auto my-5"
          src="./images/illustration-empty-cart.svg"
          alt="illustration of an empty cart"
        />
        <p className="text-sm my-5 text-center font-medium text-rose-500">
          Your added items will appear here.
        </p>
      </>
    )
  } else {
    cartContent = (
      <>
        {cart.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between my-4">
              <div className="text-sm">
                <h2 className="font-medium my-2">{item.name}</h2>
                <span className="font-medium text-text-color">
                  {item.quantity}
                </span>
                <span className="text-rose-500 mx-3">
                  @ $ {item.price.toFixed(2)}
                </span>
                <span className="text-rose-500 font-medium">
                  $ {(item.quantity * item.price).toFixed(2)}
                </span>
              </div>
              <img
                className="border-2 border-icon-remove rounded-full p-0.5 w-5 h-5 self-center"
                onClick={() => removeItem(item)}
                src="./images/icon-remove-item.svg"
              />
            </div>
            <hr className="border-rose-100" />
          </div>
        ))}
        <div className="flex justify-between my-5">
          <span className="self-center">Order Total</span>
          <span className="text-2xl font-black">
            ${calculateTotal().toFixed(2)}
          </span>
        </div>
        <div className="flex gap-3 py-3 my-5 px-5 rounded-lg bg-background">
          <img src="./images/icon-carbon-neutral.svg" />
          <p>
            This is a <span className="font-medium">carbon-neutral</span>{' '}
            delivery
          </p>
        </div>
        <button
          onClick={confirmClicked}
          className="bg-red text-white text-lg mx-auto block py-3 w-full px-5 py-2 rounded-full hover:cursor-pointer"
        >
          Confirm Order
        </button>
      </>
    )
  }
  return (
    <div className="bg-white p-5 my-5 rounded-lg md:w-100">
      <h2 className="text-2xl font-semibold text-text-color md:text-sm md:font-bold">
        Your Cart ({cartAmmount})
      </h2>
      {cartContent}
    </div>
  )
}
