import { createContext } from 'react'

export const StoreContext = createContext(null)

export const StoreProvider = ({ children, store }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}