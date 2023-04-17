import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";
import Counter from "../components/Counter";
import FaqAccordion from "../components/FaqAccordion";
import FreeConsultation from "../components/FreeConsultation";
import TestimonialTwoSlider from "../components/TestimonialTwoSlider";

const LatestProjectsIsotop = dynamic(
  () => import("../components/LatestProjectsIsotop"),
  {
    ssr: false,
  }
);

const IndexPage = () => {
  return (
    <Fragment>
      <section className="hero-area-two have-animate-icons">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-content wow fadeInUp" data-wow-delay="0.3s">
                <span className="tagline">Best Digital Agency</span>
                <h1 className="hero-title">
                  Digital Solutions Agency For Growth Business
                </h1>
                <p>
                  We help to grow small idea into the millions IT business
                  solutions by automating your workflow and building a smart
                  operation!
                </p>
                <a href="#" className="template-btn">
                  Get Started With Us <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-12">
              {/* <div className="hero-img wow fadeInDown" data-wow-delay="0.4s">
                <img
                  src="/assets/img/hero/hero-illustration-two.png"
                  alt="Illustration"
                />
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="animate-icons">
          <img
            src="/assets/img/shape/gradient-pipe.png"
            alt="particles"
            className="icon-one animate-rotate-me"
          />
          <img
            src="/assets/img/shape/wave-line.png"
            alt="particles"
            className="icon-two animate-float-bob-x"
          />
          <img
            src="/assets/img/shape/stars.png"
            alt="particles"
            className="icon-three animate-float-bob-x"
          />
          <img
            src="/assets/img/shape/triangle.png"
            alt="particles"
            className="icon-four animate-float-bob-y"
          />
          <img
            src="/assets/img/shape/triangle-2.png"
            alt="particles"
            className="icon-five animate-rotate-me"
          />
          <img
            src="/assets/img/shape/circle.png"
            alt="particles"
            className="icon-six animate-zoom-fade"
          />
          <img
            src="/assets/img/shape/circle-small.png"
            alt="particles"
            className="icon-seven animate-float-bob-y"
          />
        </div> */}
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Service Section Start ======*/}
      <section className="service-section section-gap">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Services We Provide</h2>
            <span className="tagline">OUR SOLUTIONS</span>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <img src="/assets/img/icon/ai_tech.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service-details">
                      <a>AI Technology Integration</a>
                    </Link>
                  </h5>
                  <p>Integrate GenTech AI-Modules To Your Business</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <img src="/assets/img/icon/tech_solution.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service-details">
                      <a>Technology Consultant</a>
                    </Link>
                  </h5>
                  <p>Consult On Technical Matters With Our Experts</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <img src="/assets/img/icon/data.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service-details">
                      <a>OutsourcingExecutive</a>
                    </Link>
                    &nbsp; &nbsp;
                  </h5>
                  <p>Software, Website, Automation System </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <img src="/assets/img/icon/cloud-download.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service-details">
                      <a>Cyber Security</a>
                    </Link>
                  </h5>
                  <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/*====== Service Section End ======*/}
      <div className="section-blob-bg">
        {/*====== Feature Section Start ======*/}
        <section className="feature-section section-gap-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="feature-images row align-items-center content-mb-md-50">
                  <div className="col-6">
                    <img
                      src="/assets/img/feature-1.jpg"
                      alt="Image"
                      className="animate-float-bob-y"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/feature-2.jpg"
                      alt="Image"
                      className="animate-float-bob-y"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="feature-text-block content-l-spacing">
                  <div className="section-heading mb-50">
                    <h2 className="title">
                      Our Mission Is To Create Innovation Products{" "}
                    </h2>
                    <span className="tagline">
                      We Create A Total New Experience In Your Digital
                      Transformation Journey: Fast And Efficient. Introduce Some
                      Ongoing Project. How GentechSoft Help To Bring Innovative
                      And Efficient{" "}
                    </span>
                  </div>
                  <div className="feature-lists">
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h6 className="title">Chatbot</h6>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h6 className="title">AI And Machine Learning</h6>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h6 className="title">Web &amp; Design Solutions</h6>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h6 className="title">Computer Vision</h6>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h6 className="title">Data Analytics</h6>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="template-btn mt-10">
                    Start a Project <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Feature Section End ======*/}
        {/*====== Counter Section Start ======*/}
        <section className="counter-section counter-boxed">
          <div className="container bg-color-primary section-wave-bg">
            <div className="counter-items row justify-content-lg-between justify-content-center">
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={156} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Happy Clients</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={7856} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Project Complete</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={25} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Years Of Experience</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={8563} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Winning Awards</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Counter Section End ======*/}
        {/*====== Portfolio Section Start ======*/}
        {/* <section className="portfolio-section section-gap">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">Some Of Our Latest Projects</h2>
              <span className="tagline">Best SEO Optimization Agency</span>
            </div>
            <LatestProjectsIsotop />
          </div>
        </section> */}
        {/*====== Portfolio Section End ======*/}
      </div>
      {/*====== Consultation Section Start ======*/}
      <section
        className="consultation-section section-gap bg-cover-center triangle-pattern-left have-blob-image overflow-hidden"
        style={{ backgroundImage: "url(assets/img/consultation-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-lg-between align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10">
              <div className="consultation-form-area">
                <FreeConsultation />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="fancy-image-gallery content-l-spacing content-mt-md-50">
                <div className="images-wrap">
                  <div className="image-one wow fadeInUp" data-wow-delay="0.1s">
                    <img src="/assets/img/fancy-gallery/01.jpg" alt="Image" />
                  </div>
                  <div className="image-two wow fadeInUp" data-wow-delay="0.2s">
                    <img src="/assets/img/fancy-gallery/02.jpg" alt="Image" />
                  </div>
                  <div
                    className="image-three wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <img src="/assets/img/fancy-gallery/03.jpg" alt="Image" />
                  </div>
                  <div
                    className="image-four wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img src="/assets/img/fancy-gallery/04.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blob-image">
          <img src="/assets/img/shape/blob-white.png" alt="" />
        </div>
      </section>
      {/*====== Consultation Section End ======*/}
      {/*====== Call To Action Start ======*/}
      {/* <section className="call-to-action style-two bg-color-primary">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7">
              <div className="cta-content">
                <h2 className="title">
                  Ready To Get Our Professional SEO Service Solutions ?{" "}
                </h2>
                <p className="subtitle">
                  25 Years Of Experience We Provide SEO Services
                </p>
              </div>
            </div>
            <div className="col-auto">
              <p className="cta-note">Get Every Single Updates</p>
              <a href="#" className="template-btn bordered-btn bordered-white">
                Let’s Talk SEO Expertise{" "}
                <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="cta-shape">
          <img src="/assets/img/shape/cta-shape.png" alt="Shape" />
        </div>
      </section> */}
      {/*====== Call To Action End ======*/}

      {/*====== Latest New Section Start ======*/}
    </Fragment>
  );
};
export default IndexPage;
