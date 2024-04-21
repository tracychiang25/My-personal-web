import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@mui/material';
import YouTube from 'react-youtube';
import '../index.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    const [videos, setVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');

    localStorage.clear();

    useEffect(() => {
        const storedVideos = localStorage.getItem('videos');
        if (storedVideos) {
            console.log("Here");
            setVideos(JSON.parse(storedVideos));
        } else {
            fetchVideos();
        }
    }, []);

    const fetchVideos = async () => {
        try {
            const channelId = "UC9y_K3FB_aK_smTgg29BI2w";
            const apiKey = process.env.REACT_APP_Y;
            let nextPageToken = null;
            let allVideos = [];
    
            do {
                let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&key=AIzaSyC1VP9xGwNeT0NC-BdQClDbz8xlcHq9MaU`;
                if (nextPageToken) {
                    url += `&pageToken=${nextPageToken}`;
                }
    
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
        <div className="container">
            <div className="w-full h-screen bg-[#0a192f]">
                <div className="container mx-auto px-4 pt-20">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={8}>
                            <TextField
                                fullWidth
                                label="Search"
                                variant="outlined"
                                value={searchTitle}
                                size="small"
                                onChange={handleSearchChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        </Grid>
                    </Grid>
                    <div className="video-list-container">
                        <Grid container spacing={2} className="grid-container">
                            {filteredVideos.map(video => (
                            <Grid key={video.id.videoId} item xs={12} sm={6} md={4} lg={3}  className="video-container">
                                <Link to={`/video/${video.id.videoId}`} className="video-link"> 
                                <div className="video-title">{video.snippet.title}</div>
                                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="video-thumbnail" />
                                </Link> 
                            </Grid>
                        ))}
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
