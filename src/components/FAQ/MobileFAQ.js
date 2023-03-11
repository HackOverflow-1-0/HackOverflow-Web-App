import "./MobileFAQ.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const data = [
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
    question: "What is the transport facilities for the out-of state students",
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
const MobileFAQ = (props) => {
  return (
    <section id="faq-section">
      <div className="container">
        <h1
          className="text-center"
          style={{ fontFamily: "Poppins,sans-serif", fontWeight: 700 }}
        >
          Frequently Asked Questions
        </h1>
        <div className="row">
          <div className="col">
            {data.map((faq) => {
              return (
                <Accordion style={{ boxShadow: "10px 10px 25px #000000" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ backgroundColor: "#1b1c27 " }}
                  >
                    <Typography
                      style={{
                        color: "white",
                        fontFamily: "Poppins,sans-serif",
                        fontWeight: 400,
                        fontSize: "1.3rem",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundColor: " #1b1c27" }}>
                    <Typography
                      style={{
                        color: "white",
                        fontFamily: "Poppins,sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFAQ;
