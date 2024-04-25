import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import '../index.css';
import GithubPage from './GithubPage';

function Github() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/tracychiang25/repos');
                // Throw an error message when response is unsuccessful
                if (!response.ok) {
                    throw new Error(`HTTP error, status ${response.status}`);
                }

                const reposData = await response.json();
                setData(reposData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchApiData();
    }, []);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    {data.map(repo => ( 
                    <Link to={`/portfolio/github/${repo.name}`} className="github-link"> 
                    <Stack spacing={2} className="stack">
                        <Item key={repo.id}>{repo.name}</Item> 
                    </Stack>
                    </Link> 
                    ))}
                </div>
            )}
        </div>
        
    );
}

export default Github;
