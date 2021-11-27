import { Avatar, Button } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import MicIcon from "@material-ui/icons/Mic";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "./img/logo.png";
import youtubeProfilePic from "./img/yt-pp.jpg";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img src={Logo} alt="youtube-logo" className="header_logo" />
        </Link>
      </div>

      <div className="header_input">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <Button variant="outlined" className="search_btn">
            <SearchIcon />
          </Button>
        </Link>
        <MicIcon className="microphone_icon" />
      </div>

      <div className="header_icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar alt="youtube_profile_picture" src={youtubeProfilePic} />
      </div>
    </div>
  );
}
