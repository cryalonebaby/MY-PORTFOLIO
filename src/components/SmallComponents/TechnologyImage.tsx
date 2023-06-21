import { Box, styled } from '@mui/material'

interface IProps {
  img: string
}

const ImageWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
})

const StyledImage = styled('img')({
  width: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '10px',
})

const TechnologyImage = ({ img }: IProps) => {
  return (
    <ImageWrapper>
      <StyledImage src={img} />
    </ImageWrapper>
  )
}

export default TechnologyImage