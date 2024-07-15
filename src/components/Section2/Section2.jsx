import React from "react";
import ContentBox from "../ContentBox/ContentBox";
import styles from "./Section2.module.css";
import shoesImage from "../../assets/images/shoes-image-1.svg";
import shoesImage2 from "../../assets/images/shoes-image-2.svg";
import shoesImage3 from "../../assets/images/shoes-image-3.svg";

const Section2 = () => {
  const contentData = [
    {
      imageSrc: shoesImage,
      title: "Title",
      subtitle:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imageSrc: shoesImage2,
      title: "Title",
      subtitle:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      imageSrc: shoesImage3,
      title: "Title",
      subtitle:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
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
