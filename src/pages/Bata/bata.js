import React from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  InputBase, 
  styled, 
  alpha, 
  Container, 
  Grid, 
  CardContent, 
  Card, 
  CardActions 
} from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../Utils/getTheme';
import Buttons from '../../components/Button/Button';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

//data dari backend
//ini contoh data dummy
const dataRoster = [
  {
    Iamge: "/BataExposed.png",
    description: " Bata Expose",
    price: "Rp.14000",
  },
  {
    Iamge: "/BataPress.png",
    description: "Bata Press",
    price: "Rp.14000",
  },
  {
    Iamge: "/BataTempelMozaik.png",
    description: " Bata tempel Mozaik",
    price: "Rp.14000",
  },
  {
    Iamge: "/BataTerracota.png",
    description: "Bata Tempel Terracota",
    price: "Rp.14000",
  },
]

export default function Bata() {
  return (
    <ThemeProvider theme={theme}>
      <Container >
        <Box>
          <AppBar position="static" color="transparent" >
            <Toolbar>
              {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Bata
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
        <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }} align="center" >
          <Typography component={"h4"} variant={"h5"} align="center" gutterBottom >
            Halo, Selamat Datang
          </Typography>
          <Typography variant={"h6"} align="center" color={"text.secondary"}> Kami siap mengirimkan produk ke seluruh Indonesia</Typography>
        </Container>
        <Container component={"main"} maxWidth="md" >
          <Grid container spacing={5} alignItems="flex-end">
            {
              dataRoster.map((item, index) => {
                return (
                <Grid item key={index} lg={4} md={4} sm={4} xs={12}>
                  <Card>
                  <CardContent>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src={item.Iamge}
                        widht={150}
                        height={150}
                      />
                    </div>
                    <Typography component={"h5"} variant={"h6"} color="text.primary">
                      {item.description}
                    </Typography>
                    <Box sx={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                    >
                      <Typography component={"h6"} variant={"h6"} color="text.primary" >
                        {item.price}
                      </Typography>
                      <Typography variant={"h6"} color="text.secondary">
                        /pcs
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Buttons label="Buy Now"
                    variant="outlined"/>
                  </CardActions>
                  </Card>
                </Grid>
              );
              })}
          </Grid>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
