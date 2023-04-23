import Link from "next/link";
import Countdown, { zeroPad } from 'react-countdown';
import ProgressBar from "@components/progressBar";
import Button from "src/components/button";

import projectIcon from "@assets/images/project/ninga-image.png"
import coinIcon from "@assets/images/project/icon-2.png"
import socialData from "@assets/data/social/dataV2"

import ProjectInfoStyleWrapper from "./ProjectInfo.style";

const ProjectInfo = () => {

  const CountdownRender = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="countdown_wrapper">
        <div>
          {zeroPad(days)}
          <span> Days </span>
      
          {zeroPad(hours)}
          <span> Hours </span>
      
          {zeroPad(minutes)}
          <span> Minutes </span>
       
          {zeroPad(seconds)}
          <span> Seconds</span>
        </div>
      </div>
    )
  }

  return (
    <ProjectInfoStyleWrapper className="live_project_wrapper">
      <div className="game-price-item">
        <div className="game-price-inner">
          <div className="total-price">
            <div className="price-inner d-flex">
              <div className="image-icon">
                <img src={projectIcon.src} alt="icon" />
              </div>
              <div className="price-details">
                <h3>
                  <a>CoreTokyo</a>
                </h3>
                <div className="dsc">Mint PRICE = 18 WOOF </div> 
              
              </div>
            </div>
            <div className="dsc">Core Tokyo is a collection of 9000 avatars that give you membership access to The Core Garden where artists and web3 enthusiasts meet.</div>
          </div>
          <div className="allocation-max text-center">
         
         
          </div>
          <div className="targeted-raise">
            <div className="seles-end-text">Mint Starts In</div>
            <Countdown date="2023-04-30T23:01:03" renderer={CountdownRender} />
        
          </div>
        </div>
      

        <div className="project_card_footer">
    
     
          <div className="social_links">
            {socialData?.map((profile, i) => (
              <Link key={i} href={profile.url}>
                <img src={profile.icon.src} alt="icon" />
              </Link>
            ))}

          </div>
        </div>
      </div>
    </ProjectInfoStyleWrapper>
  );
};

export default ProjectInfo;
