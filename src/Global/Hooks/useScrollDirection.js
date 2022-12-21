import { useState, useEffect } from "react"
import { SCROLL_DIRECTIONS } from "../Data/Constants"

const useScrollDirection = ({ initialDirection, thresholdPixels, off } = {}) => {
  const [scrollDir, setScrollDir] = useState(initialDirection)

  useEffect(() => {
    const threshold = thresholdPixels || 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DIRECTIONS.DOWN : SCROLL_DIRECTIONS.UP)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    !off ? window.addEventListener("scroll", onScroll) : setScrollDir(initialDirection)
    return () => window.removeEventListener("scroll", onScroll)
  }, [initialDirection, thresholdPixels, off])

  return scrollDir
}

export default useScrollDirection