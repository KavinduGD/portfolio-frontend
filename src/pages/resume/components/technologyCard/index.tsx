import React from "react";
import type Technology from "../technology";

function TechnologyCard(technology: Technology) {
  return (
    <div className="px-[10px] py-[10px] rounded-3xl flex flex-col items-center bg-gray-400/10 border-[1px] border-gray-100">
      <div className="w-[120px] h-[120px] border-[2px] rounded-full flex justify-center items-center flex-col">
        <img src={technology.icon} alt="" className="w-[70px]" />
        <p>{technology.level}%</p>
      </div>
      <p>{technology.technology}</p>
    </div>
  );
}

export default TechnologyCard;

// import React from "react";
// import type Technology from "../technology";

// function TechnologyCard({ technology, level, icon }: Technology) {
//   const radius = 54;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference * (1 - level / 100);

//   return (
//     <div className="px-[10px] py-[10px] rounded-3xl flex flex-col items-center bg-gray-400/10 border border-gray-100">
//       {/* Circle container */}
//       <div className="relative w-[120px] h-[120px]">
//         {/* SVG Progress Ring */}
//         <svg className="w-full h-full -rotate-90">
//           {/* Background ring */}
//           <circle
//             cx="60"
//             cy="60"
//             r={radius}
//             stroke="#e5e7eb"
//             strokeWidth="6"
//             fill="transparent"
//           />

//           {/* Progress ring */}
//           <circle
//             cx="60"
//             cy="60"
//             r={radius}
//             stroke="#22c55e"
//             strokeWidth="6"
//             fill="transparent"
//             strokeDasharray={circumference}
//             strokeDashoffset={offset}
//             strokeLinecap="round"
//           />
//         </svg>

//         {/* Icon + percentage */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <img src={icon} alt="" className="w-[50px]" />
//           <p className="text-sm font-semibold">{level}%</p>
//         </div>
//       </div>

//       {/* Technology name */}
//       <p className="mt-2 font-medium">{technology}</p>
//     </div>
//   );
// }

// export default TechnologyCard;
