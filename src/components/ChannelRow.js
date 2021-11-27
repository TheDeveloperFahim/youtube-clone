import  Avatar  from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleRounded";
import styles from "../styles/ChannelRow.module.css";

export default function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideo,
  description,
}) {
  return (
    <div className={styles.channelRow}>
      <Avatar className={styles.channelRow_logo} src={image} alt={channel} />
      <div className={styles.channelRow_text}>
        <h4>
          {channel}
          {verified && <VerifiedIcon className={styles.VerifiedIcon} />}
        </h4>
        <p>
          {subs} subscribers  {noOfVideo} videos
        </p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

// https://youtu.be/NT299zIk2JY?t=11408
