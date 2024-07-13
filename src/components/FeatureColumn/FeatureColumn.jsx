import React from "react";
import styles from "./FeatureColumn.module.css";
import tunnelSvg from "../../assets/icons/tunnel.svg";
import tvSvg from "../../assets/icons/tv.svg";
import IconSvg from "../../assets/icons/Icon.svg";

import blueRectangle from "../../assets/icons/blue-rectangle.svg";
import greenRectangle from "../../assets/icons/green-rectangle.svg";
import pinkRectangle from "../../assets/icons/pink-rectangle.svg";

const FeatureColumn = () => {
  return (
    <div className={styles.lowerContainer}>
      <div className={styles.column}>
        <img
          src={blueRectangle}
          alt="Background"
          className={styles.backgroundIcon}
        />
        <img src={IconSvg} alt="Feature Icon" className={styles.icon} />
        <div className={styles.columnTitle}>Nibh viverra</div>
        <div className={styles.columnSubtitle}>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa
        </div>
      </div>
      <div className={styles.column}>
        <img
          src={greenRectangle}
          alt="Background"
          className={styles.backgroundIcon}
        />
        <img src={tunnelSvg} alt="Feature Icon" className={styles.icon} />
        <div className={styles.columnTitle}>Cursus amet</div>
        <div className={styles.columnSubtitle}>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa
        </div>
      </div>
      <div className={styles.column}>
        <img
          src={pinkRectangle}
          alt="Background"
          className={styles.backgroundIcon}
        />
        <img src={tvSvg} alt="Feature Icon" className={styles.icon} />
        <div className={styles.columnTitle}>Ipsum fermentum</div>
        <div className={styles.columnSubtitle}>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa
        </div>
      </div>
    </div>
  );
};

export default FeatureColumn;
