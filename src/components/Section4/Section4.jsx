import React, { useRef, useState, useEffect } from "react";
import styles from "./Section4.module.css";
import previousButton from "../../assets/icons/previous-button.svg";
import nextButton from "../../assets/icons/next-button.svg";
import Slider from "../Slider/Slider";

import artVenue from "../../assets/images/art-venue.svg";
import shellsIcon from "../../assets/images/shells-icon.svg";
import zoomerIcon from "../../assets/images/zoomer-icon.svg";

import userThumb from "../../assets/images/user-thumb.svg";
import userThumb1 from "../../assets/images/user-thumb-1.svg";
import userThumb2 from "../../assets/images/user-thumb-2.svg";

const slides = [
  {
    icon: artVenue,
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    imageSrc: userThumb,
    title: "Hellen Jummy",
    subtitle: "Team Lead",
  },
  {
    icon: shellsIcon,
    description:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    imageSrc: userThumb1,
    title: "Hellena John",
    subtitle: "Co-founder",
  },
  {
    icon: zoomerIcon,
    description:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    imageSrc: userThumb2,
    title: "David Oshodi",
    subtitle: "Manager",
  },
  {
    icon: zoomerIcon,
    description:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    imageSrc: userThumb2,
    title: "David Oshodi",
    subtitle: "Manager",
  },
  {
    icon: shellsIcon,
    description:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    imageSrc: userThumb1,
    title: "Hellena John",
    subtitle: "Co-founder",
  },
  {
    icon: artVenue,
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    imageSrc: userThumb,
    title: "Hellen Jummy",
    subtitle: "Team Lead",
  },
];

const Section4 = () => {
  const sliderContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalSlides = slides.length;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const showPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.title}>Because they love us</div>
        <img
          src={previousButton}
          className={styles.button}
          alt="Previous"
          onClick={showPreviousSlide}
        />
        <img
          src={nextButton}
          className={styles.button}
          alt="Next"
          onClick={showNextSlide}
        />
      </div>
      <div className={styles.sliderContainer} ref={sliderContainerRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index >= currentIndex && index < currentIndex + 3 ? styles.activeSlide : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 20}%)`,
              opacity: index >= currentIndex && index < currentIndex + 3 ? 1 : 0,
            }}
          >
            <Slider
              icon={slide.icon}
              description={slide.description}
              imageSrc={slide.imageSrc}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
