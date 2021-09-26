import React from "react"

import Faqs from "../components/Faqs/FaqsList";
import Layout from "../components/layout"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1><center> FAQs</center></h1>

    <Faqs />


    <Footer />
  </Layout>
)

export default IndexPage
