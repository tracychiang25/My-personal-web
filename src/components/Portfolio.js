import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, TextField } from '@mui/material';
import '../index.css';
import { Link } from 'react-router-dom';
import Github from './Github';

function Portfolio() {
    
    const channelId = "UC9y_K3FB_aK_smTgg29BI2w"; // My Youtube channel's ID
    const API_KEY = process.env.REACT_APP_YOUTUBE_KEY; // API key for accessing the Youtube Data API
    const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&key=${API_KEY}`; //URL for my channel

    const [videos, setVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    //Fetch videos from Youtube API
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                let nextPageToken = null; //First page of the result
                let allVideos = []; //Store all videos
                // Fetch the next page of results in each iteration of the loop
                do {
                    let url = YOUTUBE_API_URL;
                    if (nextPageToken) {
                        url += `&pageToken=${nextPageToken}`;
                    }
                    // Fetch data from the url, throw an error if an unsuccessful response
                    const response = await fetch(url); 
                    if (!response.ok) {
                        throw new Error('Failed to fetch videos.');
                    }
                    const data = await response.json();
                    allVideos = [...allVideos, ...data.items];
                    nextPageToken = data.nextPageToken;
                } while (nextPageToken);
        
                setVideos(allVideos);
            } catch (error) {
                console.error('Unable to fetch videos:', error);
            }
        };
        

        fetchVideos();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTitle(event.target.value);
    };

    useEffect(() => {
        const filtered = videos.filter((video) =>
        video.snippet.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
        setFilteredVideos(filtered);
    }, [searchTitle, videos]);

    return (
        <div className="portfolio">
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
            <Tab label="YouTube Videos" />
            <Tab label="GitHub" />
            </Tabs>
            {/* If value is 0, showcase all the Youtube videos */}
            {value === 0 && (
            <div>
                <div>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={3} sx={{ margin: '30px' }}>
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
                    {filteredVideos.map((video) => (
                        <Grid
                        key={video.id.videoId}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        sx={{ margin: '10px' }}
                        className="video-container"
                        >
                        <Link
                            to={`/portfolio/video/${video.id.videoId}`}
                            className="video-link"
                        >
                            <div className="video-title">{video.snippet.title}</div>
                            <img
                            src={video.snippet.thumbnails.default.url}
                            alt={video.snippet.title}
                            className="video-thumbnail"
                            />
                        </Link>
                        </Grid>
                    ))}
                    </Grid>
                </div>
                </div>
            </div>
            )}
            {/* If value is 1, switch to Github*/}
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
