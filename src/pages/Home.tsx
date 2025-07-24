import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../assets/perfil_for_portfolio.jpg"

export const Home = () => {

    const StyledHome = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,       
        paddingTop:"5vh"
        
        // [theme.breakpoints.down('md')]: {
        //     minHeight: '210vh',
        //     paddingTop: '5vh',
        //   },
        //   [theme.breakpoints.up('lg')]: {
        //     minHeight: '110vh',
        //     paddingTop: '5vh',
        //   }

    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        height:"100%",
        position:"relative",
        borderRadius: "60%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.up('xs')]: { // <= mobile
            width:'60%'

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            width:'35%'
        }

    }))

    return<>

        <StyledHome sx={{minHeight:"100vh"}}>
            <Container maxWidth='lg'>

                <Grid container rowSpacing={2} sx={{justifyContent:"center"}}>
                    
                    <Box position="relative"sx={{textAlign:'center',justifyContent:'center',overflow:'hidden',zIndex:2}}>
                        
                        <StyledImg src={Avatar} sx={{zIndex:2}}/>

                        

                    </Box>

                    <Box textAlign={'center'} sx={{position:"relative", zIndex:2}}>

                        <Typography color="secondary" textAlign={'center'} variant="h4">OI, meu nome é Elias!</Typography>
                        <p></p><Typography color="secondary" textAlign={'justify'} variant="h6">Sou estudante do 7º semestre do curso de engenharia de software na UnB. Sempre amei a tecnologia e a ciência, apesar de escolher a engenharia. Veja os projetos e aplicações que já desenvolvi ou participei do processo de desenvolvimento, caso queira, me contate através das minhas redes.</Typography>

                    </Box>

                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}