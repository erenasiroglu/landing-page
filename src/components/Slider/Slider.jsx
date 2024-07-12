import React from "react";
import styles from "./Slider.module.css";

const Slider = ({ icon, description, imageSrc, title, subtitle, isActive }) => {
  return (
    <div className={`${styles.sliderCard} ${isActive ? styles.active : ""}`}>
      <div className={styles.icon}>
        <img src={icon} alt="Icon" className={styles.iconImage} />
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="Slider Image" className={styles.image} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Slider;
