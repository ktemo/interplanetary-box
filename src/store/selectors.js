import { useContext } from 'react'
import shallow from 'zustand/shallow'
import { StoreContext } from './zustandProvider'

export const useStore = (selector, eqFn) => {
  const store = useContext(StoreContext)
  const values = store(selector, eqFn)

  return values
}

export const useSelectors = () => {
  const { userFiles, loadUserFiles } = useStore(
    (store) => ({
      userFiles: store.userFiles,
      loadUserFiles: store.loadUserFiles,
    }),
    shallow
  )

  return { userFiles, loadUserFiles }
}