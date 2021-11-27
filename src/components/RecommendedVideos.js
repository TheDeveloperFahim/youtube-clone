import "../styles/RecommendedVideos.css";
import VideoCard from "./VideoCard";

export default function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended Videos</h2>
      <div className="video_card_container">
        <VideoCard />
      </div>
    </div>
  );
}
