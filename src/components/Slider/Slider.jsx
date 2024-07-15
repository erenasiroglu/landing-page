import React from "react";
import styles from "./Slider.module.css";

const Slider = ({ icon, description, imageSrc, title, subtitle }) => {
  return (
    <div className={styles.sliderCard}>
      <div className={styles.icon}>
        <img src={icon} alt="Icon" className={styles.iconImage} />
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="User" className={styles.image} />
        <div className={styles.textWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
