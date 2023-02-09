import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Filter.module.css";
const Filter = () => {
  return (
    <>
      <section>
        <div className={`${styles.container}`}>
          <ul className={`${styles.categoreis}`}>
            <li>
              Bakery
              <span>
                {" "}
                <FontAwesomeIcon
                  className={`${styles.nav_categories_icon}`}
                  icon={faAngleDown}
                />
              </span>
            </li>
            <li>Fruit and vegetables</li>
            <li>Meat and fish</li>
            <li>Drinks</li>
            <li>Kitchen</li>
            <li>Special nutrition</li>
            <li>Baby</li>
            <li>Pharmacy</li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Filter;
