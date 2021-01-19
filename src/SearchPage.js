import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./SearchPage.css";
import CI from "./img/CI.png"
import AL from "./img/AL.jpg"
import NAV from "./img/NAV.jpg";
import SVB from "./img/SVB.jpg";
import CTX from "./img/CTX.jpg";
import DDM from "./img/DDM.jpg";
import PS5 from "./img/PS5.jpg";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
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
                <span
                  style={{
                    // @ts-ignore
                    fontWeight: "500",
                  }}
                >
                  Jayprecode
                </span>{" "}
                is a platform for learning various computer technologies and
                programming languages. 100% FREE TIPS & TRICKS, ...
              </p>
            }
          />
          <VideoRow
            views="1.4M"
            description="Do you want a FREE one hour training..check"
            timestamp="1 week ago"
            channel="Jayprecode"
            channelImage={CI}
            title="PS5 : HOW TO DESIGN A PS5 CONTROLLER USING HTML & CSS -THE NEW DUALSENSE PLAYSTATION 5 CONTROLLER 🎮"
            image={PS5}
          />
          <VideoRow
            views="1.4M"
            description="Do you want a FREE one hour training..check"
            timestamp="3 weeks ago"
            channelImage={CI}
            channel="Jayprecode"
            title="How Advanced Animated Navigation Menu Bar Are Created Using HTML, CSS & JAVASCRIPT"
            image={NAV}
          />
          <VideoRow
            views="1.4M"
            description="Do you want a FREE one hour training..check"
            timestamp="1 month ago"
            channelImage={CI}
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            description="Do you want a FREE one hour training..check"
            timestamp="1 month ago"
            channelImage={CI}
            channel="Jayprecode"
            title="2 Simple & Quickest Way to Center Text or DIV with CSS In 2020 For Beginners - CSS Center text"
            image={CTX}
          />
          <VideoRow
            views="1.4M"
            description="Do you want a FREE one hour training..check"
            timestamp="2 month ago"
            channelImage={CI}
            channel="Jayprecode"
            title="How To Make Drop Down Menu Using HTML, CSS & JS For Absolute beginner"
            image={DDM}
          />
          <VideoRow
            views="1.4M"
            description="Do you want a FREE one hour training..check"
            timestamp="2 month ago"
            channelImage={CI}
            channel="Jayprecode"
            title="Full Screen Video Background Using HTML & CSS | How To Add a Video Background With HTML & CSS"
            image={SVB}
          />
        </div>
      </div>
    );
}

export default SearchPage
