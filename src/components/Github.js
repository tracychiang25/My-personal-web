import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Github() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/tracychiang25/repos');

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

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {data.map(repo => ( 
                    <Link to={`/portfolio/github/${repo.name}`} className="github-link"> 
                    <li key={repo.id}>{repo.name}</li>            
                    </Link> 
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Github;
