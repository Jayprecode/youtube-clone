import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./SearchPage.css";
import CI from "./img/CI.png"
import AL from "./img/AL.jpg"
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
            noOfVideos={382}
            description="Jayprecode is a platform for learning various computer technologies and programming languages. 100% FREE TIPS & TRICKS,..."
          />
          <hr />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
          <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE one hour training..check"
            timestamp="59 seconds ago"
            channel="Jayprecode"
            title="Animated Login Form Using HTML & CSS & JQuery - HOW TO Create an Awesome Animated Login Form in 2020"
            image={AL}
          />
        </div>
      </div>
    );
}

export default SearchPage
