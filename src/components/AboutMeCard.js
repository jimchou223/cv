import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./AboutMeCard.module.css";

const AboutMeCard = () => {
  return (

      <Card sx={{ m: 4 }}>
        <div className={styles.cardControl}>
          <svg className={styles.dot} height="10" width="10">
            <circle cx="5" cy="5" r="5" strokeWidth="3" fill="red" />
          </svg>
          <svg className={styles.dot} height="10" width="10">
            <circle cx="5" cy="5" r="5" strokeWidth="3" fill="#ebd534" />
          </svg>
          <svg className={styles.dot} height="10" width="10">
            <circle cx="5" cy="5" r="5" strokeWidth="3" fill="green" />
          </svg>
        </div>
        <CardContent sx={{ backgroundColor: "white" }}>
          <Typography sx={{ lineHeight: "250%", textAlign: "left" }} variant="body2" color="text.secondary">
            {/* 👋 I'm Jim. A self taught frontend developer:) I'm working with latest front-end frameworks React. Believing software is the only key to make us a better world. If you are interested in anything that I have been doing, please let me know. I will be willing to share all what I knew. And I suppose this is the core value of this filed. Let's hack the world💜 */}
            👋 I am Jim. A self taught frontend developer :) </Typography>
            <Typography sx={{ lineHeight: "250%", textAlign: "left" }} variant="body2" color="text.secondary"> This is my portfolio website.</Typography>
            <Typography sx={{ lineHeight: "250%", textAlign: "left" }} variant="body2" color="text.secondary">Below is my contact information : 
            <a href="mailto: jimchou223@gmail.com"> jimchou223@gmail.com</a>
          </Typography>
        </CardContent>
      </Card>
  
  );
};

export default AboutMeCard;
