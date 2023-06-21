import { Box, styled } from '@mui/material'

type ContainerProps = {
  coverHeight: string
}

interface IProps {
  coverHeight: string,
  img: string
}

const ImageContainer = styled(Box)<ContainerProps>(({ coverHeight }) => ({
  width: '100%',
  height: coverHeight,
  border: '1px solid black',
}))

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

const ProjectPreview = ({ coverHeight, img }: IProps) => {
  return (
    <ImageContainer coverHeight={coverHeight}>
      <StyledImage src={img} />
    </ImageContainer>
  )
}

export default ProjectPreview