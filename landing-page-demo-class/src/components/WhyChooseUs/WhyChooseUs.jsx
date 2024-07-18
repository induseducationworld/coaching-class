import React from "react";
import banner from "../../assets/img/banner/wc-2.png";

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="why-choose-section backgroud-style">
      <div className="container">
        <div className="section-title mb20 headline text-center ">
          <span className="subtitle text-uppercase">
            INDUS EDUCATION WORLD ADVANTAGES
          </span>
          <h2>
            Reason <span>Why Choose Indus.</span>
          </h2>
        </div>
        <div className="extra-features-content">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="extra-left">
                <div className="extra-left-content ">
                  <div className="extra-icon-text text-left">
                    <div className="features-icon gradient-bg text-center">
                      <i className="flaticon-ruler-and-pencil"></i>
                    </div>
                    <div className="features-text">
                      <div className="features-text-title">
                        <h3>Weekly Tests & Assessments</h3>
                      </div>
                      <div className="features-text-dec">
                        <span>
                          Regular evaluations to track progress and ensure
                          understanding of the material, helping students stay
                          on top of their learning.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="extra-left-content ">
                  <div className="extra-icon-text">
                    <div className="features-icon gradient-bg text-center">
                      <i className="flaticon-clipboard-with-pencil"></i>
                    </div>
                    <div className="features-text pt25">
                      <div className="features-text-title">
                        <h3>AC Classrooms</h3>
                      </div>
                      <div className="features-text-dec">
                        <span>
                          Comfortable and climate-controlled classrooms create
                          an ideal learning environment that enhances focus and
                          productivity.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="extra-left-content ">
                  <div className="extra-icon-text">
                    <div className="features-icon gradient-bg text-center">
                      <i className="flaticon-list"></i>
                    </div>
                    <div className="features-text pt25">
                      <div className="features-text-title">
                        <h3>Small Batch Size</h3>
                      </div>
                      <div className="features-text-dec">
                        <span>
                          With a maximum of 25 students per class, each student
                          receives personalized attention to cater to their
                          individual learning needs.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="extra-pic text-center ">
                <img src={banner} alt="img" />
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="extra-right">
                <div className="extra-left-content ">
                  <div className="extra-icon-text text-right">
                    <div className="features-icon gradient-bg text-center">
                      <i className="flaticon-ruler-and-pencil"></i>
                    </div>
                    <div className="features-text pt25">
                      <div className="features-text-title text-right pb10">
                        <h3>Individual Attention</h3>
                      </div>
                      <div className="features-text-dec text-right">
                        <span>
                          Dedicated attention to each student to address their
                          unique challenges and foster a deeper understanding of
                          the subject matter.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="extra-left-content ">
                  <div className="extra-icon-text text-right">
                    <div className="features-icon gradient-bg text-center">
                      <i className="flaticon-clipboards"></i>
                    </div>
                    <div className="features-text pt25">
                      <div className="features-text-title text-right pb10">
                        <h3>Free Doubt Removal Sessions</h3>
                      </div>
                      <div className="features-text-dec text-right">
                        <span>
                          Scheduled sessions where students can clear their
                          doubts and reinforce their learning for better
                          retention.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="extra-left-content ">
                  <div className="extra-icon-text text-right">
                    <div className="features-icon gradient-bg text-center">
                      <i className="flaticon-pie-chart"></i>
                    </div>
                    <div className="features-text pt25">
                      <div className="features-text-title text-right pb10">
                        <h3>Handwritten Notes & Assignments</h3>
                      </div>
                      <div className="features-text-dec text-right">
                        <span>
                          Comprehensive handwritten notes and assignments
                          designed to enhance understanding and retention of
                          complex concepts.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
