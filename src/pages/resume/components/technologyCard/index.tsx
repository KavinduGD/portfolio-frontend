import type Technology from "../technology";

function TechnologyCard({ technology, level, icon }: Technology) {
  const isMobile = window.innerWidth < 640;
  const radius = isMobile ? 44 : 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - level / 100);
  return (
    <div className="px-[20px] py-[10px] rounded-3xl flex flex-col items-center bg-gray-300/10 sm:w-[180px] border-[1px] border-gray-200">
      {/* Circle container */}
      <div className="relative md1:w-[120px] md1:h-[120px] sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] bg-red-3001">
        {/* SVG Progress Ring */}
        <svg className="w-full h-full -rotate-90">
          {/* Background ring */}
          <circle
            cx={isMobile ? 50 : 75}
            cy={isMobile ? 50 : 75}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={isMobile ? 4 : 6}
            fill="transparent"
          />

          {/* Progress ring */}
          <circle
            cx={isMobile ? 50 : 75}
            cy={isMobile ? 50 : 75}
            r={radius}
            stroke="#0494fa"
            strokeWidth={isMobile ? 4 : 6}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        {/* Icon + percentage */}
        <div className="absolute inset-1 flex flex-col items-center justify-center">
          <img src={icon} alt="" className="w-[40px] sm:w-[50px]" />
          <p className="text-sm font-semibold text-[#323232]">{level}%</p>
        </div>
      </div>

      {/* Technology name */}
      <p className="sm:text-[17px] text-[14px] text-[#444]">{technology}</p>
    </div>
  );
}

export default TechnologyCard;
