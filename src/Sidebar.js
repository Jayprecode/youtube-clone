import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import { ExpandMoreOutlined, Whatshot, Subscriptions, History, OndemandVideo, ThumbUpAltOutlined, VideoLibrary, WatchLater, YouTube, VideogameAsset, WifiTethering, Settings, Flag, Help, Feedback } from "@material-ui/icons";
import { Link } from "@material-ui/core";



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
          <Link className="link">About</Link>
          <Link className="link">Press</Link>
          <Link className="link">Copyright</Link>
          <br />
          <Link className="link">Contact</Link>
          <Link className="link">Creator us</Link>
          <br />
          <Link className="link">Advertise</Link>
          <Link className="link">Developers</Link>
        </div>
        <div className="sidebar__footer2">
          <Link className="link">Terms</Link>
          <Link className="link">Privacy</Link>
          <Link className="link">Policy & Safety</Link>
          <br />
          <Link className="link">How YouTube works</Link>
          <br />
          <Link className="link">Test new features</Link>
        </div>
        <span className="copyright">© 2021 Google LLC</span>
      </div>
    );
}

export default Sidebar
