import React from "react";
import "./VideoRow.css";

import { Avatar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



function VideoRow({ views, description, timestamp,channelImage, channel, title, image, option }) {
    const useStyles = makeStyles({
      small: {
        marginRight: "8px",
        marginLeft: "",
        height: "25px",
        width: "25px",
      },
    });
    const classes = useStyles();
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {views} views • {timestamp}
        </p>
        <p className="videoRow__channel">
          <Avatar
            alt="Jayprecode"
            src={channelImage}
            className={classes.small}
          />
          {channel}
        </p>
        <p className="videoRow__description"> {description}</p>
      </div>
      <div className="opt">
        {option}
      </div>

    </div>
  );
}

export default VideoRow
