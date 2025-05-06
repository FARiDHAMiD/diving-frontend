const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer>
        <div className="footer-background">
          <img
            src="/assets/da00331fa56515d69b4ebcbdbc355aeb414694ad (1).jpg"
            alt=""
          />
        </div>{" "}
        {/* Add this div */}
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/assets/Frame 88 (2).svg" alt="" />
            <p>Plunge</p>
          </div>
          <div className="footer-i">
            <div className="social">
              <img src="/assets/Facebook.svg" alt="" />
              <img src="/assets/Instagram.svg" alt="" />
            </div>
          </div>
          {/* Trainings Section */}
          <div className="trainings">
            <h3 className="trainings-title">Trainings</h3>
            <ul>
              <li>
                <a href="#">Night Diving</a>
              </li>
              <li>
                <a href="#">Scopa Diving</a>
              </li>
              <li>
                <a href="#">Boat Diving</a>
              </li>
              <li>
                <a href="#">Wreck Diving</a>
              </li>
              <li>
                <a href="#">Deep Diving</a>
              </li>
              <li>
                <a href="#">Sea Diving</a>
              </li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div className="quick-links">
            <h3 className="quick-links-title">Quick Links</h3>
            <ul>
              <li>
                <a href="../home/index.html">Home</a>
              </li>
              <li>
                <a href="../project/index.html">About Us</a>
              </li>
              <li>
                <a href="#">Diving Gear</a>
              </li>
              <li>
                <a href="../contact us/index.html">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Plunge - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
