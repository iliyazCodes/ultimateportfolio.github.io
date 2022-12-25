import { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { LOADER_TIME } from "../data/constants"

const LoaderContext = createContext({ isLoading: false })

export const useLoaderContext = () => useContext(LoaderContext)

const LoaderProvider = ({ children, initialLoad }) => {
  const [isLoading, setIsLoading] = useState(true)
  let openTime

  const show = () => {
    openTime = new Date().getTime()
    setIsLoading(true)
  }

  const hide = () => {
    const timeDifference = new Date().getTime() - openTime

    if (timeDifference <= LOADER_TIME / 2) {
      setTimeout(() => {
        setIsLoading(false)
      }, (LOADER_TIME / 2) - timeDifference)
      return
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (initialLoad) {
      setTimeout(() => {
        setIsLoading(false)
      }, LOADER_TIME)
    }
    return () => {
      setIsLoading(false)
    }
  }, [])

  return (
    <LoaderContext.Provider value={{ isLoading, show, hide }}>{children}</LoaderContext.Provider>
  )
}

LoaderProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  initialLoad: PropTypes.bool
}

export default LoaderProvider