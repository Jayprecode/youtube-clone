import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./SearchPage.css";
import CI from "./img/CI.png"
import AL from "./img/AL.jpg"
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import MoreVert from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function SearchPage() {
      const useStyles = makeStyles({
        option: {
          color: "#fff",
          marginBottom: "175px",
          cursor: "pointer",
        },
      });
      const classes = useStyles();
    return (
      <div className="searchPage">
        <div className="searchPage_box">
          <div className="searchPage__filter">
            <TuneOutlined />
            <h2>FILTER</h2>
          </div>
          <hr />
          <ChannelRow
            image={CI}
            channel="Jayprecode"
            verified
            subs="660k"
            no0fVideos={382}
            description={
              <p>
                <span style={{ fontWeight: "500" }}>Jayprecode</span> is a
                platform for learning various computer technologies and
                programming languages. 100% FREE TIPS & TRICKS, ...
              </p>
            }
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channel="Jayprecode"
            channelImage={CI}
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
            option={
              <Button className={classes.option}>
                <MoreVert />
              </Button>
            }
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channelImage={CI}
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channelImage={CI}
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channelImage={CI}
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channelImage={CI}
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channelImage={CI}
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
        </div>
      </div>
    );
}

export default SearchPage
