import { Box, Typography, styled } from "@mui/material";

interface IProps {
  title: string;
  companyName: string;
  location: string;
  date: string;
  position: string;
  description: string[];
  achievements?: string[];
}

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignSelf: 'flex-start',
  width: '100%',
});

const StyledCaption = styled(Typography)({
  fontSize: '20px',
});

const StyledSectionWrapper = styled(Box)({
  display: 'flex',
  gap: 32,
});

const StyledSectionLeft = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const StyledSectionRight = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
});

const StyledBlockName = styled(Typography)({
  fontSize: '18px',
});

const StyledBlockSpan = styled(Typography)({
  fontSize: '15px',
});

const StyledBlockAdditional = styled(Typography)({
  fontSize: '17px',
});

const StyledList = styled('ul')({
  margin: 0,
  padding: 0,
});

const StyledListCaption = styled(Typography)({
  fontSize: '17px',
  marginTop: '10px',
});

const StyledListElement = styled('li')({
  position: 'relative',
  paddingLeft: '20px',
  '&::before': {
    content: '"-"',
    position: 'absolute',
    left: 0,
    color: '#000',
  },
});

const Section = ({
  title,
  companyName,
  location,
  date,
  position,
  description,
  achievements,
}: IProps) => {
  return (
    <StyledContainer>
      <StyledCaption>{title}</StyledCaption>
      <StyledSectionWrapper>
        <StyledSectionLeft>
          <StyledBlockName>{companyName}</StyledBlockName>
          <StyledBlockSpan>{location}</StyledBlockSpan>
          <StyledBlockAdditional>{date}</StyledBlockAdditional>
        </StyledSectionLeft>
        <StyledSectionRight>
          <StyledBlockName>{position}</StyledBlockName>
          <StyledBlockSpan>{description.join(', ')}</StyledBlockSpan>

          <StyledListCaption>{title === 'Education' ? 'Skills' : 'Duties'}</StyledListCaption>
          <StyledList>
            {description.map((item, index) => (
              <StyledListElement key={index}>{item}</StyledListElement>
            ))}
          </StyledList>

          {achievements && achievements.length > 0 && (
            <>
              <StyledListCaption>Achievements:</StyledListCaption>
              <StyledList>
                {achievements.map((item, index) => (
                  <StyledListElement key={index}>{item}</StyledListElement>
                ))}
              </StyledList>
            </>
          )}
        </StyledSectionRight>
      </StyledSectionWrapper>
    </StyledContainer>
  );
};

export default Section;
