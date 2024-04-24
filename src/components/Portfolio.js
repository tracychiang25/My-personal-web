import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, TextField } from '@mui/material';
import '../index.css';
import { Link } from 'react-router-dom';
import Github from './Github';


function Portfolio() {    
    
    /*Youtube API*/
    const channelId = "UC9y_K3FB_aK_smTgg29BI2w";
    const apiKey = process.env.REACT_APP_YOUTUBE_KEY;

    const [videos, setVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    // for the UI tabs
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        const storedVideos = localStorage.getItem('videos');
        if (storedVideos) {
            setVideos(JSON.parse(storedVideos));
        } else {
            fetchVideos();
        }
    }, []);

    const fetchVideos = async () => {
        try {
           
            let nextPageToken = null;
            let allVideos = [];
            // Make a request to the YouTube Data API's search endpoint
            do {
                let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&key=${apiKey}`;
                if (nextPageToken) {
                    url += `&pageToken=${nextPageToken}`;
                }
                // Fetch data from the url, throw an error if an unsuccessful response
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch videos.");
                }
                const result = await response.json();
                allVideos = [...allVideos, ...result.items];
                nextPageToken = result.nextPageToken;
            } while (nextPageToken);
    
            setVideos(allVideos);
            localStorage.setItem('videos', JSON.stringify(allVideos));
        } catch (error) {
            console.error("Unable to fetch videos:", error);
        }
    }

    useEffect(() => {
        const filtered = videos.filter(video => {
            return video.snippet.title.toLowerCase().includes(searchTitle.toLowerCase());
        });
        setFilteredVideos(filtered);
    }, [searchTitle, videos]);

    const handleSearchChange = (event) => {
        setSearchTitle(event.target.value);
    }


    return (
        <div className="portfolio">
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="YouTube Videos" />
                    <Tab label="GitHub" />
                </Tabs>
                {value === 0 && (
                    <div>
                        <div>
                            <Grid container justifyContent="center">
                            {/* Column widths are values between 1 and 12, 12 is the full width of its parent container */}
                            {/* xs: screen width smaller than 600px , sm: screen width 600px-960px*/}
                                <Grid item xs={12} sm={3} sx={{ margin:'30px'}}> 
                                    <TextField
                                        fullWidth
                                        label="Search"
                                        variant="outlined"
                                        value={searchTitle}
                                        size="small"
                                        onChange={handleSearchChange}
                                    />
                                </Grid>
                            </Grid>
                            <div className="video-list-container">
                                <Grid container spacing={2} justifyContent="center">
                                    {filteredVideos.map(video => (
                                        <Grid key={video.id.videoId} item xs={12} sm={6} md={4} lg={3} sx={{ margin:'10px'}} className="video-container">
                                            <Link to={`/portfolio/video/${video.id.videoId}`} className="video-link"> 
                                                <div className="video-title">{video.snippet.title}</div>
                                                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="video-thumbnail" />
                                            </Link> 
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        </div>
                    </div>
                )}
                {value === 1 && (
                    <div className="container">
                        <Github /> 
                    </div>
                )}
            </Box>
        </div> 
    );
}

export default Portfolio;
