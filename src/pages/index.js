import { Typography } from "@material-ui/core"
import React from "react"
import Layout from "../components/Layout"
import Portada from "../components/Portada"
import SEO from "../components/SEO"
import Servicios from "../components/Servicios"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Portada />
      <Servicios />
      {/*<SectionServicios />
      <Nosotros />
      <Contacto /> */}
    </Layout>
  )
}

export default IndexPage
