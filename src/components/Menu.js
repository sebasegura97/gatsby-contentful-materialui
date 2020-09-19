import React from "react"
import { Box, IconButton, Typography } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AccountBalanceIcon from "@material-ui/icons/AccountBalance"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import DriveEtaIcon from "@material-ui/icons/DriveEta"
import HomeIcon from "@material-ui/icons/Home"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import StoreIcon from "@material-ui/icons/Store"

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  menuLabel: {
    marginLeft: theme.spacing(2),
  },
}))

const menu = [
  {
    label: "Inicio",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    label: "Financiacion",
    icon: <AccountBalanceIcon />,
    path: "/",
  },
  {
    label: "Usados",
    icon: <DriveEtaIcon />,
    path: "/",
  },
  {
    label: "0 kilometros",
    icon: <CardGiftcardIcon />,
    path: "/",
  },
  {
    label: "Vendé tu usado",
    icon: <StoreIcon />,
    path: "/",
  },
  {
    label: "Contacto",
    icon: <MailIcon />,
    path: "/",
  },
]

export default function DrawerMenu() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const toggleDrawer = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setOpen(!open)
  }

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
      className={classes.list}
    >
      <List style={{ paddingTop: 0 }}>
        <Box
          paddingRight={4}
          paddingLeft={2}
          paddingTop={2}
          paddingBottom={2}
          style={{ background: theme.palette.primary.main, color: "white" }}
        >
          <Typography variant="h4" color="inherit">
            Mónaco
          </Typography>
        </Box>
        <Divider />
        {menu.map((item, index) => (
          <ListItem button key={index}>
            {item.icon}
            <ListItemText className={classes.menuLabel} primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <React.Fragment>
        <IconButton style={{ color: "white" }} onClick={toggleDrawer()}>
          <MenuIcon color="inherit" />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer()}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
