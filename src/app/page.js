
import ProductCard from '@/components/ProductCard'

async function getProducts() {
  try {
    const response = await fetch(
      'https://fakestoreapi.com/products',
      { cache: 'no-store' }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    const products = await response.json()

    return products.slice(0, 5)
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="hero-label">WELCOME TO SHOPSPHERE</p>

          <h1>
            Discover Products
            <br />
            <span>Made for You.</span>
          </h1>

          <p className="hero-description">
            Explore our curated collection of products
            and find something you love.
          </p>
        </div>
      </section>

      <section className="container products-section">
        <div className="section-heading">
          <div>
            <p className="section-label">OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>

          <p className="product-count">
            {products.length} Products
          </p>
        </div>

        {products.length === 0 ? (
          <p className="error-message">
            Unable to load products. Please try again later.
          </p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
