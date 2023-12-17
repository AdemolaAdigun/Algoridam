export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Algoridam",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "Contact",
      href: "/#contact",
    }
  ],
  links: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/algoridam/",
    github: "",
    docs: "",
  },
}
