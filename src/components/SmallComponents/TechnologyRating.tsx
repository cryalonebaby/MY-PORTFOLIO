import { Box, styled } from '@mui/material'

type ItemProps = {
  filled: boolean,
  color: string
}

interface IProps {
  rating: number
}

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

const TechnologyRating = ({ rating }: IProps) => {

  const getFilledStatus = (index: number): boolean => {
    const status = index < rating
    return status;
  };

  return (
    <RateWrapper>
      {Array.from({ length: 5 }, (_, index) => (
        <RateItem filled={getFilledStatus(index)} color='#000' />
      ))}
    </RateWrapper>
  )
}

export default TechnologyRating