import React from "react";
import styles from "./ContentBox.module.css";
import shoppingCart from "../../assets/icons/shopping-cart.svg";

const ContentBox = ({ imageSrc, title, subtitle }) => {
    return (
        <div className={styles.contentBox}>
            <div className={styles.imagePlaceholder} style={{ backgroundImage: `url(${imageSrc})` }}></div>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
            <button className={styles.buyButton}>
                <img src={shoppingCart} alt="Cart" className={styles.icon} />
                Buy Now
            </button>
        </div>
    );
};

export default ContentBox;
