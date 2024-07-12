import React from "react";
import styles from "./Section1.module.css";
import playCircle from "../../assets/icons/play-circle.svg";
import sneakerImage from "../../assets/images/Col.svg";
import tunnelSvg from "../../assets/icons/tunnel.svg";
import tvSvg from "../../assets/icons/tv.svg";
import IconSvg from "../../assets/icons/Icon.svg";


const Section1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.upperContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.title}>Collectible Sneakers</div>
                    <div className={styles.subtitle}>
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                    </div>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.button}>Sign up Now</div>
                        <div className={styles.videoButton}>
                            <img src={playCircle} alt="Play Icon" className={styles.icon} />
                            Watch Demo
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <img src={sneakerImage} alt="Sneaker" className={styles.image} />
                </div>
            </div>

            <div className={styles.lowerContainer}>
                <div className={styles.column}>
                    {<img src={tunnelSvg} alt="Tunnel" className={styles.icon} />}
                    <div className={styles.columnTitle}>Nibh viverra</div>
                    <div className={styles.columnSubtitle}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </div>
                </div>
                <div className={styles.column}>
                {<img src={tvSvg} alt="Tunnel" className={styles.icon} />}
                    <div className={styles.columnTitle}>Cursus amet</div>
                    <div className={styles.columnSubtitle}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </div>
                </div>
                <div className={styles.column}>
                {<img src={IconSvg} alt="Tunnel" className={styles.icon} />}
                    <div className={styles.columnTitle}>Ipsum fermentum</div>
                    <div className={styles.columnSubtitle}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
