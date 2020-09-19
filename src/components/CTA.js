import { Button, makeStyles } from "@material-ui/core"
import { useStaticQuery } from "gatsby"
import React from "react"

const useStyles = makeStyles(theme => ({
  button: {
    background: "rgb(217,4,41)",
    background:
      "linear-gradient(315deg, rgba(217,4,41,1) 0%, rgba(255,135,147,1) 100%)",
    borderRadius: "28px",
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    color: "white",
    textTransform: "uppercase",
    fontWeight: 100,
    fontSize: 22,
    boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.25)",
    "&:hover": {
      boxShadow: "none",
    },
  },
}))

export default function CTA({ children, ...rest }) {
  const classes = useStyles()
  return (
    <Button className={classes.button} {...rest}>
      {" "}
      {children}
    </Button>
  )
}
