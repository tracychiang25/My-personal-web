import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import '../index.css';

function VideoPage() {
  const { videoId } = useParams();

  return (
    <div className="video-page">
      <h2>Video Page</h2>
      <YouTube videoId={videoId} />
    </div>
  );
}

export default VideoPage;