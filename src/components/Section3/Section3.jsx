import React from "react";
import styles from "./Section3.module.css";
import sectionSvg from "../../assets/images/Deco-video.svg";
import videoSvg from "../../assets/images/Desktop.svg";
import checkSvg from "../../assets/icons/check.svg";

const Section3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.content}>
          <div className={styles.title}>Why join us</div>
          <div className={styles.subtitle}>
            <div className={styles.text}>
              <img src={checkSvg} className={styles.icon} alt="Check icon" />
              Est et in pharetra magna adipiscing ornare aliquam.
            </div>
            <div className={styles.text}>
              <img src={checkSvg} className={styles.icon} alt="Check icon" />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </div>
            <div className={styles.text}>
              <img src={checkSvg} className={styles.icon} alt="Check icon" />
              Ullamcorper ornare in et egestas dolor orci.
            </div>
            <div className={styles.button}>Sign up now</div>
          </div>
        </div>
        <img src={sectionSvg} className={styles.sectionSvg} alt="Section SVG" />
        <img src={videoSvg} className={styles.videoSvg} alt="Video SVG" />
      </div>
    </div>
  );
};

export default Section3;
