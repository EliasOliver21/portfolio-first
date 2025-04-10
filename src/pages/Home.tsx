import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from '../assets/Img-perfil.png'

export const Home = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,       
        paddingTop:"5vh",
        [theme.breakpoints.down('lg')]: { // <= mobile
            paddingTop:"5vh",
            height: '100vh'

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            height:'100vh'
            
        },
        [theme.breakpoints.down('md')]: { // >=mobile
            paddingTop: "5vh",
            
        }
        

    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "30%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.up('xs')]: { // <= mobile
            width:'60%'

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            width:'35%'
        }

    }))

    return<>

        <StyledHome >
            <Container maxWidth='lg' >

                <Grid container rowSpacing={2} sx={{justifyContent:'center'}}>

                    <Box sx={{textAlign:'center'}}>

                        <StyledImg src={Avatar}/>

                    </Box>

                    <Box textAlign={'center'}>

                        <Typography color="secondary" textAlign={'center'} variant="h4">OI, meu nome é Elias!</Typography>
                        <p></p><Typography color="secondary" textAlign={'justify'} variant="h6">Sou estudante do 7º semestre do curso de engenharia de software na UnB. Sempre amei a tecnologia e a ciência, apesar de escolher as engenharias rsrs. Veja os projetos e aplicações que já desenvolvi ou participei do processo de desenvolvimento, caso queira, me contate através das minhas redes.</Typography>

                    </Box>

                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}