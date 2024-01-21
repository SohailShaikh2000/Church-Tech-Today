import React from "react";
import "../styles/Introduction.scss";
import Video from "../video/video.mp4";
import Timer from "../assets/pace_FILL0_wght400_GRAD0_opsz24.svg";
import { Link } from "react-router-dom";
// import Play from "../assets/play-button-arrowhead.png";
// import { KeyboardDoubleArrowLeftRounded, KeyboardDoubleArrowRightRounded, PlayArrowRounded } from "@mui/icons-material";

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="main">
        <div className="side-a-container">
          <video src={Video} type="video/mp4" controls={true}></video>
          <div className="play-button">
            <div className="controls">
              {/* <KeyboardDoubleArrowLeftRounded />
              <PlayArrowRounded />
              <KeyboardDoubleArrowRightRounded /> */}
            </div>
          </div>
        </div>
        <div className="buttons"></div>
        <div className="side-b-container">
          <div className="side-b">
            <div className="title">
              <h2>
                <span>Is your church embracing impact</span> or AI* hesitant?
              </h2>
            </div>
            <div className="points">
              <p>1.Take this 3-minute assessment</p>
              <p>2.Invite your team to take it too after you do</p>
              <p>3.View everyone's results on 1 dashboard</p>
              <p>
                4.Align on the best next step for your church's approach to AI
              </p>
            </div>
            <div className="get-started">
              <Link to="/test">
                <button type="submit">GET STARTED</button>
              </Link>
              <div className="timing">
                {" "}
                <img src={Timer} alt="" />3 min
              </div>
            </div>
            <div className="footer">
              <p>*Artificial Intelligence</p>
            </div>
            <div className="instructions">
              <p>
                <strong> If you aren't a Senior/Lead/Executive Pastor,</strong>
                please ask one of them on your team to first take this test -
                ctt1.bleat.church. That test's result will generate a team link
                so you and other team members can then take this same test
                afterward as a team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
