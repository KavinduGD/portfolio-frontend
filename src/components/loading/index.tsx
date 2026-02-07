import React from "react";

type LoadingProps = {
  text?: string;
};

const Loading: React.FC<LoadingProps> = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-600">
      {/* Spinner */}
      <div className="h-12 w-12 rounded-full border-4 border-white/30 border-t-white animate-spin" />

      {/* Text */}
      <p className="text-white text-lg tracking-wide">{text}</p>
    </div>
  );
};

export default Loading;
