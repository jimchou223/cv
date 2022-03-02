import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <Card sx={{ margin: "auto", maxWidth: 345 }}>
      <a className={styles.cardWrapper} target="_blank" rel="noreferrer" href={props.href}>
        <div className={styles.imgWrapper}>
          <CardMedia component="img" image={props.src} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <hr />
          <Typography mt={4} variant="body2" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
}
