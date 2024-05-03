import ReactPlayer from "react-player";
function VideoPlayer() {
  return (
    <div className="m-8">
      // Render a YouTube video player
      <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
    </div>
  );
}

export default VideoPlayer;
