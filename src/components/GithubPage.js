import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import IFN557 from '../assets/IFN557.png';
import '../index.css';

function GithubPage(props){
    
    const { name } = useParams();
    // My Github repository
    const githubUrl = `https://github.com/tracychiang25/${name}`; 

    return (
        <div className="github-code">
            <div className="github-card">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image= {IFN557}
                    alt="IFN557"
                />
                <CardContent>                
                <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                {/* I didn't do it but feel free to add texts here if you would like to add description on the card*/}
                <Typography variant="body2" color="text.secondary">
                </Typography>
                </CardContent>
                <CardActions>
                    {/* Links to my Github page */}
                    <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="small">Check the code</Button>
                    </Link>
                </CardActions>
            </Card>
            </div>
        </div>

    );
}
export default GithubPage;