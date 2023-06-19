import { Section } from '..'

const Education = () => {
  const description = [
    'Linux in VM',
    'C/C++ and Python basic knowledge',
    'Analysis of systems on the issues of Cybersecurity',
  ];

  return (
    <Section
      title="Education"
      companyName="National Aviation University"
      location=""
      date="2020 - 2024"
      position="Cybersecurity"
      description={description}
    />
  );
}

export default Education