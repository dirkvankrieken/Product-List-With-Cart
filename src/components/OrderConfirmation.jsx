export default function OrderConfirmation({ cart, updateCart, setOverlay }) {
  function newOrderClicked() {
    updateCart([])
    setOverlay(false)
  }
  function calculateTotal() {
    let total = 0
    cart.map((item) => (total += item.quantity * item.price))
    return total
  }
  return (
    <div className="fixed inset-0 bg-black/50 z-50 md:flex md:flex-row md:justify-center md:items-center">
      <div className="bg-white fixed bottom-0 p-6 rounded-t-xl w-full max-h-screen overflow-y-auto md:max-w-130 md:bottom-auto">
        <img className="my-5" src="images/icon-order-confirmed.svg" />
        <h2 className="text-4xl font-bold">Order Confirmed</h2>
        <span className="text-rose-500 text-base/10">
          We hope you enjoy your food!
        </span>
        <div className="bg-background rounded-lg mt-5 px-6">
          {cart.map((item, index) => (
            <div className="" key={index}>
              <div className="py-3 flex justify-between">
                <div className="flex gap-5">
                  <img
                    className="h-16 rounded-lg self-center"
                    src={item.image.thumbnail}
                    alt={`thumbnail image of ${item.name}`}
                  />
                  <div className="text-sm self-center py-5">
                    <h2 className="font-medium mb-3">{item.name}</h2>
                    <span className="font-medium text-text-color">
                      {item.quantity}x
                    </span>
                    <span className="text-rose-500 mx-3">
                      @ $ {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <span className="font-medium self-center">
                  $ {(item.quantity * item.price).toFixed(2)}
                </span>
              </div>
              <hr className="border-rose-100" />
            </div>
          ))}
          <div className="flex justify-between py-5">
            <span className="self-center">Order Total</span>
            <span className="text-2xl font-black">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>
        </div>
        <button
          onClick={newOrderClicked}
          className="bg-red text-white text-lg mx-auto block py-3 w-full px-5 py-2 rounded-full hover:cursor-pointer"
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}
