import ContentDivider from "../../../../components/contentDivider";
import type { User } from "../../../../types";

function AboutTop(user: User) {
  return (
    <ContentDivider title="About">
      <div className="pt-[20px] pb-[20px] px-[20px] border-b-[1px] border-gray-100 dark:border-gray-700 text-[17px] text-[#444444] dark:text-gray-300">
        <p>{user.about || "loding..."}</p>
      </div>
      <div className="pt-[20px] pb-[20px] px-[20px] even:border-l border-b-[1px] border-gray-100 dark:border-gray-700 flex flex-col gap-[10px]">
        <div className="flex justify-between items-center">
          <p className="text-[#fefefe] text-[14px] bg-[#0494fa] dark:bg-blue-600 px-[10px] py-[2px] rounded-[2px] border-0">
            Age
          </p>
          <p className="text-[17px] text-[#444444] dark:text-gray-300">{user.age} Years</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#fefefe] text-[14px] bg-[#0494fa] dark:bg-blue-600 px-[10px] py-[2px] rounded-[2px] border-0">
            Mobile
          </p>
          <p className="text-[17px] text-[#444444] dark:text-gray-300">{user.phone}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#fefefe] text-[14px] bg-[#0494fa] dark:bg-blue-600 px-[10px] py-[2px] rounded-[2px] border-0">
            Address
          </p>
          <p className="text-[17px] text-[#444444] dark:text-gray-300">
            {user.address.split(",").slice(3).join(", ")}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#fefefe] text-[14px] bg-[#0494fa] dark:bg-blue-600 px-[10px] py-[2px] rounded-[2px] border-0">
            Languages
          </p>
          <p className="text-[17px] text-[#444444] dark:text-gray-300">
            {user.languages.join(", ")}
          </p>
        </div>
      </div>
    </ContentDivider>
  );
}

export default AboutTop;
