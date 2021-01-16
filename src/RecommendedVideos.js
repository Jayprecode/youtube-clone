import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import PS5 from "./img/PS5.jpg";
import Sticky from "./img/Sticky.jpg";
import NAV from "./img/NAV.jpg";
import SVB from "./img/SVB.jpg";
import CTX from "./img/CTX.jpg";
import DDM from "./img/DDM.jpg";
import CI from "./img/CI.png"



function RecommendedVideos() {
    return (
      <div className="recommendedVideos">
        <div className="recommendedVideos__videos">
          <VideoCard
            title="PS5 : HOW TO DESIGN A PS5 CONTROLLER USING HTML & CSS -..."
            views="10M views"
            timestamp="1 year ago"
            channelImage={CI}
            channel="Jayprecode"
            image={PS5}
          />
          <VideoCard
            title="Sticky Navigation Bar On Responsive Scroll with Hover ..."
            views="4M views"
            timestamp="3 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={Sticky}
          />
          <VideoCard
            title="How Advanced Animated Navigation Menu Bar Are..."
            views="6M views"
            timestamp="6 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={NAV}
          />
          <VideoCard
            title="How To Make Drop Down Menu Using HTML, ..."
            views="3M views"
            timestamp="7 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={DDM}
          />
          <VideoCard
            title="Full Screen Video Background Using HTML..."
            views="5M views"
            timestamp="8 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={SVB}
          />
          <VideoCard
            title="2 Simple & Quickest Way to Center Text or DIV with..."
            views="1M views"
            timestamp="9 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={CTX}
          />
          <VideoCard
            title="PS5 : HOW TO DESIGN A PS5 CONTROLLER USING HTML & CSS -..."
            views="10M views"
            timestamp="1 year ago"
            channelImage={CI}
            channel="Jayprecode"
            image={PS5}
          />
          <VideoCard
            title="Sticky Navigation Bar On Responsive Scroll with Hover ..."
            views="4M views"
            timestamp="3 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={Sticky}
          />
          <VideoCard
            title="How Advanced Animated Navigation Menu Bar Are..."
            views="6M views"
            timestamp="6 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={NAV}
          />
          <VideoCard
            title="How To Make Drop Down Menu Using HTML, ..."
            views="3M views"
            timestamp="7 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={DDM}
          />
          <VideoCard
            title="Full Screen Video Background Using HTML..."
            views="5M views"
            timestamp="8 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={SVB}
          />
          <VideoCard
            title="2 Simple & Quickest Way to Center Text or DIV with..."
            views="1M views"
            timestamp="9 months ago"
            channelImage={CI}
            channel="Jayprecode"
            image={CTX}
          />
        </div>
      </div>
    );
}

export default RecommendedVideos;
