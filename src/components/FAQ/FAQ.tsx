import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FAQTypes } from "./types";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import "./FAQ.css";
const Accordion = withStyles({
  root: {
    boxShadow: "none",
    textAlign: "left",
    fontSize: "16px",
    color: "black",
    fontWeight: "bolder",
    borderBottom: "2px solid gray",
    backgroundColor: "transparent",
    // "&:not(:last-child)": {
    //   borderBottom: 0,
    // },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    color: "black",
    margin: "4vh 0",
    marginBottom: -1,
    minHeight: 89,
    "&$expanded": {
      minHeight: 89,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme: any) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions: React.FC<FAQTypes> = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="FAQ" className="faq-component">
      <h1>FAQ</h1>
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <p className="question-number">
                <span>■ </span>
                01
              </p>
              <AiOutlinePlus
                className={expanded === "panel1" ? "arrow active" : "arrow"}
              />
              <AiOutlineMinus
                className={expanded === "panel1" ? "minus active" : "minus"}
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={
                expanded === "panel2"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <p className="question-number">
                <span>■ </span>
                02
              </p>
              <AiOutlineMinus
                className={expanded === "panel2" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel2" ? "arrow active" : "arrow"}
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <p className="question-number">
                <span>■ </span>
                03
              </p>
              <AiOutlineMinus
                className={expanded === "panel3" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel3" ? "arrow active" : "arrow"}
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <p className="question-number">
                <span>■ </span>
                04
              </p>
              <AiOutlineMinus
                className={expanded === "panel4" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel4" ? "arrow active" : "arrow"}
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              className={
                expanded === "panel5"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <p className="question-number">
                <span>■ </span>
                05
              </p>
              <AiOutlineMinus
                className={expanded === "panel5" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel5" ? "arrow active" : "arrow"}
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
