import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import "../styles/Sidebar.css";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarItem icon={<HomeRoundedIcon />} title="Home" atcClass="active" />
      <SidebarItem icon={<ExploreOutlinedIcon />} title="Explore" />
      <SidebarItem icon={<SubscriptionsOutlinedIcon />} title="subscriptions" />
      <SidebarItem icon={<VideoLibraryOutlinedIcon />} title="library" />
      <SidebarItem icon={<HistoryOutlinedIcon />} title="history" />
      <SidebarItem icon={<WatchLaterOutlinedIcon />} title="watch later" />
      <SidebarItem icon={<ThumbUpOutlinedIcon />} title="like videos" />
      <SidebarItem icon={<KeyboardArrowDownIcon />} title="show more" />
    </div>
  );
}
