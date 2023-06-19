import { Typography, styled } from '@mui/material'

interface IProps {
  text: string,
  color: string
}

type StyledProps = {
  color: string
}

const StyledCaption = styled(Typography)<StyledProps>(({ color }) => ({
  fontSize: '24px',
  color: color,
}))

const Caption = ({ text, color }: IProps) => {
  return <StyledCaption color={color}>{text}</StyledCaption>
}

export default Caption