import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import PropTypes from "prop-types"
import React from "react"
// import "./main.css"
import Footer from "./Footer"
import Header from "./Header"
import Viewport from "./Viewport"
import { Box } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2B2D42",
    },
    secondary: {
      main: "#D90429",
    },
    text: {
      primary: "#2B2D42",
      secondary: "#8D99AE",
    },
  },
  typography: {
    fontSize: 18,
    allVariants: {
      fontFamily: "Roboto",
    },
    h1: {
      fontFamily: "Bebas Neue",
    },
    h2: {
      fontFamily: "Bebas Neue",
    },
    h3: {
      fontFamily: "Bebas Neue",
    },
    h4: {
      fontFamily: "Bebas Neue",
    },
  },
})

const TopLayout = ({ children }) => {
  return (
    <>
      <Viewport />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}

const MyLayout = ({ children }) => {
  return (
    <TopLayout>
      <Header />
      <Box
        // maxWidth={{ xs: "100%", sm: "1400px" }}
        maxWidth={{ xs: "100%" }}
        margin={{ sm: "auto" }}
        position="relative"
        // style={{
        //   // boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.75)",
        //   backgroundColor: "white",
        // }}
      >
        <Box
          component="main"
          minHeight="85vh"
          marginTop={{ xs: "15vh", sm: "60px" }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </TopLayout>
  )
}

MyLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MyLayout
