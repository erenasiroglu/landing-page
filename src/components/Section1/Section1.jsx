import React from "react";
import styles from "./Section1.module.css";
import playCircle from "../../assets/icons/play-circle.svg";
import sneakerImage from "../../assets/images/Col.svg";
import FeatureColumn from "../FeatureColumn/FeatureColumn";

const Section1 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upperContainer}>
          <div className={styles.leftSide}>
            <div className={styles.title}>Collectible Sneakers</div>
            <div className={styles.subtitle}>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </div>
            <div className={styles.buttonsContainer}>
              <div className={styles.button}>Sign up now</div>
              <div className={styles.videoButton}>
                <img src={playCircle} alt="Play Icon" className={styles.icon} />
                <div className={styles.text}>Watch Demo</div>
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={sneakerImage} alt="Sneaker" className={styles.image} />
          </div>
        </div>
      </div>
      <FeatureColumn />
    </>
  );
};

export default Section1;
