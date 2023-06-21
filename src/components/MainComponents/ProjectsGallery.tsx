import { Box, Typography, styled } from '@mui/material'
import { ProjectCard } from '..'

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const PageCaption = styled(Typography)({
  fontSize: '26px',
  marginBottom: 32
})

const StyledGallery = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  width: '100%',
  rowGap: '30px'
})

const ProjectsGallery = () => {
  const mockImg = 'https://repository-images.githubusercontent.com/343068723/ba7551c4-808a-4c1f-96a4-6acf0d27ef4c'

  return (
    <StyledContainer>
      <PageCaption>Projects</PageCaption>
      <StyledGallery>
        <ProjectCard title='project 1' img={mockImg} />
        <ProjectCard title='project 2' img={mockImg} />
        <ProjectCard title='app 3' img={mockImg} />
        <ProjectCard title='test app' img={mockImg} />
      </StyledGallery>
    </StyledContainer>
  )
}

export default ProjectsGallery