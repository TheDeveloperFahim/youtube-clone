import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <>
      <div className="main_content">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </>
  );
}
