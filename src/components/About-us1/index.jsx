/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs1Date from "../../data/sections/about-us1.json";

const AboutUs1 = () => {
  return (
    <div className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img-mons">
              <div className="row">
                <div className="wow imago" data-wow-delay=".5s">
                    <img src={AboutUs1Date.image1} alt="" />
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign fadeInLeft">
            <div className="content">
              <div className="sub-title fadeInLeft">
                <h6>{AboutUs1Date.smallTitle}</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="words main-title wow about-content fadeInLeft"
                  data-splitting
                >
                  {AboutUs1Date.title.first} <br /> {AboutUs1Date.title.second}
                </h3>
              </Split>
              <Split>
                <p className="words wow txt about-content fadeInLeft" data-splitting>
                  {AboutUs1Date.content}
                </p>
              </Split>
              <div className="ftbox mt-30">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
