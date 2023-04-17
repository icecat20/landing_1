const ContactUs = ({ logo, icons }) => {
  return (
    <div className="widget contact-widget">
      <h4 className="widget-title">Contact Us</h4>
      <div className="contact-content">
        <div className="phone-number">
          <span>Phone Number</span>
          <a href="tel:+01234567899">
            <i className="far fa-phone" />
            +84 948481368{" "}
          </a>
        </div>
        <p>
          Da Nang, Viet Nam
          <a href="mailto:support@Tilkeinfo.com">maidangloidn2000@gmail.com</a>
        </p>
        {!icons && (
          <img
            src={`/assets/img/${logo ? logo : "logo-white"}.png`}
            alt="Qolle"
          />
        )}
      </div>
      {icons && (
        <ul className="social-links">
          <li>
            <span>Follow</span>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-behance-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default ContactUs;
