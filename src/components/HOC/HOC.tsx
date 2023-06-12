import { Navbar, Footer } from ".."

interface IProps {
  Component: () => JSX.Element
}

const HOC = ({ Component }: IProps) => {
  return (
    <div>
      <Navbar />
      <Component />
      <Footer />
    </div>
  )
}

export default HOC