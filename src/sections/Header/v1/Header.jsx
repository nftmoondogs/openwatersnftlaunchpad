import Link from "next/link";
import { useEffect, useState } from "react";
import { useModal } from "src/utils/ModalContext";
import { MdNotes, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavWrapper from "./Header.style";
import Button from "@components/button";
import MobileMenu from "../MobileMenu/MobileMenu";

import data from "@assets/data/menu/menuData";
import logo from "@assets/images/logo.png";


import connectIcon from "@assets/images/icons/connect.png"
import walletIcon1 from "@assets/images/icons/pancake.png"
import walletIcon2 from "@assets/images/icons/uniswap.png"
import walletIcon3 from "@assets/images/icons/market.png"
import walletIcon4 from "@assets/images/icons/gate.png"



const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  // *******Comment out this code blew if you want to use sticky menu *******
  // useEffect(() => {
  //   const header = document.getElementById("navbar");
  //   const handleScroll = window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 50) {
  //       header.classList.add("sticky");
  //     } else {
  //       header.classList.remove("sticky");
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("sticky", handleScroll);
  //   };
  // }, []);

  const handleWalletBtn = (e) => {
    e.preventDefault();
    walletModalHandle()
  }

  return (
    <NavWrapper className="gamfi_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="gamfi_menu_sect">
          <div className="gamfi_menu_left_sect">
            <div className="logo">
              <Link href="/"> 
                  <img src={logo.src} alt="gamfi nft logo" /> 
              </Link>
            </div>
          </div>
          <div className="gamfi_menu_right_sect gamfi_v1_menu_right_sect">
            <div className="gamfi_menu_list">
              <ul>
                {/* menu  */}
                {data?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.url}>
                      {menu.title} {menu.subMenus?.length > 0 && <MdOutlineKeyboardArrowDown />}
                    </Link>

                    {/* if has subMenu and length is greater than 0 */}
                    {menu.subMenus?.length > 0 && (
                      <ul className="sub_menu_list">
                        {menu.subMenus?.map((subMenu, i) => (
                          <li key={i}>
                            <Link href={subMenu.url}>
                              {subMenu.title} {subMenu?.subMenuChilds?.length > 0 && <MdOutlineKeyboardArrowRight />}
                            </Link>

                            {/* if subMenu child has menu child */}
                            {subMenu?.subMenuChilds?.length > 0 && (
                              <ul className="sub_menu_child_list">
                                {subMenu?.subMenuChilds?.map((subChild, i) => (
                                  <li key={i}>
                                    <Link href={subChild.url}>
                                      {subChild.title}
                                    </Link>
                                  </li>

                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="gamfi_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>

              <div className="wallet_btn">
                Buy WOOF <MdOutlineKeyboardArrowDown />

                <div className="wallet_token_list">
                  <Link href="https://icecreamswap.com/swap?chainId=1116&outputCurrency=0x5C44d3D2312AbA4d5F2406A98Bf374Bc76455092">
                    <img src={walletIcon1.src} alt="icon" /> IceCreamSwap
                  </Link>
                  <Link href="https://shadowswap.xyz/swap?outputCurrency=0x5C44d3D2312AbA4d5F2406A98Bf374Bc76455092&inputCurrency=CORE">
                    <img src={walletIcon2.src} alt="icon" />  ShadowSwap
                  </Link>
                  <Link href="https://archerswap.finance/swap">
                    <img src={walletIcon3.src} alt="icon" />  ArcherSwap
                  </Link>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {/* <!-- mobile menu --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
