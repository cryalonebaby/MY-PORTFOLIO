import { Navbar, Footer } from ".."
import { styled } from "@mui/material"

interface IProps {
  Component: () => JSX.Element
}

const HocWrapper = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
})

const ComponentWrapper = styled('div')({
  flex: '1 1 auto',
  width: '1200px',
  margin: '30px auto',
})

const HOC = ({ Component }: IProps) => {
  return (
    <HocWrapper>
      <Navbar />
      <ComponentWrapper>
        <Component />
      </ComponentWrapper>
      <Footer />
    </HocWrapper>
  )
}

export default HOC