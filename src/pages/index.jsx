import * as React from "react"
import Layout from "../components/layout"
import { TopNav } from "../components/Nav"
import { About } from "../components/About"
import { Quote } from "../components/quote"
import { Contact } from "../components/Contact"
import { Footer } from "../components//Footer"
import { Header } from "../components/Header"
import { Instagram } from "../components/Instagram"
//import { Section } from "../components/Section"
import CookieConsent from "react-cookie-consent"


const IndexPage = () => {
  return (
  <Layout>
    <CookieConsent
      location="top"
      buttonText="Accept"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
    </CookieConsent>
    <TopNav />
    <Header />
    <About />
    <Quote />
    <Instagram />
    <Contact />
    <Footer />
  </Layout>
  )
}

export default IndexPage


