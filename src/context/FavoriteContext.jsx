
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const FavoriteContext = createContext()

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')

    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites))
      } catch {
        setFavorites([])
      }
    }

    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }, [favorites, isLoaded])

  const toggleFavorite = (productId) => {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(productId)) {
        return previousFavorites.filter((id) => id !== productId)
      }

      return [...previousFavorites, productId]
    })
  }

  const isFavorite = (productId) => {
    return favorites.includes(productId)
  }

  return (
    <FavoriteContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoriteContext)

  if (!context) {
    throw new Error('useFavorites must be used inside FavoriteProvider')
  }

  return context
}
