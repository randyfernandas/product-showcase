
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        href={`/products/${product.id}`}
        className="product-image-container"
      >
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3 className="product-title">{product.title}</h3>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="details-button"
        >
          View Details
        </Link>

        <FavoriteButton productId={product.id} />
      </div>
    </article>
  )
}
