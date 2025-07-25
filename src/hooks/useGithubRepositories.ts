import { useState, useEffect } from 'react';

// A interface definindo a estrutura de um repositório
export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  fork: boolean;
}
  //Hook que recebe como entrada o nome de usuário do github
export const useGithubRepositories = (username: string) => {
  //lógica de estado
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Se não for passado um nome de usuário, nada é feito
    if (!username) {
        setLoading(false);
        return;
    }

    const fetchRepos = async () => {
      setLoading(true); // Garante que o loading seja reativado se o username mudar
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Falha ao buscar os repositórios');
        }
        const allRepos : Repository[] = await response.json();
        //Filtrando repositórios
        const noForks = allRepos.filter(repo => !repo.name.includes("Microsoft-Activation-Scripts"))
        
        setRepositories(noForks);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Ocorreu um erro desconhecido';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]); // O hook é executado novamente com a mudança do usuário

  return { repositories, loading, error };
};