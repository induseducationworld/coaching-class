import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { BsFillCaretRightFill } from "react-icons/bs";

const faqData = [
  {
    question: "How to Register or Make An Account in Genius?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat.",
  },
  {
    question: "What is Genius Courses?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat.",
  },
  {
    question: "What Lorem Ipsum Dolor Sit Amet Consectuerer?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat.",
  },
  {
    question: "Adipiscing Diamet Nonnumy Nibh Euismod?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat.",
  },
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? -1 : index);
  };

  return (
    <>
      <section
        id="faq"
        className="faq-section faq-secound-home-version backgroud-style"
      >
        <div className="container">
          <div className="section-title mb45 headline text-center">
            <span className="subtitle text-uppercase">GENIUS COURSE FAQ</span>
            <h2>
              Frequently<span> Asked Questions</span>
            </h2>
          </div>

          <Accordion defaultActiveKey="0">
            {faqData.map((item, index) => (
              <Card key={index}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={index.toString()}
                  onClick={() => handleTabClick(index)}
                >
                  <Button variant="link" className="btn-link">
                    {item.question}
                    <BsFillCaretRightFill
                      className={`ml-2 ${activeTab === index ? "open" : ""}`}
                    />
                  </Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body>{item.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>

          <div className="about-btn text-center">
            <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
              <a href="#">
                Make Question <BsFillCaretRightFill />
              </a>
            </div>
            <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
              <a href="#">
                Contact Us <BsFillCaretRightFill />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
