import React from "react";
import type { User } from "../../App";
import ContentDivider from "../contentDivider";

/* 
  {
      institution: "Ananda College",
      location: "Colombo, Sri Lanka",
      degree: "Advanced Level (A/L)",
      startDate: "2015",
      endDate: "2019",
      results: "2 C's 1 S",
    },
*/

function Education(user: User) {
  return (
    <ContentDivider title="Education">
      {user.education.map(() => {
        return <div>ass</div>;
      })}
    </ContentDivider>
  );
}

export default Education;
