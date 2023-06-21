import { Box, Typography, IconButton, styled } from '@mui/material'
import { ProjectPreview, TechnologyItem } from '..'
import { Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

interface IProps {
  img: string,
  list: string[],
  repLink: string,
  deployLink: string
}

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const TitleContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 32,
  width: '100%',
})

const InnerContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '55%',
})

const PageCaption = styled(Typography)({
  fontSize: '32px'
})

const IconsWrapper = styled(Box)({
  display: 'flex',
  justifySelf: 'flex-end'
})

const PreviewWrapper = styled(Box)({
  width: '600px',
  height: '400px'
})

const SectionWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  marginTop: 32,
})

const SectionCaption = styled(Typography)({
  fontSize: '26px'
})

const DetailsList = styled('ul')({
  margin: 0,
  padding: 0,
  marginTop: 16
});

const DetailsListElement = styled('li')({
  position: 'relative',
  paddingLeft: '20px',
  '&::before': {
    content: '"*"',
    position: 'absolute',
    left: 0,
    color: '#000',
  },
});

const RowWrapper = styled(Box)({
  display: 'flex',
  gap: 32
})

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'black'
})

const ProjectInfo = ({ img, list, repLink, deployLink }: IProps) => {
  const mock1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'

  return (
    <StyledContainer>
      <TitleContainer>
        <InnerContainer>
          <PageCaption>Project</PageCaption>
          <IconsWrapper>
            <StyledLink to={repLink} target="_blank">
              <IconButton>
                <GitHubIcon sx={{ fill: 'black' }} />
              </IconButton>
            </StyledLink>
            <StyledLink to={deployLink} target="_blank">
              <IconButton>
                <LanguageIcon sx={{ fill: 'black' }} />
              </IconButton>
            </StyledLink>
          </IconsWrapper>
        </InnerContainer>
      </TitleContainer>
      <PreviewWrapper>
        <ProjectPreview coverHeight='100%' img={img} />
      </PreviewWrapper>
      <SectionWrapper>
        <SectionCaption>Functionality</SectionCaption>
        <DetailsList>
          {list.map((item, index) => (
            <DetailsListElement key={index}>{item}</DetailsListElement>
          ))}
        </DetailsList>
      </SectionWrapper>
      <SectionWrapper>
        <SectionCaption>Technologies</SectionCaption>
        <RowWrapper>
          <TechnologyItem img={mock1} />
          <TechnologyItem img={mock1} />
          <TechnologyItem img={mock1} />
          <TechnologyItem img={mock1} />
        </RowWrapper>
      </SectionWrapper>
    </StyledContainer>
  )
}

export default ProjectInfo