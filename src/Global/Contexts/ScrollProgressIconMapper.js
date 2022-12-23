import { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const ProgressIconContext = createContext()

export const useProgressIconContext = () => useContext(ProgressIconContext)

const ProgressIconProvider = ({ children }) => {
  const [iconRefs, setIconRefs] = useState([])
  const updateIconRefs = (ref, id) => {
    setIconRefs((prev) => [...prev, { id, ref: ref }])
  }

  useEffect(() => {
    return () => {
      setIconRefs([])
    }
  }, [])
  
  return (
    <ProgressIconContext.Provider value={{ iconRefs, updateIconRefs }}>{children}</ProgressIconContext.Provider>
  )
}

ProgressIconProvider.propTypes = {
  children: PropTypes.element
}

export default ProgressIconProvider