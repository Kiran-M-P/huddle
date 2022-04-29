import React from "react";
import { MetricBox } from "./styles/Metric.styled";

const Metric = (props) => {
  return (
    <MetricBox>
      <img src={props.icon} alt={props.iconAlt} />
      <h2>{props.h2}</h2>
      <h4>{props.h4}</h4>
    </MetricBox>
  );
};

export default Metric;
