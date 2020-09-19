import PropTypes from "prop-types"
import React from "react"
import IconFacebook from "../icons/Facebook.svg"
import IconInstagram from "../icons/Instagram.svg"
import IconPhone from "../icons/Phone.svg"
import IconWhatsapp from "../icons/Whatsapp.svg"
import IconMail from "../icons/Mail.svg"
import PopUp from "../animations/PopUp.js"
import { useStaticQuery } from "gatsby"
import { Box } from "@material-ui/core"

function SocialLinks({
  direction,
  whatsapp,
  email,
  facebook,
  instagram,
  phone,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contactEmail
            facebook
            instagram
            phone
            whatsapp
            whatsappApiLink
          }
        }
      }
    `
  )

  const data = site.siteMetadata

  return (
    <Box display="flex" justifyContent="center" flexDirection={direction}>
      <Box padding="4px">
        <PopUp restartOnLeave={false} transitionDelay={0}>
          {whatsapp && (
            <a target="__blank" href={data.whatsappApiLink}>
              <IconWhatsapp />
            </a>
          )}
        </PopUp>
      </Box>
      <Box padding="4px">
        <PopUp restartOnLeave={false} transitionDelay={0.2}>
          {instagram && (
            <a target="__blank" href={data.instagram}>
              <IconInstagram />
            </a>
          )}
        </PopUp>
      </Box>
      <Box padding="4px">
        <PopUp>
          {facebook && (
            <a target="__blank" href={data.facebook}>
              <IconFacebook />
            </a>
          )}
        </PopUp>
      </Box>
      <Box padding="4px">
        <PopUp restartOnLeave={false} transitionDelay={0.2}>
          {email && (
            <a target="__blank" href={`mailto:${data.contactEmail}`}>
              <IconMail />
            </a>
          )}
        </PopUp>
      </Box>
      <Box padding="4px">
        <PopUp restartOnLeave={false} transitionDelay={0.2}>
          {phone && (
            <a target="__blank" href={`tel:${data.phone}`}>
              <IconPhone />
            </a>
          )}
        </PopUp>
      </Box>
    </Box>
  )
}

SocialLinks.propTypes = {
  whatsapp: PropTypes.bool,
  facebook: PropTypes.bool,
  instagram: PropTypes.bool,
  phone: PropTypes.bool,
  email: PropTypes.bool,
  iconBgColor: PropTypes.string,
  iconStrokeColor: PropTypes.string,
  direction: PropTypes.oneOf(["row", "column"]),
}

SocialLinks.defaultProps = {
  whatsapp: true,
  facebook: true,
  instagram: true,
  email: true,
  phone: true,
  direction: "row",
}

export default SocialLinks
