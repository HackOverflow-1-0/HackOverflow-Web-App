import classes from "./FAQ.module.css";
import { useState } from "react";
const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [active, setActive] = useState(true);
  const questionaire = [
    {
      question: "What is the maximum number of members allowed in a team?",
      answer:
        "Minimum of 3 members and maximum of 4 members are allowed in a team",
    },
    {
      question: "How long is the hackathon going to last?",
      answer: "The hackathon will be a 36 hour long hackathon",
    },
    {
      question: "What are the perks every participants is going to get?",
      answer:
        "Participants will get official HackOverflow swags and goodies such as t-shirts and stickers",
    },
    {
      question:
        "What is the transport facilities for the out-of state students",
      answer:
        "For out of state students, bus facility will be provided from Pillais Panvel campus and personal pickups from railway-station/airport will also be facilitated",
    },
    {
      question: "What are the arrangements for accomodation?",
      answer:
        "The accomodation arrangements are made in the college campus itself. Every need will be taken care of",
    },
    {
      question: "How to register for the offline track?",
      answer:
        "To register for the offline track either you can fill the google form provided or contact the support team for offline registeration.",
    },
  ];
  return (
    <>
      <div className="container">
        <h1
          className="text-center"
          style={{ fontFamily: "Poppins,sans-serif", fontWeight: 700 }}
        >
          Frequently Asked Questions
        </h1>
        <div className={`${classes.faqSection} my-5`}>
          <div className={classes.faqBox}>
            <div>
              {questionaire.map((faq, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={
                        activeQuestion === index && active
                          ? `${classes.questionBoxElongate}`
                          : `${classes.questionBox}`
                      }
                      onClick={() => {
                        setActiveQuestion(index);
                        setActive(true);
                      }}
                    >
                      <p>{faq.question}</p>
                    </div>
                  </>
                );
              })}
            </div>
            {questionaire.map((faq, index) => {
              if (activeQuestion === index) {
                return (
                  <>
                    <div className={classes.answerBox}>
                      {active && <p>{faq.answer}</p>}
                    </div>
                  </>
                );
              }
              return "";
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQ;
