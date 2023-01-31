import "./FAQ.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const data = [
  {
    question: "How long will HackOverflow 1.0 last?",
    answer: "It will be 36 hours long hackathon",
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
const FAQ = (props) => {
  return (
    <section id="faq-section">
      <div className="container">
        <h1
          className="text-center"
          style={{ fontFamily: "Helvetica Bold", marginBottom: "20px" }}
        >
          How can we help?
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
                    style={{ backgroundColor: "#121212" }}
                  >
                    <Typography
                      style={{
                        color: "white",
                        fontFamily: "Helvetica",
                        fontSize: "1.3rem",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundColor: "#121212" }}>
                    <Typography
                      style={{ color: "white", fontFamily: "Helvetica" }}
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

export default FAQ;
