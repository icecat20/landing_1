const Sidebar = ({ active, close }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${active ? "show-panel" : ""}`}
    >
      <div className="panel-overlay" onClick={() => close()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="/assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">About Us</h5>
          <p>
            We Create A Total New Experience In Your Digital Transformation
            Journey: Fast And Efficient. Introduce Some Ongoing Project. How
            GentechSoft Help To Bring Innovative And Efficient
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              Da Nang, Viet Nam
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:support@Qolle.com">maidangloidn2000@gmail.com</a>
              <a href="mailto:info@Qolle.com">maidangloidn2000@gmail.com</a>
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+01234567899">+84 94848149</a>
              <br />
              <a href="tel:+8563214">+84 94848149</a>
            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => close()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
