import Counter from "@components/counter";
import Button from "@components/button";

import rocketThumb from "@assets/images/homeV3/animition_avater.png";
import dollorIcon from "@assets/images/icons/dollar-dollar-color.svg"
import rocketIcon from "@assets/images/icons/rocket-dynamic-color.svg"
import ufoShape from "@assets/images/homeV3/uFO.png"

import BannerStyleWrapper from "./Banner.style";
const Banner = () => {
  return (
    <>
      <BannerStyleWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="gamfi_v2_hero_left">
                <h2>OpenWaters <br /> NFT
                  
                  Launchpad
             
                </h2>
                <p>
                OpenWaters NFT Launchpad offers Game changing IDOs and NDOs, no gas wars, fair distribution of new and upcoming NFT projects on CoreDAO Blockchain.
                </p>
                <div className="banner-btns">
                  <Button href="/projects-details-1" md variant="mint">
                    View Projects
                  </Button>
                  <Button href="https://forms.gle/wgWDZ8suwwLoVj1XA" md variant="outline">
                    Apply for listing
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    <img src={rocketThumb.src} alt="Rocket thumb" />
                  </span>
                </div>

    
              </div>
            </div>
          </div>
        </div>

        <img src={ufoShape.src} alt="ufo shape" className="ufo_shape" />
      </BannerStyleWrapper>
    </>
  );
};

export default Banner;
