import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-block footer-text">
          <span>운동파트너 매칭 - MOTIVE</span>
        </div>
        <div className="footer-block footer-logos">
          <div className="logo">
            <img
              src="https://example.com/instagram-logo.png"
              alt="인스타그램 로고"
            />
          </div>
          <div className="logo">
            <img src="https://example.com/twitter-logo.png" alt="트위터 로고" />
          </div>
          <div className="logo">
            <img
              src="https://example.com/facebook-logo.png"
              alt="페이스북 로고"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
