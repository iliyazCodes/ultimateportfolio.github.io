import ScrollReveal from "scrollreveal"

const isSSR = typeof window === "undefined"
const scrollReveal = isSSR ? null : ScrollReveal()

export const scrollToEl = (el, offset = -100) => {
  if (!el) {
    return
  }

  const y = el.getBoundingClientRect().top + window.pageYOffset + offset
  window.scrollTo({ top: y, behavior: "smooth" })
}

export default scrollReveal