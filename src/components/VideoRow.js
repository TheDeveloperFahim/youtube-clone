import { useState } from "react";
import styles from "../styles/VideoRow.module.css";
import { VideoRowAPI } from "./VideoRowAPI";
import YoutubeChannel from "./YoutubeChannel";

export default function VideoRow() {
  const [videoRowItem, setVideoRowItem] = useState(VideoRowAPI);

  return (
    <>
      <h3 className={styles.videoRowTitle}>Latest from Clever Programmer</h3>
      {videoRowItem.map((element, index) => {
        const { image, title, views, timestamp, description, badge } = element;
        return (
          <div className={styles.videoRow} key={index}>
            <img src={image} alt="videoImage" />
            <div className={styles.videoRowText}>
              <h3>{title}</h3>
              <p>
                {views} views • {timestamp} ago
              </p>
              <YoutubeChannel
                channelLogo="/img/video_card_channel_imgs/02.jpg"
                channelName="clever programmer"
              />
              <article>{description}</article>
              <span>{badge}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
