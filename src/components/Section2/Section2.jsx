import React from "react";
import ContentBox from "../ContentBox/ContentBox";
import styles from "./Section2.module.css";

const Section2 = () => {
    const contentData = [
        { imageSrc: "../../assets/images/Picture.svg", title: "Title", subtitle: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." },
        { imageSrc: "/assets/images/Picture(1).svg", title: "Title", subtitle: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." },
        { imageSrc: "/assets/images/Picture(2).svg", title: "Title", subtitle: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.sectionText}>The best of the best</div>
                <button className={styles.signupButton}>Signup Now</button>
            </div>
            <div className={styles.contentBox}>
                {contentData.map((data, index) => (
                    <ContentBox 
                        key={index}
                        imageSrc={data.imageSrc}
                        title={data.title}
                        subtitle={data.subtitle}
                    />
                ))}
            </div>
        </div>
    );
};

export default Section2;
