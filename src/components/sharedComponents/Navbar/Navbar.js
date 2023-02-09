import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faShoppingBasket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={`${styles.container}`}>
        {/* UPPER NAV */}
       {/* <div className={`${styles.nav_top}`}> */}
          {/* LEFT */}
          {/* <ul className={`${styles.nav_contacts}`}>
            <li className={`${styles.nav_chat}`}>Chat with us</li>
            <li>+420 336 775 664</li>
            <li>info@freshnesecom.com</li>
          </ul> */}
          {/* right */}
          {/* <ul className={`${styles.nav_sections}`}>
            <li>blog</li>
            <li>About us</li>
            <li>careers</li>
          </ul> */}
        {/* </div>  */}
       
        {/* BOTTOM NAV */}
        <div className={`${styles.nav_bottom}`}>
          {/* LOGO */}
          <div className={`${styles.nav_logo}`}>Freshness</div>
          {/* SERACH BAR */}
          <div className={`${styles.nav_search}`}>
            <div className={`${styles.nav_categories}`}>
              all categories
              <span>
                {" "}
                <FontAwesomeIcon
                  className={`${styles.nav_categories_icon}`}
                  icon={faAngleDown}
                />
              </span>
            </div>
            <div className={`${styles.search_input_wrapper}`}>
              <input
              className={`${styles.search_input}`}
                type={"text"}
                placeholder="Search Products, categories ..."
              />
              <FontAwesomeIcon className={`${styles.search_icon}`}icon={faSearch} />
            </div>
          </div>
          {/* LOGIN / CART */}
          <div className={`${styles.nav_icons}`}>
            <div className={`${styles.login_icon_container}`}><FontAwesomeIcon className={`${styles.icon}`} id={`${styles.login_icon}`} icon={faUser} /></div>
            {/* <FontAwesomeIcon icon="fa-regular fa-user" /> */}
            <div className={`${styles.cart_icon_container}`}><FontAwesomeIcon className={`${styles.icon}`}  id={`${styles.cart_icon}`} icon={faShoppingBasket} /></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
