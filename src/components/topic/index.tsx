import React from "react";

function Topic({ topicName }) {
  return (
    <div className="text-[#222222] font-bold text-[24px] px-[20px] pt-[20px] pb-[20px] border-b-[1px] border-b-[#E0E0E0]">
      {topicName}
    </div>
  );
}

export default Topic;
