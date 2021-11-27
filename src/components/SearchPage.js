import Button from "@material-ui/core/Button";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import styles from "../styles/Search.module.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

export default function SearchPage() {
  return (
    <div className={styles.searchPage}>
      <div className={styles.search_page_filter}>
        <Button className={styles.search_page_btn}>
          <TuneOutlinedIcon />
          <h3>filters</h3>
        </Button>
      </div>

      {/* Channel Row Component */}
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        subs="1.04m"
        verified
        noOfVideo={639}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />

      {/* Video Row Component */}
      <VideoRow />
    </div>
  );
}
