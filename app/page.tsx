import HomeSection from "@/components/home-section"
import FooterSection from "@/components/footer-section"
import { siteConfig } from "@/config/site"
import FaqSection from "@/components/faq-section"

export default function IndexPage() {
  return (
    <><HomeSection></HomeSection>
    <FaqSection></FaqSection>
    <FooterSection items={siteConfig.mainNav}></FooterSection></>
  )
}
