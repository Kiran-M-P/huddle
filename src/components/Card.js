import React from "react";
import StyledCard from "./styles/Card.styled";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;
