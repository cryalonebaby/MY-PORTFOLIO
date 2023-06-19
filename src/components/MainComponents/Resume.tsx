import { Box, Typography, styled } from "@mui/material"
import { Avatar, Caption, Contacts, Education, WorkExperience, Technologies } from '..'

const WrapperContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
})

const ContainerCaption = styled(Typography)({
  textAlign: 'center',
  fontSize: '30px'
})

const ResumeWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const ResumeHead = styled(Box)({
  display: 'flex',
})

const ResumeHeadLeft = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  padding: '0 30px',
  maxWidth: '50%',
})

const ResumeHeadRight = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
})

const ResumeBottom = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
})

const Resume = () => {
  return (
    <WrapperContainer>
      <ContainerCaption>Resume</ContainerCaption>
      <ResumeWrapper>
        <ResumeHead>
          <ResumeHeadLeft>
            <Avatar />
            <Caption
              text='Nikita Yurchenko'
              color='#000'
            />
            <Contacts />
          </ResumeHeadLeft>
          <ResumeHeadRight>
            <Caption
              text='Junior Full-Stack Developer'
              color='#000'
            />
            <WorkExperience />
            <Education />
          </ResumeHeadRight>
        </ResumeHead>
        <ResumeBottom>
          <Technologies />
        </ResumeBottom>
      </ResumeWrapper>
    </WrapperContainer >
  )
}

export default Resume