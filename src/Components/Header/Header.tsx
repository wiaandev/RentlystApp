import {Avatar, Button, Grid2, Link as RouterLink} from "@mui/material";
import Logo from '../../assets/logo.svg'
import {Link} from "react-router-dom";
import {useRouteMatch} from "../../Hooks/useRouteMatch.ts";
import {useAuthContext} from "../../Context/AuthContext.tsx";
import {deepOrange} from "@mui/material/colors";
import {graphql, useMutation} from "react-relay";
import {HeaderMutation} from "./__generated__/HeaderMutation.graphql.ts";
import {useNavigate} from "react-router";

export const Header = () =>  {
    const routeMatches = useRouteMatch(['/register']);
    const {resetEnvironment} = useAuthContext();
    const navigate = useNavigate();
    const {authenticated, me} = useAuthContext();
    const [mutate] = useMutation<HeaderMutation>(graphql`
        mutation HeaderMutation($input: LogoutInput!) {
            logout(input: $input) {
                boolean
            }
        }
    `);

    const handleLogout = () => {
        mutate({
            variables: {input: {email: me?.email ?? "", password: ""}},
            onCompleted:() => {
                resetEnvironment();
                navigate('/')
            }
        } );
    };
    return (
        !routeMatches ? (
                <Grid2 size={12} container justifyContent={'space-between'} alignItems={'center'} position={'sticky'} top={0} zIndex={999} p={3} sx={{
                    background: 'rgba(255, 255, 255, 0.45)',
                    backdropFilter: 'blur(6.5px)',
                    WebkitBackdropFilter: 'blur(6.5px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                }}>
                    <Grid2>

                        <img src={Logo} alt={'logo'}/>
                    </Grid2>
                    <Grid2 container size={'auto'} columnGap={2} alignItems={'center'}>


                        <RouterLink fontSize={'14px'} fontWeight={'light'} underline={'hover'} component={Link}  to={"/"}>Home</RouterLink>
                        <RouterLink fontSize={'14px'} fontWeight={'light'} underline={'hover'}  variant={'caption'} component={Link} to={"/listings"}>Listings</RouterLink>
                        {authenticated ? <>
                            <RouterLink><Avatar sx={{ bgcolor: deepOrange[500] }}>{me?.email?.charAt(0)}</Avatar></RouterLink>
                            <Button title={"Log out"} variant={"outlined"} onClick={handleLogout}>Log out</Button>
                        </>: null}

                    </Grid2>
                </Grid2>
        ) : null

    );
}