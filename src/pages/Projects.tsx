import {Box, CircularProgress, Container, Grid, Paper, styled, Typography } from "@mui/material";
import { Repository, useGithubRepositories } from "../hooks/useGithubRepositories";
import { Link } from "react-router";

export const Projects = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,
        paddingTop:'5vh'

    }))

    //Estrutura do Card
    const RepositorioCard = ({ repo }: { repo: Repository }) => {
        return (
            <Paper 
                elevation={3} 
                sx={{ 
                    padding: 1,
                    height: '100%'

                }}
            >
            <Box>
                <Typography variant="h6" component="h3">
                {repo.name}
                </Typography>
                <Typography variant="body2" sx={{ my: 1, color: 'text.secondary' }}>
                {repo.description || 'Repositório sem descrição.'}
                </Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                {repo.language}
                </Typography>
                <Link to={repo.html_url}>Repository</Link>
            </Box>
            </Paper>
        );
    };

    //Chamanda ao hook para as informações do meu github
    const { repositories, loading, error } = useGithubRepositories('EliasOliver21');

    // Exibição do conteudo na página
    const renderContent = () => {
        if (loading) {
        return <CircularProgress sx={{ display: 'block', margin: 'auto', color: 'white' }} />;
        }

        if (error) {
        return <Typography color="error" align="center">{error}</Typography>;
        }

        return (
        <Grid container spacing={2}>
            {repositories.map(repo => (

                <RepositorioCard repo={repo} />
            ))}
        </Grid>
        );
    };

    return (
        <StyledHome sx={{minHeight:"100vh"}}>
            <Container maxWidth='lg' sx={{position:"relative", zIndex:2}}>
                <Typography variant="h4" color="primary.contrastText"  align="center" gutterBottom>
                    Meus Projetos
                </Typography>
                {renderContent()}
            </Container>
        </StyledHome>
    );
    };


//     return<>

//         <StyledHome sx={{alignItems:'center' , minHeight:"100vh"}}>
//             <Container maxWidth='lg' sx={{paddingBottom:'20vh'}}>

//                <Grid color="primary.contrastText" container direction="column" sx={{alignItems: "center"}}>
                    
//                     <Box >

//                         <Typography variant="h5" sx={{position:"relative", zIndex:2}}><ListaDeRepositorios></ListaDeRepositorios></Typography>

//                     </Box>
                    
                        
//                 </Grid>

                
                
//             </Container>
//         </StyledHome>
//     </>
// }