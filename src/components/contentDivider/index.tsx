// import React from "react";

// function ContentDivider({ children:React.WrapperProps }) {
//   return <div>{children}</div>;
// }

// export default ContentDivider;

import React from "react";
import Topic from "../topic";

// Define the props, extending React.PropsWithChildren
interface WrapperProps extends React.PropsWithChildren {
  title: string;
  padding?: number; // Optional prop
}

const ContentDivider = (props: WrapperProps) => {
  return (
    <div>
      <Topic topicName={props.title} />
      <div
        className=" grid grid-cols-2 
          "
      >
        {props.children}
      </div>
    </div>
  );
};

export default ContentDivider;
