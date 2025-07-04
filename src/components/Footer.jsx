import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex_box">
      <div className="footer-section contact-form">
        <h3>DROP US A LINE</h3>
        <form action="https://formspree.io/f/mjkyvead" method="POST">
          <input type="text" placeholder="Name" required name="Name" />
          <input
            type="text"
            placeholder="Phone Number"
            required
            name="Phone Number"
          />
          <textarea
            placeholder="Write Your Feedback..."
            name="Feedback"
            required
          ></textarea>
          <button type="submit">Send Message »</button>
        </form>
      </div>

      <div className="footer-section info">
        <h3>HI_TECH</h3>
        <p>
          <strong>Address : </strong>2922/44, Saraswati Marg, opp. Regent Tower,
          Ghaffar Market Beadonpura, Karol Bagh, New Delhi, 110005
        </p>
        <p>
          <strong>Office Contact : </strong>+91 9212 577 577
        </p>
        <p>
          <strong>Email : </strong>info@hitechinstitute.in
        </p>
      </div>

      <div className="footer-section links">
        <h3>LINKS</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/branches">Branches</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          
        </ul>
        <ul className="inner_links">
          <li>
            <Link to="/terms">Terms of services</Link>
          </li>
          <li>
            <Link to="/policy">Private Policy</Link>
          </li>
        </ul>
        <div className="info">
          <div className="gmail">
            <h3>Gmail</h3>
            <p>info@hitechinstitute.in</p>
          </div>
          <div className="phone">
            <h3>Phone Numaber</h3>
            <p>+91 8368204388</p>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <p>HI_TECH © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
