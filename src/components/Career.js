import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { Typography } from "@mui/material";

const Career = () => {
  return (
    <VerticalTimeline animate={true} lineColor="gray">
      <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "rgba(0,0,0,0.2)" }} contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }} date="2021 - Now" icon={<WorkIcon />} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}>
        <Typography variant="h5" component="h3" gutterBottom>
          International Sales Representative @ Liteon
        </Typography>
        <Typography variant="h6" component="h4" gutterBottom>
          Hsinchu, Taiwan
        </Typography>
        <li>Take inquiries from customers and address demand</li>
        <li>Customer demand identifing and key components allocation</li>
        <li>Generate progress reports</li>
        <li>Quality issue and customer visit coodination</li>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" date="2020 - 2021" contentStyle={{ background: "rgba(0,0,0,0.2)" }} contentArrowStyle={{ borderRight: "7px solid rgba(0,0,0,0.2)" }} icon={<WorkIcon />} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Full stack Developer @ Crespirit
        </Typography>
        <Typography variant="h6" component="h4" gutterBottom>
          Hsinchu, Taiwan
        </Typography>
        <li>Home page construction, implementation and hosting</li>
        <li>Webpage speed optimination</li>
        <li>Simple backend server construction</li>
        <li>SEO, Google analytics</li>
        <li>Collaborate with stakeholders</li>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" date="2019 - 2020" contentStyle={{ background: "rgba(0,0,0,0.2)" }} contentArrowStyle={{ borderRight: "7px solid rgba(0,0,0,0.2)" }} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<SchoolIcon />}>
        <Typography variant="h5" component="h3" gutterBottom>
          Student - Computer Science @ Langara college
        </Typography>
        <Typography variant="h6" component="h4" gutterBottom>
          Vancouver, Canada
        </Typography>
        <p>
          <strong>Courses:</strong> 
          Introduction to Computer science, Web development, Database design, Program design{" "}
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Career;
