export default function OrderConfirmation({ cart }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl">
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
      </div>
    </div>
  )
}
