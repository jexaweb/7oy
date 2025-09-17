import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="mission">
        <div className="container mission__inner">
          <div className="mission__content">
            <span className="mission__label">Our mission</span>
            <h1 className="mission__title ">
              Help more people cook nourishing meals, more often.
            </h1>
            <p className="mission__text ">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p className="mission__text ">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
          <div className="mission__image">
            <img
              src="../images/pattern-squiggle-2.svg"
              alt=""
              className="img-marc"
            />
            <picture>
              <source
                media="(max-width: 500px)"
                srcSet="/images/image-about-our-mission-small.webp"
              />
              <img
                className="mission__img"
                src="/images/image-about-our-mission-large.webp"
                height="600"
                width="618"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container values__inner">
          <h1 className="values__title ">Why we exist</h1>
          <ul className="values__list">
            <li className="values__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="values__content">
                <h3 className="values__heading">Cut through the noise.</h3>
                <p className="values__text">
                  The internet is bursting with recipes, yet most busy cooks
                  still default to take-away or packaged foods. We curate a
                  tight collection of fool-proof dishes so you can skip the
                  scrolling and start cooking.
                </p>
              </div>
            </li>
            <li className="values__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="values__content">
                <h3 className="values__heading">Empower home kitchens.</h3>
                <p className="values__text">
                  When you control what goes into your meals, you control how
                  you feel. Every recipe is built around unrefined ingredients
                  and ready in about half an hour of active prep.
                </p>
              </div>
            </li>
            <li className="values__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="values__content">
                <h3 className="values__heading">Make healthy look good.</h3>
                <p className="values__text">
                  High-resolution imagery shows you exactly what success looks
                  like—because we eat with our eyes first, and confidence
                  matters.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="philosophy">
        <div className="container philosophy__inner">
          <h1 className="philosophy__title ">Our food philosophy</h1>
          <ul className="philosophy__list">
            <li className="philosophy__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="philosophy__content">
                <h3 className="philosophy__heading">
                  Whole ingredients first.
                </h3>
                <p className="philosophy__text">
                  Fresh produce, grains, legumes, herbs, and quality fats form
                  the backbone of every recipe.
                </p>
              </div>
            </li>
            <li className="philosophy__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="philosophy__content">
                <h3 className="philosophy__heading">
                  Flavor without compromise.
                </h3>
                <p className="philosophy__text">
                  Spices, citrus, and natural sweetness replace excess salt,
                  sugar, and additives.
                </p>
              </div>
            </li>
            <li className="philosophy__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="philosophy__content">
                <h3 className="philosophy__heading">Respect for time.</h3>
                <p className="philosophy__text">
                  Weeknight meals should slot into real schedules; weekend
                  cooking can be leisurely but never wasteful.
                </p>
              </div>
            </li>
            <li className="philosophy__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="philosophy__content">
                <h3 className="philosophy__heading">Sustainable choices.</h3>
                <p className="philosophy__text">
                  Short ingredient lists cut down on food waste and carbon
                  footprint, while plant-forward dishes keep things
                  planet-friendly.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="community">
        <div className="container community__inner">
          <div className="community__content">
            <h1 className="community__title ">Beyond the plate</h1>
            <p className="community__text">
              We believe food is a catalyst for <br /> community and well-being.
              By sharing <br /> approachable recipes, we hope to:
            </p>
            <ul className="community__list">
              <li className="community__item">
                Encourage family dinners and social cooking.
              </li>
              <li className="community__item">
                Reduce reliance on single-use <br /> packaging and delivery
                waste.
              </li>
              <li className="community__item">
                Spark curiosity about seasonal produce and local agriculture.
              </li>
            </ul>
          </div>
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="/images/image-about-beyond-the-plate-small.webp"
            />
            <img
              className="community__img"
              src="/images/image-about-beyond-the-plate-large.webp"
              width="744"
              height="400"
            />
          </picture>
        </div>
      </section>

      <section className="cta__inner ">
        <div className="container  cta__wrapper">
          <div className="cta__content">
            <h1 className="cta__title ">Ready to cook smarter?</h1>
            <p className="cta__description">
              Hit the button, pick a recipe, and get dinner on the table—fast.
            </p>
            <button className="btm-menu  cta__btn">
              {" "}
              <Link to={"/recipes"}>Browse recipes</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
