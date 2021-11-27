import VerifiedIcon from "@material-ui/icons/CheckCircleRounded";
import styles from "../styles/VideoRow.module.css";

export default function YoutubeChannel({ channelLogo, channelName }) {
  return (
    <div className={styles.youtubeChannel}>
      <img src={channelLogo} alt="" />
      <span>
        {channelName} <VerifiedIcon className={styles.verifyIcon} />
      </span>
    </div>
  );
}

