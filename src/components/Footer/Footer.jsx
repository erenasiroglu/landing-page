import React from 'react';
import styles from './Footer.module.css';
import appStoreSvg from '../../assets/icons/app-store.svg';
import googlePlaySvg from '../../assets/icons/google-play.svg';
import youtubeSvg from '../../assets/icons/youtube.svg';
import facebookSvg from '../../assets/icons/facebook.svg';
import twitterSvg from '../../assets/icons/twitter.svg';
import instagramSvg from '../../assets/icons/instagram.svg';
import linkedinSvg from '../../assets/icons/linkedin.svg';
import worldSvg from '../../assets/icons/world.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Product</h3>
          <ul>
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
            <li>Five</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Solutions</h3>
          <ul>
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Design</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
            <li>Reports</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Get the App</h3>
          <ul>
            <li><img src={appStoreSvg} alt="App Store" /></li>
            <li><img src={googlePlaySvg} alt="Google Play" /></li>
          </ul>
          <div className={styles.followUs}>
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
              <img src={youtubeSvg} alt="YouTube" />
              <img src={facebookSvg} alt="Facebook" />
              <img src={twitterSvg} alt="Twitter" />
              <img src={instagramSvg} alt="Instagram" />
              <img src={linkedinSvg} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.separator} />
      <div className={styles.bottom}>
        <p className={styles.left}>Collers @ 2023. All rights reserved.</p>
        <p className={styles.right}>
          <span>Terms</span> <span>Privacy</span> <span>Contact</span> 
          <span className={styles.language}>
            <img src={worldSvg} alt="World" className={styles.worldIcon} />
            EN
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
