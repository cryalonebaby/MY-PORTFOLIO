import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"
import { Link } from "react-router-dom"
import { Socials } from "../../social"
import { ISocials } from "../../interfaces"
import { Logo } from '..'

const StyledCopyright = styled(Typography)({

})

const ContactsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  gap: 4
})

const ContactsTitle = styled(Typography)({

})

const ContactsList = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 16
})

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'white'
})

const Footer = () => {

  return (
    <AppBar position="static" sx={{ boxShadow: 0, paddingY: 2 }}>
      <Toolbar sx={{ marginX: 4, color: '#dce8e3', textShadow: '1px 0px 1px black', fontSize: '20px' }}>
        <StyledCopyright>© 2023 AppPortfolio. All right reserved.</StyledCopyright>
        <ContactsWrapper>
          <ContactsTitle>Social</ContactsTitle>
          <ContactsList>
            {
              Socials.map((social: ISocials) => (
                <StyledLink key={social.path} to={social.path} target="_blank">
                  <social.icon />
                </StyledLink>
              ))
            }
          </ContactsList>
        </ContactsWrapper>
        <Logo />
      </Toolbar>
    </AppBar>
  )
}

export default Footer