import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get('/videos/');
      setVideos(response.data);
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <Link to={`/videos/${video.id}`}>{video.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
