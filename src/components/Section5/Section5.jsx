import React from "react";
import styles from "./Section5.module.css";
import podcastSvg from "../../assets/icons/podcast.svg";
import rocketSvg from "../../assets/icons/rocket.svg";
import screenSvg from "../../assets/icons/screen.svg";
import searchSvg from "../../assets/icons/search.svg";
import settingsSvg from "../../assets/icons/settings-alt.svg";
import shieldSvg from "../../assets/icons/shield-check.svg";
import collectionSvg from "../../assets/images/collection.svg";

const Section5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>Grow your collection</div>
        <div className={styles.subtitle}>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <img src={podcastSvg} alt="Podcast Icon" />
            <span>Podcast</span>
          </div>
          <div className={styles.iconButton}>
            <img src={rocketSvg} alt="Rocket Icon" />
            <span>Rocket</span>
          </div>
          <div className={styles.iconButton}>
            <img src={screenSvg} alt="Screen Icon" />
            <span>Screen</span>
          </div>
          <div className={styles.iconButton}>
            <img src={searchSvg} alt="Search Icon" />
            <span>Search</span>
          </div>
          <div className={styles.iconButton}>
            <img src={settingsSvg} alt="Settings Icon" />
            <span>Settings</span>
          </div>
          <div className={styles.iconButton}>
            <img src={shieldSvg} alt="Shield Icon" />
            <span>Shield</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imagesContainer}>
          <img src={collectionSvg} alt="Collection Icon" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
