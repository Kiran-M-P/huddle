import React from "react";
import StyledCard from "./styles/Card.styled";

const Card = (props) => {
  return (
    <StyledCard flex={props.flex} bg={props.bg}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
      <img loading="lazy" src={`./images/${props.image}`} alt="" />
    </StyledCard>
  );
};

export default Card;
