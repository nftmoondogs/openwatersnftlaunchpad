import Link from "next/link";
import Social from "../../SocialProfile/SocialProfile";
import footerLogo from "@assets/images/logo.png";
import { VscChevronUp } from "react-icons/vsc";
import FooterBottomStyleWrapper from "./FooterBottom.style";

const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="footer_bottom_wrapper">
      <Social />
      <div className="container">
        <div className="footer-bottom-content">
          <Link href="#" className="footer-logo">
            <img src={footerLogo.src} alt="footer logo" />
          </Link>


          <div className="copyright-text">
            Copyright © 2023. All Rights Reserved by OpenWaters
            
          </div>
          <div className="scrollup text-center">
            <Link href="#">
              <VscChevronUp />
            </Link>
          </div>
        </div>
      </div>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
