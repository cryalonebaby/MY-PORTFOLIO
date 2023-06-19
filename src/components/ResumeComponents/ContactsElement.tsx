import { Box, Typography, styled } from '@mui/material'
import { SvgIconComponent } from "@mui/icons-material";

interface IProps {
  text: string,
  Icon: SvgIconComponent
}

const StyledContactsElement = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 16
})

const ContractsText = styled(Typography)({
  fontSize: '16px',
  fontWeight: 300
})

const ContactsElement = ({ text, Icon }: IProps) => {
  return (
    <StyledContactsElement>
      <Icon />
      <ContractsText>{text}</ContractsText>
    </StyledContactsElement>
  )
}

export default ContactsElement