import React from "react";

function Home() {
  return (
    <>
      <section className="section">
        <div className="container section-continer">
          <h1 className="title">
            <div className="title__mark"></div>
            <span className="section__title-mark  ">Healthy</span> meals, zero
            fuss
          </h1>
          <p className="section__description">
            Discover eight quick, whole-food recipes that you can cook tonight{" "}
            <br />
            —no processed junk, no guesswork.
          </p>
          <button className="btm-menu section__btn">Start exploring</button>
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="/images/image-home-hero-small.webp"
            />
            <img
              className="discover__image"
              src="/images/image-home-hero-large.webp"
              height={530}
            />
          </picture>
        </div>
      </section>

      <section className="section__main">
        <div className="container section__container">
          <h1 className="section__title">What you’ll get</h1>
          <ul className="section__list">
            <li className="section__item">
              <img
                className="section__logo"
                width={30}
                height={30}
                src="./images/icon-whole-food-recipes.svg"
                alt="icon__img"
              />
              <h3 className="section__subtitle">Whole-food recipes</h3>
              <p className="sectionEl__desciption">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </li>
            <li className="section__item">
              <img
                className="section__logo"
                width={30}
                height={30}
                src="/images/icon-minimum-fuss.svg"
                alt="icon__img"
              />
              <h3 className="section__subtitle">Whole-food recipes</h3>
              <p className="sectionEl__desciption">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </li>
            <li className="section__item">
              <img
                className="section__logo"
                width={30}
                height={30}
                src="/images/icon-search-in-seconds.svg"
                alt="icon__img"
              />
              <h3 className="section__subtitle">Whole-food recipes</h3>
              <p className="sectionEl__desciption">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* {word} */}
      <section className="word">
        <div className="container word__container">
          <div className="word__wrapper">
            <h2 className=" word__title">Built for real life</h2>
            <p className="word__desciption">
              Cooking shouldn’t be complicated. These recipes come in under{" "}
              <span className="word-mark">30 minutes</span> of active time, fit
              busy schedules, and taste good enough to repeat.
            </p>
            <p className="word__desciption">
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </p>
          </div>
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="/images/image-home-real-life-small.webp"
            />
            <img
              className="word__image"
              src="/images/image-home-real-life-large.webp"
              width={635}
              height={450}
            />
          </picture>
        </div>
      </section>

      <section className="wordEL">
        <div className="container wordEL__container">
          <div className="wordEL__wrapper">
            <h1 className="wordEL__title ">Ready to cook smarter?</h1>
            <p className="wordEL__description">
              Hit the button, pick a recipe, and get dinner on the table—fast.
            </p>
            <button className=" btm-menu ">Browse recipes</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
