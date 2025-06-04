import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>
                At the heart of everything we do is one simple belief:
                “The only thing we're serious about... is food.”
              </p>
            </div>
            <p className="mid">
              We don't just eat we celebrate flavors, cherish traditions, and chase perfection in every bite. 
              Our journey into the world of delicious food is guided by passion, creativity, and the desire to bring joy to every plate.
              From spicy street snacks to elegant fine dining, from traditional home recipes to modern culinary fusions—we explore it all.
              Each dish we create or highlight tells a story, stirs an emotion, and leaves a lasting impression on the senses.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight/>
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;