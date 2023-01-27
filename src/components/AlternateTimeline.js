import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./AlternateTimeline.css";
import TrackVisibility from "react-on-screen";

export default function AlternateTimeline(props) {
  return (
    <Timeline position="alternate">
      {props.events.map((event) => {
        return (
          <TimelineItem id="time-line-item">
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector className="connector" />
            </TimelineSeparator>
            <TimelineContent>{event}</TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
