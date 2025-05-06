const Home = () => {
  return (
    <>
      {/*      carousel section       */}
      <section>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active rounded-circle"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
              className="rounded-circle click"
              id="buttom"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/photos/cracoul/Frame 31 (2).png"
                className="d-block w-100"
                alt="home-img"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  Discover new dive spots, plan your trips, and find the perfect
                  gear within a trusted community.
                </h1>
                <button type="button" className="new-style">
                  <a href="../course/index.html">
                    Become An Advanced Dive
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/photos/cracoul/Frame 1984078292.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  Join a vibrant diving network, share experiences, and enhance
                  your skills with advanced tools
                </h1>
                <button type="button" className="main-style style1">
                  Sign In
                </button>
                <button type="button" className="main-style style2">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*          Why to learn            */}
      <section>
        <div className="container">
          <div className="Why-Plunge">
            <h2 className="center">The Ultimate Way to Learn Diving</h2>
            <p className="center">
              Plunge makes learning to dive an exciting and safe adventure,
              guided by expert instructors who bring the underwater world to
              life
            </p>
            <div className="item-wrapper">
              <div className="Why-Plunge-item">
                <img src="/assets/photos/way to learn/Frame 163.svg" alt="svg1" />
                <h3>Best Equipment</h3>
                <p>
                  We provide top-quality diving gear <br /> to ensure a safe and
                  enjoyable <br /> underwater experience.
                </p>
                <br />
                <img src="/assets/photos/way to learn/Frame 162.svg" alt="svg1" />
                <h3>Exciting Places</h3>
                <p>
                  Explore breathtaking dive sites <br /> around the world, from
                  coral reefs <br /> to sunken shipwrecks.
                </p>
              </div>
              <div className="like">
                <img
                  src="/assets/photos/way to learn/Scuba diver in the bottom of the sea.png"
                  alt="svg2"
                />
              </div>
              <div className="Why-Plunge-item match">
                <img src="/assets/photos/way to learn/Frame 164.svg" alt="svg3" />
                <h3>100% Safety</h3>
                <p>
                  Our professional instructors and <br /> well-maintained
                  equipment ensure <br /> maximum safety during every dive.
                </p>
                <br />
                <img src="/assets/photos/way to learn/Frame 165.svg" alt="svg3" />
                <h3>Instructors</h3>
                <p>
                  Explore breathtaking dive sites <br /> around the world, from
                  coral reefs <br /> to sunken shipwrecks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*             img-section                  */}
      <section>
        <div className="holder">
          <div className="image-holder">
            <div className="shark">
              <img
                src="/assets/photos/third section/Frame 24 (1).png"
                alt="shark"
                className="main-image"
              />
            </div>
            <div className="fin-shape" />
          </div>
          <div className="text-slid">
            <div className="first-text">
              <h4>Do You Want To Be A Professional Diver?</h4>
              <p className="text-capitalize">
                it is a dream created by a diver's unique <br /> experiences in
                different places and now we are <br /> at the point where you
                can make your dreams <br /> come true.
              </p>
            </div>
            <br />
            <div className="rab">
              <div className="second-text">
                <img src="/assets/photos/third section/Frame 27.svg" alt="" />
                <h4>Rofessional Team</h4>
                <p className="text-capitalize">
                  we bring you together with the plunge by <br /> adding your
                  friendliness as well as <br /> professionalism.
                </p>
              </div>
            </div>
            <br />
            <div className="hold">
              <div className="third-text">
                <img src="/assets/photos/third section/Frame 32.svg" alt="" />
                <h4>Professional Trainings</h4>
                <p>
                  We Aim To Be Bble To Dive The Best <br /> Equipment And Always
                  Respectful To <br /> Nature And Fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*       text section         */}
      <section>
        <div className="container">
          <div className="text-bold">
            <div className="expert-staff text-shad">
              <h4>expert staff</h4>
              <img
                src="/assets/photos/text section/Frame 21 (1).svg"
                alt="expert staff"
              />
              <p>
                we are at your service with our professional staff ,each of whom
                is an expert in their own field.
              </p>
            </div>
            <div className="education text-shad">
              <h4>education &amp; discipline</h4>
              <img
                src="/assets/photos/text section/Frame 21.svg"
                alt="education & discipline"
              />
              <p>
                We make your dreams come true by providing professional diver
                training to all person corporate people.
              </p>
            </div>
            <div className="structuring text-shad">
              <h4>structuring</h4>
              <img src="/assets/photos/text section/Frame 22.svg" alt="structuring" />
              <p>
                We create professional divers by solving the needs of our
                customers from end to end with our expert staff.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*       img section     */}
      <section>
        <div className="holding">
          <div className="good-diving">
            <img
              src="/assets/photos/img section/0951a47da92149655091d77919fccaa41fc32735.jpg"
              alt="diving"
            />
            <div className="text-good">
              <h2 className="text-capitalize">
                do you want to be a <br /> good diver?
              </h2>
              <p className="text-capitalize">
                experience the comfort of diving.
              </p>
              <button
                type="button"
                className="new-style text-capitalize new-but img-section-but"
              >
                <a href="../course/index.html">
                  learn more
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*     photo diving      */}
      <section>
        <div className="container">
          <div className="diving-img">
            <div>
              <img src="/assets/photos/photo diving/Frame 96.png" alt="solo" />
              <button
                type="button"
                className="main-style style2 but-main text-capitalize photo-diving-but"
              >
                Sign Up
              </button>
            </div>
            <div>
              <img src="/assets/photos/photo diving/Frame 95.png" alt="group" />
              <button
                type="button"
                className="main-style style2 but-main2 text-capitalize photo-diving-but"
              >
                <a href="../course/index.html">courses for diving</a>
              </button>
            </div>
            <div>
              <img src="/assets/photos/photo diving/Frame 94.png" alt="deep" />
              <button
                type="button"
                className="main-style style2 but-main3 text-capitalize photo-diving-but"
              >
                <a href="../course/index.html">become a plunge pro</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*         join the PLUNGE            */}
      <section>
        <div className="holding">
          <div className="good-diving">
            <img
              src="/assets/photos/join the PLUNGE/c0e74b4a956aeb39b0ac98b228c7f582732b9bfa.jpg"
              alt="diving"
            />
            <div className="text-good">
              <h2 className="text-capitalize high-join">
                join the PLUNGE Club Community!
              </h2>
              <br />
              <p className="text-capitalize">
                {" "}
                Connect with fellow divers, share your adventures, and get{" "}
                <br /> exclusive access to events, tips, and special offers.
                Whether <br /> you're a beginner or a pro, our community is here
                to <br /> support your diving journey!
              </p>
              <br />
              <br />
              <button
                type="button"
                className="main-style style2 join-style size- text-capitalize join-but"
              >
                join plunge community
              </button>
              <button
                type="button"
                className="main-style style1 join-style text-capitalize join-but"
              >
                already a member? sign in
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*       for deivers       */}
      <section>
        <div className="container">
          <div className="diving-img">
            <div className="for-divers">
              <img src="/assets/photos/for drivers/Frame 94 (1).png" alt="solo" />
              <h5 className="text-capitalize">for beginners</h5>
              <h5 className="text-capitalize">open water diver</h5>
            </div>
            <div className="for-divers">
              <img src="/assets/photos/for drivers/Frame 95 (1).png" alt="group" />
              <h5 className="text-capitalize">for divers</h5>
              <h5 className="text-capitalize">advanced open water</h5>
              <br />
              <br />
              <button
                type="button"
                className="main-style style2 but-main4 text-capitalize"
              >
                <a href="../course/index.html">see all courses</a>
              </button>
            </div>
            <div className="for-divers">
              <img src="/assets/photos/for drivers/Frame 96 (1).png" alt="deep" />
              <h5 className="text-capitalize">for divers</h5>
              <h5 className="text-capitalize">
                under water navigator specialty course
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/*        destinations          */}
      <section>
        <div className="container">
          <div className="content-text">
            <h2 className="text-capitalize">destinations</h2>
            <p>
              Discover breathtaking dive spots where stunning nature meets
              crystal-clear waters and vibrant marine life. Whether you seek a
              peaceful dive among coral reefs or a thrilling encounter with
              unique sea creatures, we’ll help you plan the perfect journey.
            </p>
            <button
              type="button"
              className="main-style style2 but-main4 text-capitalize"
            >
              see all courses
            </button>
          </div>
          <div className="diving-img">
            <div className="for-divers">
              <img src="/assets/photos/destnation/Frame 98.png" alt="solo" />
              <h6 className="text-capitalize">
                Ras Mohammed – Sharm El Sheikh
              </h6>
              <h6 className="text-capitalize">
                A world-class dive site with stunning coral walls,
                <br /> strong currents, and plenty of sharks, turtles, and
                barracudas.
              </h6>
            </div>
            <div className="for-divers">
              <img src="/assets/photos/destnation/Frame 99.png" alt="group" />
              <h6 className="text-capitalize">Blue Hole – Dahab</h6>
              <h6 className="text-capitalize">
                A famous deep sinkhole, perfect for adventurous <br /> divers,
                with vibrant coral reefs.
              </h6>
              <br />
              <br />
            </div>
            <div className="for-divers">
              <img src="/assets/photos/destnation/Frame 100.png" alt="deep" />
              <h6 className="text-capitalize">
                SS Thistlegorm Wreck – Red Sea
              </h6>
              <h6 className="text-capitalize">
                One of the world’s greatest wreck dives, blending <br />{" "}
                adventure, history, and incredible marine life.
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/*       diving equipment      */}
      <section>
        <div className="holding">
          <div className="good-diving">
            <img
              src="/assets/photos/diving  equipment/90b2c43c0526e2f5097f5b06b57eb6405904b8a4.jpg"
              alt="diving"
            />
            <div className="text-good text-shop">
              <h2 className="text-capitalize mb-4">
                high quality <br /> diving equipment
              </h2>
              <button
                type="button"
                className="new-style text-capitalize new-but equipment-but"
              >
                shop now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*        our professional       */}
      <section>
        <div className="container text-capitalize">
          <div className="text">
            <h4 className="text-center text-capitalize">
              our professional diver trainings
            </h4>
            <p className="text-capitalize text-center">
              discover the mysterious world of underwater with us.
            </p>
            <button
              type="button"
              className="new-style text-capitalize new-but but-profition defrint"
            >
              <a href="../course/index.html">
                all training
                <i className="fa-solid fa-arrow-right" />
              </a>
            </button>
          </div>
          <div className="card-img">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/assets/photos/our profitional/Frame 68.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5>scuba diving</h5>
                <p className="card-text">
                  Scuba Diver is the perfect program for <br /> those who don't
                  have time to complete an entire Open Water <br /> Diver
                  Program.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/assets/photos/our profitional/Frame 68 (1).png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5>scuba diving</h5>
                <p className="card-text">
                  Scuba Diver is the perfect program for <br /> those who don't
                  have time to complete an entire Open Water <br /> Diver
                  Program.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/assets/photos/our profitional/Frame 68 (2).png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5>boat diving</h5>
                <p className="card-text">
                  It is possible to reach many of the best diving spots in the
                  world with a boat. This could be a small personal watercraft.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/assets/photos/our profitional/Frame 68 (3).png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5>wreck diving</h5>
                <p className="card-text">
                  Diving into wrecks is exciting and carries some risks. But
                  with the right training, it turns into a great adventure.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/assets/photos/our profitional/Frame 68 (5).png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5>deep diving</h5>
                <p className="card-text">
                  Without proper training, these dives carry great risks. You
                  need to know all the potential risks associated with deep
                  diving.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/assets/photos/our profitional/Frame 68 (4).png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5>open water diving</h5>
                <p className="card-text">
                  Safe and efficient divers have knowledge of everything that
                  affects their underwater experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
