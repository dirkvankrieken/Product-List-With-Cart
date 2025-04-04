import Button from './Button'

export default function Product({
  id,
  addToCart,
  data,
  image,
  name,
  category,
  price,
}) {
  return (
    <div>
      <img src={image.mobile} alt={`image of ${name}`} />
      <div className="flex flex-col items-center">
        <Button id={id} addToCart={addToCart} data={data} />
      </div>
      <h2 className="text-xl">{name}</h2>
      {category}
      <br />
      <span className="">{price}</span>
    </div>
  )
}
