import {
  Button,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import Logo from "../assets/logo.svg";
import { useAuthContext } from "../Context/AuthContext.tsx";
import Masonry from '../Components/Masonry/Masonry.tsx';

export function Landing() {
  const { authenticated } = useAuthContext();

  const navigate = useNavigate();

  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    // ... more items
  ];
  console.log(authenticated);

  return (
    <Grid2 size={"grow"} container>
      <Grid2
        size={"grow"}
        p={3}
        rowGap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/*<p>{JSON.stringify(meQuery.me, null, 0)}</p>*/}
        <img src={Logo} alt={"logo"} />
        <Grid2 size={12} mb={5}>
          <Typography variant='h1'>Welcome to Rentlyst.</Typography>
          <Typography variant={"subtitle2"}>
            This is a platform for renting your home
          </Typography>
        </Grid2>
        <Grid2 my={2}>
          <Grid2 container size={12} columnGap={2}>
            <Button variant={"contained"} onClick={() => navigate("/register")}>
              Sign Up
            </Button>
            <Button variant={"text"} onClick={() => navigate("/login")}>
              Login
            </Button>
            {authenticated && (
              <Button
                variant={"outlined"}
                onClick={() => navigate("/listings")}
              >
                View Listings
              </Button>
            )}
          </Grid2>
        </Grid2>
        <Paper
          variant={"outlined"}
          sx={{
            p: 2,
            backgroundColor: "transparent",
            borderColor: "primary.main",
          }}
        >
          <Typography variant={"h2"}>How does it work?</Typography>
          <Typography variant={"body1"}>
            It's as easy as 1, 2, 3 and you can sign up and start renting a
            place to stay for the vacation. <br /> Or maybe you are renting out
            your place because it is close to an attraction.
          </Typography>
        </Paper>
      </Grid2>

      <Grid2 size={4} container justifyContent={"center"} alignItems={"center"}>
        {/*<Box display='flex'*/}
        {/*     flexDirection={'column'}*/}
        {/*     overflow={'auto'}*/}
        {/*     sx={{objectFit: 'cover'}}*/}
        {/*     borderRadius={10}*/}
        {/*     component={"img"} src={LandingImage} flex={1} position={'relative'} minHeight={'100%'}*/}
        {/*     height={'100vh'}/>*/}

        <Masonry
          items={items}
          ease='power3.out'
          duration={0.6}
          stagger={0.05}
          animateFrom='bottom'
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />

        {/* <ImageList variant='masonry' cols={2} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
                style={{borderRadius: '10px'}}
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </Grid2>
    </Grid2>
  );
}
