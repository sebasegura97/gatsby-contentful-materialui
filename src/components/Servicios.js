import { Box, Button, Grid, Typography, useTheme } from "@material-ui/core"
import React from "react"
import Financiacion from "../Icons/Financiacion.svg"
import Posventa from "../Icons/Posventa.svg"
import VendeTuUsado from "../Icons/VendeTuUsado.svg"

const servicios = [
  {
    title: "Servicio posventa",
    description: "Garantía de funcionamiento, para tu tranquilidad.",
    icon: <Posventa />,
    link: "",
  },
  {
    title: "Financiación",
    description: "Planes UVA y financiación propia, te ayudamos a invertir.",
    icon: <Financiacion />,
    link: "",
  },
  {
    title: "Servicio posventa",
    description: "Ofrecemos efectivo inmediato, cuotas o consignación.",
    icon: <VendeTuUsado />,
    link: "",
  },
]

function CardServicio({ servicio }) {
  const theme = useTheme()
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      padding="20px 8px 20px 8px"
      style={{
        boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.25)",
        borderRadius: 16,
      }}
    >
      <Typography variant="h4"> {servicio.title} </Typography>
      <Box maxWidth={{ xs: "30vw" }}>{servicio.icon}</Box>
      <Typography align="center" variant="subtitle2">
        {servicio.description}
      </Typography>
      <Button variant="contained" color="secondary">
        {" "}
        Ver mas{" "}
      </Button>
    </Box>
  )
}

export default function Servicios() {
  return (
    <Box paddingRight={{ xs: "5vw" }} paddingLeft={{ xs: "5vw" }}>
      <Grid container spacing={4}>
        {servicios.map(servicio => (
          <Grid item xs={12} md={4}>
            <CardServicio servicio={servicio} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
