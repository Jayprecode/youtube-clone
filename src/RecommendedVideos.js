import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
    return (
      <div className="RecommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
          <VideoCard
            title=""
            views=""
            timestamp=""
            channelImage=""
            channel=""
            image=""
          />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    );
}

export default RecommendedVideos;
