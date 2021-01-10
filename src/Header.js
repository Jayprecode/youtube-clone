import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import { makeStyles } from "@material-ui/core/styles";

function Header() {

    const useStyles = makeStyles({
      small: {
        marginRight: "15px",
        marginLeft: "15px",
        height: "35px",
        width: "35px",
      },
      inputButton: {
        width: "20px",
        height: "20px",
        border: "none",
        backgroundColor: "#323232",
        color: "gray",
        paddingTop: "5px",
        paddingBottom: "5px",
        marginTop: "-1px",
        paddingLeft: "25px",
        paddingRight: "25px",
      },
    });
    const classes = useStyles();



  return (
    <div className="header">
      <div className="heder__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>

      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className={classes.inputButton} />
      </div>
      <div className="header__mic">
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>

      <div className="header__icons">
        <IconButton>
          <VideoCallIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>

        <Avatar className= {classes.small} />
      </div>
    </div>
  );
}

export default Header;
