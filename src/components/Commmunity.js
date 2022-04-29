import React from "react";
import Metric from "./Metric";
import CommunitySection, {
  CommmunityMetric,
  Image,
} from "./styles/Community.styled";

const Commmunity = () => {
  return (
    <CommunitySection>
      <Image src="./images/screen-mockups.svg" alt="screen-mockup" />
      <CommmunityMetric>
        <Metric
          icon="./images/icon-communities.svg"
          iconAlt="community"
          h2="1.4k+"
          h4="Commuinites Formed"
        />
        <Metric
          icon="./images/icon-messages.svg"
          iconAlt="message"
          h2="2.7m+"
          h4="Messages Sent"
        />
      </CommmunityMetric>
    </CommunitySection>
  );
};

export default Commmunity;
