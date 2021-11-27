import { useState } from "react";
import { VideoCardAPI } from "./VideoCardAPI";

export default function VideoCard() {
  const [videoCardItems, setVideoCardItems] = useState(VideoCardAPI);

  return (
    <>
      {videoCardItems.map((element, index) => {
        return (
          <div className="video_card" key={index}>
            <img src={element.videoImg} alt="" className="video_card_img" />
            <div className="video_card_info">
              <div className="video_card_title_area">
                <img src={element.channelImg} alt="" className="channel_img" />
                <h3 className="video_card_title">{element.videoTitle}</h3>
              </div>
              <div className="video_card_bottom_area">
                <span className="channel_name">{element.channelName}</span>
                <div className="video_views_old">
                  <span className="video_views">{element.videoViews}</span>
                  <span className="video_old">{element.timeStamp}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
