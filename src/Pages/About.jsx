const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="space">
            <div className="text">
              <p>
                <span className="brand">Plunge</span> Is Your
                <span className="highlight">All-In-One Platform</span> For{" "}
                <br /> Diving In Egypt. Whether You’re A <br />
                Beginner Or An Experienced Diver, Plunge <br /> Helps You Grow,
                Connect, And Explore. <br /> From Booking Certified Courses To{" "}
                <br /> Discovering Top Dive Sites. We’re Here To <br /> Support
                Every Step Of Your Underwater <br /> Journey.
              </p>
            </div>
          </div>
          <div className="image-wrapper">
            <div className="background-shape">
              <img src="/assets/Vector.svg" alt="shape" />
            </div>
            <img
              className="diver-img"
              src="/assets/Polygon 24.svg"
              alt="Diver"
            />
            <div className="decor">
              <img src="/assets/Vector (2).svg" alt="star" />
            </div>
            <div className="dimond-img">
              <img src="/assets/Vector (1).svg" alt="dimo" />
            </div>
            <div className="squiggle">
              <img src="/assets/Frame.svg" alt="decor" id="scrol" />
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section>
        <div className="container">
          <div className="image-diving">
            <div className="photo-shape">
              <img src="/assets/Vector.svg" alt="shape" />
            </div>
            <img
              className="diver-img"
              src="/assets/Polygon 25.svg"
              alt="Diver"
            />
            <div className="second-decor">
              <img src="/assets/Vector (2).svg" alt="star" />
            </div>
            <div className="shine">
              <img src="/assets/Vector (1).svg" alt="dimo" />
            </div>
            <div className="demo-img">
              <img src="/assets/Frame.svg" alt="decor" id="demo" />
            </div>
          </div>
          <div className="gap">
            <div className="text-style">
              <h2>
                We are always working <br /> to provide you best of <br /> the
                features in all <br /> aspects.
              </h2>
              <p>
                Discover the magic of diving through professional, certified
                courses <br /> tailored for all levels. Whether you’re taking
                your first breath underwater or <br /> aiming to sharpen your
                skills, Plunge helps you dive deeper with <br /> confidence.
                Explore detailed dive sites across Egypt{" "}
              </p>
              <br />
              <p>
                Join a growing community of passionate divers, where stories are
                shared, <br /> trips are planned, and friendships are built.
                Browse the marketplace to buy <br /> and sell diving gear, find
                trusted equipment, and prepare yourself for <br /> unforgettable
                underwater experiences . all in one place
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*     Why Plunge section     */}
      <section>
        <div className="contain">
          <div className="Why-Plunge">
            <h2 className="center">Why Plunge?</h2>
            <p className="center">
              Plunge isn’t just another diving platform it’s your trusted
              companion <br /> below the surface. Here’s what makes us stand
              out:
            </p>
            <div className="item-wrapper">
              <div className="Why-Plunge-item match">
                <img src="/assets/./why-plunge img/Group 5.svg" alt="svg1" />
                <h3>All-in-One Access</h3>
                <p>
                  Courses, gear, dive sites, community all in one simple
                  platform
                </p>
              </div>
              <div className="Why-Plunge-item like">
                <img
                  src="/assets/./why-plunge img/card number.svg"
                  alt="svg2"
                />
                <h3>Built for Divers in Egypt</h3>
                <p>
                  Local content, local sites, and features designed with
                  Egyptian divers in mind.
                </p>
              </div>
              <div className="Why-Plunge-item match">
                <img
                  src="/assets/./why-plunge img/card number (1).svg"
                  alt="svg3"
                />
                <h3> Save Time &amp; Dive Smarter</h3>
                <p>
                  Plan trips, manage gear, and stay updated with less effort.
                </p>
              </div>
              <div className="Why-Plunge-item like">
                <img
                  src="/assets/./why-plunge img/Group 5 (1).svg"
                  alt="svg4"
                />
                <h3> Community Driven Experience</h3>
                <p>
                  Real stories, real divers. connect with people who share your
                  passio
                </p>
              </div>
              <div className="Why-Plunge-item match">
                <img
                  src="/assets/./why-plunge img/Group 5 (2).svg"
                  alt="svg5"
                />
                <h3>User Friendly Design</h3>
                <p>Smooth, modern interface that makes navigation a breeze.</p>
              </div>
              <div className="Why-Plunge-item like">
                <img
                  src="/assets/./why-plunge img/card number (3).svg"
                  alt="svg6"
                />
                <h3>Safety &amp; Support First</h3>
                <p>
                  Always stay informed with safety tips, alerts, and training
                  resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
