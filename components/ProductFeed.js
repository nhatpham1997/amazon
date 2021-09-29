import Product from "./Product"

function ProductFeed({ products }) {
  return (
    <div>
      <h1>Product ...</h1>
      {products.map(({ id, title, price, description, category, image, rating }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  )
}

export default ProductFeed
