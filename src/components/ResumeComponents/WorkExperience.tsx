import { Section } from '..'

const WorkExperience = () => {
  const description = [
    'Creating and Deploying smart contracts',
    'Participate team online meetings',
  ];

  const achievements = [
    'Created and Deployed Project\'s ERC20 token',
    'Developed token\'s economy model',
  ];

  return (
    <Section
      title="Work Experience"
      companyName="IT-Sprout"
      location="Kyiv"
      date="June 2023 - Now"
      position="Intern Blockchain Developer"
      description={description}
      achievements={achievements}
    />
  );
}

export default WorkExperience