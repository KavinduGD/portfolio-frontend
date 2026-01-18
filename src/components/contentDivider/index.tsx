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
  style?: string;
}

const ContentDivider = (props: WrapperProps) => {
  return (
    <div className="pb-[20px]">
      <Topic topicName={props.title} />
      <div className={props.style || "grid grid-cols-1  sm:grid-cols-2"}>
        {props.children}
      </div>
    </div>
  );
};

export default ContentDivider;
