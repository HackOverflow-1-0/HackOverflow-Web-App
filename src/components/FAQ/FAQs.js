import React, { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      title: "What is the maximum number of members allowed in a team?",
      text: "Minimum of 3 members and maximum of 4 members are allowed in a team.",
    },
    {
      title: "How long is the hackathon going to last?",
      text: "The hackathon will be a 36-hour long event.",
    },
    {
      title: "What are the perks every participant is going to get?",
      text: "Participants will get official HackOverflow swags and goodies such as t-shirts and stickers.",
    },
    {
      title: "What is the transport facility for out-of-state students?",
      text: "For out-of-state students, bus facilities will be provided from Pillais Panvel campus, and personal pickups from railway stations/airports will also be facilitated.",
    },
    {
      title: "What are the arrangements for accommodation?",
      text: "The accommodation arrangements are made in the college campus itself. Every need will be taken care of.",
    },
    {
      title: "How to register for the offline track?",
      text: "To register for the offline track, you can either fill the provided Google form or contact the support team for offline registration.",
    },
  ];

  return (
    <div className="p-4 faq-container">
      <div className="relative p-4 lg:py-10 w-full">
        <h1
          className="text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h1>
      </div>
      {faqData.map((faq, index) => (
        <div
          onClick={() => handleToggle(index)}
          key={index}
          className={`cursor-pointer faq ${activeIndex === index ? "active" : ""}`}
        >
          <h3 className="faq-title">{faq.title}</h3>
          <p className="faq-text">{faq.text}</p>
          <button className="faq-toggle" onClick={() => handleToggle(index)}>
            <svg
              className={`chevron w-6 h-6 text-gray-800 dark:text-white ${
                activeIndex === index ? "hidden" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
            <svg
              className={`close w-6 h-6 text-gray-800 dark:text-white ${
                activeIndex === index ? "" : "hidden"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
