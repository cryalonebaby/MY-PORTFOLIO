import { useNavigate } from "react-router-dom"
import { AppBar, Box, Button, IconButton, Toolbar, Typography, styled } from "@mui/material"
import { PrivateRoutes } from "../../routing/config"
import { IPrivateRoutes } from "../../interfaces"

const NavListWrapper = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  gap: 32
})

const Navbar = () => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <AppBar position="static" sx={{ boxShadow: 1 }}>
      <Toolbar sx={{ marginX: 4, color: '#dce8e3', textShadow: '1px 0px 1px black', fontSize: '20px' }}>
        <div>
          Logo
        </div>
        <NavListWrapper>
          {
            PrivateRoutes.map((route: IPrivateRoutes) => (
              <div key={route.path} onClick={() => handleNavigate(route.path)}>
                <Box sx={{ cursor: 'pointer' }}>{route.title}</Box>
              </div>
            ))
          }
        </NavListWrapper>
        <div >Color Picker</div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar