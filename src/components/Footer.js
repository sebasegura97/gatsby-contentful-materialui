import React from "react"
import { Grid, Box, Typography, makeStyles, useTheme } from "@material-ui/core"
// import Logo from "../icons/Logo.js"
import SocialLinks from "./SocialLinks"
import { useStaticQuery } from "gatsby"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
  },
  link: {
    color: "white",
  },
}))

export default function Footer() {
  const classes = useStyles()
  const theme = useTheme()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            address
            brand
            contactEmail
          }
        }
      }
    `
  )

  const { address, brand, contactEmail } = site.siteMetadata

  return (
    <Box className={classes.container} padding={3} color="white">
      <Box marginBottom={{ xs: 2 }}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            {/* <Logo width={120} stroke="white" fill="white" /> */}
            <Typography variant="h4"> Mónaco </Typography>
          </Grid>
          <Grid item>
            <Box width={{ xs: 200 }} display="flex" flexDirection="row">
              <SocialLinks
                iconBgColor="white"
                iconStrokeColor={theme.palette.primary.dark}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="body2">{address}</Typography>
      <a className={classes.link} href={`mailto:${contactEmail}`}>
        <Typography variant="body2">{contactEmail}</Typography>
      </a>
      <Typography variant="caption">
        © {brand} {new Date().getFullYear()},{` `}
        <span>Todos los derechos reservados</span>
      </Typography>
    </Box>
  )
}
