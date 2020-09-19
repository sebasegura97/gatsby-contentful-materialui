import { Box, Button, Typography } from "@material-ui/core"
import React from "react"
import Illustration from "../images/Portada.svg"
import CTA from "./CTA"
import SearchIcon from "@material-ui/icons/Search"

export default function Portada() {
  return (
    <Box
      position="relative"
      height="80vh"
      //   paddingTop={{ xs: 2, sm: 4, md: 8 }}
      //   paddingLeft={{ xs: 4 }}
      paddingLeft={{ xs: 2 }}
      paddingRight={{ xs: 2 }}
      maxWidth="1200px"
      margin="auto"
    >
      <Box maxWidth="700px">
        <Typography variant="h1" style={{ lineHeight: 0.8 }}>
          COMPRÁ TU AUTO{" "}
        </Typography>
        <Typography variant="subtitle1" style={{ marginLeft: 4, marginBottom: 24 }}>
          Te ofrecemos financiación y todas las facilidades para lograrlo
        </Typography>
        <CTA  startIcon={<SearchIcon />} onClick={() => console.log("click")}>
          Buscar
        </CTA>
      </Box>
      <Box
        zIndex="-1"
        width={{ xs: "75%", sm: "60%" }}
        position="absolute"
        bottom="0"
        right="0"
      >
        <Illustration />
      </Box>
    </Box>
  )
}
