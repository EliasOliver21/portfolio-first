import { Box, Container, Grid, styled, Typography } from "@mui/material";

export const Contact = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }

    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "30%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return<>

        <StyledHome>
            <Container maxWidth='lg'>

                <Grid direction={'column'}container rowSpacing={5} sx={{alignItems:'center', justifyContent:'center',justifyItems:'center'}}>

                    <Box sx={{justifyContent:'center'}}>

                        <Typography color="primary.contrastText">Contact</Typography>

                    </Box>

                    <Box textAlign={'center'}>

                        <Typography color="primary.contrastText">Descrição</Typography>

                    </Box>

                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}