import { Box, styled } from "@mui/material"

type DecorProps = {
  color: string
}

const AvatarWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
})

const StyledImage = styled('img')({
  width: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
})

const FirstDecorElem = styled('img')<DecorProps>(({ color }) => ({
  position: 'absolute',
  left: '-300px',
  bottom: '-100px',
  zIndex: -1,
  height: '300px',
  width: '600px',
  borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
  backgroundColor: color,
  opacity: 0.4,
  transform: 'rotate(-120deg)'
}))

const SecondDecorElem = styled('img')<DecorProps>(({ color }) => ({
  position: 'absolute',
  right: '-200px',
  top: '-50px',
  zIndex: -1,
  height: '300px',
  width: '600px',
  borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
  backgroundColor: color,
  opacity: 0.4,
  transform: 'rotate(60deg)'
}))

const Avatar = () => {
  const mockImg = 'https://m.economictimes.com/thumb/msid-94853998,width-1200,height-900,resizemode-4,imgsize-65264/brad-pitt-and-angelina-jolie.jpg'

  return (
    <AvatarWrapper>
      <StyledImage src={mockImg} />
      <FirstDecorElem color="#7af0ff" />
      <SecondDecorElem color="#fcb721" />
    </AvatarWrapper>
  )
}

export default Avatar