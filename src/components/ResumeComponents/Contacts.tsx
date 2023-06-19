import { Box, styled } from '@mui/material'

import { ContactsElement } from '..'
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  gap: 16,
  marginTop: '20px'
})

const Contacts = () => {
  return (
    <ContactsWrapper>
      <ContactsElement
        text='+380 66 191 25 20'
        Icon={LocalPhoneIcon}
      />
      <ContactsElement
        text='cryalonebabyyy'
        Icon={GitHubIcon}
      />
      <ContactsElement
        text='cryalonebabyyy@gmail.com'
        Icon={AlternateEmailIcon}
      />
    </ContactsWrapper>
  )
}

export default Contacts