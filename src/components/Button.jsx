export default function Button({ id, cart, item, updateCart, data }) {
  const findItem = cart.find((element) => element.name == item.name)
  function handleClickDecrease() {
    let newCart = [...cart]
    findItem.quantity--
    if (findItem.quantity == 0) {
      newCart = cart.filter((cartItem) => cartItem.name != item.name)
    }
    updateCart(newCart)
  }

  function handleClickIncrease() {
    let newCart = []
    if (findItem) {
      newCart = [...cart]
      newCart.find((element) => element.name == item.name).quantity++
    } else {
      item.quantity = 1
      newCart = [...cart, item]
    }
    updateCart(newCart)
  }
  if (findItem) {
    return (
      <button className="bg-red text-white text-sm font-medium py-3 w-40 flex justify-between px-5 relative bottom-6 border-1 border-transparent rounded-full hover:cursor-pointer">
        <img
          onClick={handleClickDecrease}
          className="border-1 w-5 h-5 p-1 border-white rounded-full self-center"
          src="./images/icon-decrement-quantity.svg"
        />
        <span>{item.quantity}</span>
        <img
          onClick={handleClickIncrease}
          className="border-1 w-5 h-5 p-1 border-white rounded-full self-center"
          src="./images/icon-increment-quantity.svg"
        />
      </button>
    )
  } else {
    return (
      <button
        onClick={handleClickIncrease}
        className="bg-white flex gap-2 justify-center text-sm font-medium py-3 w-40 relative bottom-6 border-1 box-border border-gray-400 rounded-full hover:cursor-pointer"
      >
        <img src="./images/icon-add-to-cart.svg" />
        <span>Add to Cart</span>
      </button>
    )
  }
}
