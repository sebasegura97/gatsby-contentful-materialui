import { Box, Typography } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import React from "react"
// import FondoHeader from "../icons/FondoHeader.js"
// import Logo from "../icons/Logo.js"
import Menu from "./Menu"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default function Header() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <AppBar position={matches ? "relative" : "fixed"}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          margin="auto"
        >
          <Box width={{ xs: 100, sm: 150 }}>
            {/* <Logo width="100%" fill="#333333" /> */}
            <Typography variant="h4"> Mónaco </Typography>
          </Box>
          <Menu />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
