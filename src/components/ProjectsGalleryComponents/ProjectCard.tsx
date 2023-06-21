import { Box, Typography, styled } from '@mui/material'
import { ProjectPreview } from '..'

interface IProps {
  title: string,
  img: string
}

const CardContainer = styled(Box)({
  width: '300px',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifySelf: 'center',
})

const CardTitle = styled(Typography)({
  fontSize: '22px',
  marginTop: '10px'
})

const ProjectCard = ({ title, img }: IProps) => {
  return (
    <CardContainer>
      <ProjectPreview coverHeight='80%' img={img} />
      <CardTitle>{title}</CardTitle>
    </CardContainer >
  )
}

export default ProjectCard