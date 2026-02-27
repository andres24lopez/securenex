
import React, { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext()

function reducer(state, action){
  switch(action.type){
    case 'ADD': {
      const { product, qty } = action
      const existing = state.items.find(i => i.id === product.id)
      let items
      if(existing){
        items = state.items.map(i => i.id === product.id ? { ...i, qty: Math.min(i.qty + qty, 99) } : i)
      } else {
        items = [...state.items, { ...product, qty }]
      }
      return { ...state, items }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.id) }
    case 'QTY': {
      const { id, qty } = action
      return { ...state, items: state.items.map(i => i.id === id ? { ...i, qty: Math.max(1, Math.min(qty, 99)) } : i) }
    }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(reducer, { items: [] })

  const addToCart = (product, qty=1) => dispatch({ type: 'ADD', product, qty })
  const removeFromCart = (id) => dispatch({ type: 'REMOVE', id })
  const updateQty = (id, qty) => dispatch({ type: 'QTY', id, qty })
  const clearCart = () => dispatch({ type: 'CLEAR' })

  const totals = useMemo(() => {
    const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0)
    const taxes = subtotal * 0.12 // IVA 12% (ajusta según tu país)
    const shipping = subtotal > 1500 ? 0 : (state.items.length ? 59 : 0)
    const total = subtotal + taxes + shipping
    const count = state.items.reduce((s, i) => s + i.qty, 0)
    return { subtotal, taxes, shipping, total, count }
  }, [state.items])

  return (
    <CartContext.Provider value={{ items: state.items, addToCart, removeFromCart, updateQty, clearCart, totals }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
