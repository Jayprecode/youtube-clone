import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "./App.css";


function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header />
      <div className="side_bar">
        <Sidebar />
      </div>
      <div className="videos">
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
