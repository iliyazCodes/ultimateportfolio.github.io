import Contact from "../../components/contact"
import Work from "../../components/work"
import Experience from "../../components/experience"
import About from "../../components/about"
import { LINK_TYPES } from "../data/constants"

export default [
  {
    label: "About",
    href: "about",
    id: "nav-list-item-0",
    type: LINK_TYPES.LINK,
    icon: "circle-info",
    component: About,
    title: "Looking for a Web Developer?",
  },
  {
    label: "Skills",
    href: "experience",
    id: "nav-list-item-1",
    type: LINK_TYPES.LINK,
    icon: "briefcase",
    component: Experience,
    title: "My Skills & Experience"
  },
  {
    label: "Work",
    href: "work",
    id: "nav-list-item-2",
    type: LINK_TYPES.LINK,
    icon: "keyboard",
    component: Work,
    title: "Some Things I’ve Built"
  },
  {
    label: "Contact",
    href: "contact",
    id: "nav-list-item-3",
    type: LINK_TYPES.LINK,
    icon: "address-card",
    component: Contact,
    title: "Get in touch"
  },
  {
    label: "Resume",
    id: "nav-download-item-0",
    type: LINK_TYPES.BUTTON,
    href: "/files/Iliyaz's Resume.pdf"
  },
]