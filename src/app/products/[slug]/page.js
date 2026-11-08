
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FavoriteButton from '@/components/FavoriteButton'

async function getProduct(id) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${id}`,
      { cache: 'no-store' }
    )

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export default async function ProductDetail({ params }) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="container detail-section">
      <Link href="/" className="back-link">
        ← Back to Products
      </Link>

      <div className="detail-container">
        <div className="detail-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="detail-image"
          />
        </div>

        <div className="detail-info">
          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <div className="rating">
            ★ {product.rating.rate} / 5
            <span>({product.rating.count} reviews)</span>
          </div>

          <h2 className="detail-price">
            ${product.price.toFixed(2)}
          </h2>

          <div className="detail-description">
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>

          <FavoriteButton productId={product.id} />
        </div>
      </div>
    </main>
  )
}
