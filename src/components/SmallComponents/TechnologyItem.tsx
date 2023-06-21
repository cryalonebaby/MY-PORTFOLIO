import { Box, styled } from '@mui/material'
import { TechnologyImage, TechnologyRating } from '..'

interface IProps {
  rating?: number,
  img: string
}

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100px',
  marginTop: 32
})

const TechnologyItem = ({ rating, img }: IProps) => {
  return (
    <StyledContainer>
      <TechnologyImage img={img} />
      {rating && <TechnologyRating rating={rating} />}
    </StyledContainer>
  )
}

export default TechnologyItem