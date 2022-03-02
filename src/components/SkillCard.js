import React from "react";
const SkillCard = (props) => {
  return (
    <div>
      <i className={`icon devicon-${props.skillIcon}`}></i>
      <p>{props.skill}</p>
    </div>
  );
};

export default SkillCard;
