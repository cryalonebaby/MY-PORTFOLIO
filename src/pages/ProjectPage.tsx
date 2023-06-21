import { ProjectInfo } from '../components'

const ProjectPage = () => {
  const mockImg = 'https://repository-images.githubusercontent.com/343068723/ba7551c4-808a-4c1f-96a4-6acf0d27ef4c'

  const functionality = [
    'Creating and Deploying smart contracts',
    'Participate team online meetings',
    'Super Puper'
  ];

  const repLink = 'https://github.com/cryalonebaby/JobsBoard-Next-Tailwind'
  const deployLink = 'https://www.google.com'

  return <ProjectInfo img={mockImg} list={functionality} repLink={repLink} deployLink={deployLink} />
}

export default ProjectPage