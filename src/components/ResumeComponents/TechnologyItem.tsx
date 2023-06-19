import { Box, styled } from '@mui/material'

type ItemProps = {
  filled: boolean,
  color: string
}

interface IProps {
  rating: number,
  img: string
}

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100px',
  marginTop: 32
})

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
  borderRadius: '10px'
})

const RateWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: 3,
  marginTop: 8
})

const RateItem = styled(Box)<ItemProps>(({ filled, color }) => ({
  height: '8px',
  width: '25px',
  border: `2px solid ${color}`,
  backgroundColor: filled ? color : 'transparent',
  borderRadius: 3
}))

const TechnologyItem = ({ rating, img }: IProps) => {

  const getFilledStatus = (index: number): boolean => {
    const status = index < rating
    return status;
  };

  return (
    <StyledContainer>
      <ImageWrapper>
        <StyledImage src={img} />
      </ImageWrapper>
      <RateWrapper>
        {Array.from({ length: 5 }, (_, index) => (
          <RateItem filled={getFilledStatus(index)} color='#000' />
        ))}
      </RateWrapper>
    </StyledContainer>
  )
}

export default TechnologyItem