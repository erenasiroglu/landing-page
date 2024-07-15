import React from "react";
import styles from "./Section5.module.css";
import podcastSvg from "../../assets/icons/podcast.svg";
import rocketSvg from "../../assets/icons/rocket.svg";
import screenSvg from "../../assets/icons/screen.svg";
import searchSvg from "../../assets/icons/search.svg";
import settingsSvg from "../../assets/icons/settings-alt.svg";
import shieldSvg from "../../assets/icons/shield-check.svg";
import collectionSvg from "../../assets/images/collection.svg";
import arrowSvg from "../../assets/icons/arrow-right.svg";

const Section5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.title}>Grow your collection</div>
        <div className={styles.subtitle}>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <img src={searchSvg} alt="Search Icon" />
            <span>Bibendum tellus</span>
            <img className={styles.arrowIcon} src={arrowSvg} alt="Arrow Icon" />
          </div>
          <div className={styles.iconButton}>
            <img src={shieldSvg} alt="Shield Icon" />
            <span>Cras eqet</span>
            <img className={styles.arrowIcon} src={arrowSvg} alt="Arrow Icon" />
          </div>
          <div className={styles.iconButton}>
            <img src={rocketSvg} alt="Rocket Icon" />
            <span>Dolor pharetra</span>
            <img className={styles.arrowIcon} src={arrowSvg} alt="Arrow Icon" />
          </div>
          <div className={styles.iconButton}>
            <img src={screenSvg} alt="Screen Icon" />
            <span>Amet, fringilla</span>
            <img className={styles.arrowIcon} src={arrowSvg} alt="Arrow Icon" />
          </div>
          <div className={styles.iconButton}>
            <img src={podcastSvg} alt="Podcast Icon" />
            <span>Amet nibh</span>
            <img className={styles.arrowIcon} src={arrowSvg} alt="Arrow Icon" />
          </div>
          <div className={styles.iconButton}>
            <img src={settingsSvg} alt="Settings Icon" />
            <span>Sed velit</span>
            <img className={styles.arrowIcon} src={arrowSvg} alt="Arrow Icon" />
          </div>
        </div>
        <div className={styles.imagesContainer}>
          <img src={collectionSvg} alt="Collection Icon" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
