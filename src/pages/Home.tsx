import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from '../assets/Img-perfil.png'

export const Home = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        alignItems:'center',
        [theme.breakpoints.up('xs')]: { // <= mobile
            

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

        <StyledHome >
            <Container maxWidth='lg' sx={{paddingTop:'150px'}}>

                <Grid container rowSpacing={7} sx={{justifyContent:'center'}}>

                    <Box sx={{textAlign:'center'}}>

                        <StyledImg src={Avatar}/>

                    </Box>

                    <Box textAlign={'center'}>

                        <Typography color="primary.contrastText" textAlign={'center'} variant="h5">OI, meu nome é Elias!</Typography>
                        <Typography color="primary.contrastText" textAlign={'center'} variant="h5">Sou estudante do 7º semestre do curso de engenharia de software na UnB. Sempre amei a tecnologia e a ciência, apesar de escolher as engenharias rsrs. Veja os projetos e aplicações que já desenvolvi ou participei do processo de desenvolvimento, caso queira, me contate através das minhas redes.</Typography>

                    </Box>

                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}