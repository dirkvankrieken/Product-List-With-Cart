import Button from './Button'

export default function Product({ updateCart, data, cart, item }) {
  let productImage
  if (cart.find((element) => element.name == item.name)) {
    productImage = (
      <img
        className="rounded-xl border-3 border-red md:h-50 object-cover"
        src={item.image.mobile}
        alt={`image of ${item.name}`}
      />
    )
  } else {
    productImage = (
      <img
        className="rounded-xl border-3 border-transparent md:h-50 object-cover"
        src={item.image.mobile}
        alt={`image of ${item.name}`}
      />
    )
  }
  return (
    <div className="my-2">
      {productImage}
      <div className="flex flex-col items-center h-8">
        <Button updateCart={updateCart} data={data} cart={cart} item={item} />
      </div>
      <span className="text-sm text-rose-500">{item.category}</span>
      <h2 className="text-md font-medium">{item.name}</h2>
      <span className="text-text-color font-medium">
        ${item.price.toFixed(2)}
      </span>
    </div>
  )
}
