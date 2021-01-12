import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import { ExpandMoreOutlined,Whatshot, Subscriptions, History, OndemandVideo, ThumbUpAltOutlined, VideoLibrary, WatchLater, YouTube, VideogameAsset, WifiTethering, Settings, Flag, Help, Feedback } from "@material-ui/icons";



function Sidebar() {
    return (
      <div className="sidebar">
        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={Whatshot} title="Trending" />
        <SidebarRow Icon={Subscriptions} title="Subscriptions" />
        <hr />
        <SidebarRow Icon={VideoLibrary} title="Library" />
        <SidebarRow Icon={History} title="History" />
        <SidebarRow Icon={OndemandVideo} title="Your videos" />
        <SidebarRow Icon={WatchLater} title="Watch later" />
        <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
        <hr />
        <h4>MORE FROM YOUTUBE</h4>
        <SidebarRow Icon={YouTube} title="YouTube Premium" />
        <SidebarRow Icon={VideogameAsset} title="Gaming" />
        <SidebarRow Icon={WifiTethering} title="Live" />
        <hr />
        <SidebarRow Icon={Settings} title="Settings" />
        <SidebarRow Icon={Flag} title="Report history" />
        <SidebarRow Icon={Help} title="Help" />
        <SidebarRow Icon={Feedback} title="Send feedback" />
        <hr />
        <div className="sidebar__footer1">
          <p href="#">About</p>
          <p href="#">Press</p>
          <p href="#">Copyright</p>

          <p href="#">Contact us</p>
          <p href="#">Creator</p>

          <p href="#">Advertise</p>
          <p href="#">Developers</p>
        </div>
        <div className="side__footer2">
          <ul>
            <p href="#">Terms</p>
            <p href="#">Privacy</p>
            <p href="#">Policy & Safety</p>
            <p href="#">How YouTube works</p>
            <p href="#">Test new features</p>
          </ul>
        </div>
        <span>2021 Google LLC</span>
      </div>
    );
}

export default Sidebar
