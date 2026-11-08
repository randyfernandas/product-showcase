
'use client'

import { useFavorites } from '@/context/FavoriteContext'

export default function FavoriteButton({ productId }) {
  const { toggleFavorite, isFavorite } = useFavorites()

  const favorite = isFavorite(productId)

  return (
    <button
      onClick={() => toggleFavorite(productId)}
      className={`favorite-button ${favorite ? 'active' : ''}`}
      aria-pressed={favorite}
    >
      {favorite ? '♥ Remove from Favorite' : '♡ Add to Favorite'}
    </button>
  )
}
