import React from "react";
import styles from "./Section6.module.css";
import shieldSvg from "../../assets/images/chart.svg";
import collectionSvg from "../../assets/images/Ellipses.svg";
import tooltipSvg from "../../assets/images/tooltip.svg";

const Section6 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.background}>
        <img src={shieldSvg} alt="Shield" className={styles.shield} />
        <img
          src={collectionSvg}
          alt="Collection"
          className={styles.collection}
        />
        <img src={tooltipSvg} alt="Tooltip" className={styles.tooltip} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>11,658,467</div>
        <div className={styles.subtitle}>Shoes Collected</div>
      </div>
    </div>
  );
};

export default Section6;
