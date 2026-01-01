import ContentDivider from "../../../../components/contentDivider";
import type { User } from "../../../../App";

function AboutTop(user: User) {
  return (
    <ContentDivider title="About">
      <div className="pt-[20px] pb-[20px] px-[20px] border-b-[1px]  border-gray-100 text-[17px] text-[#444444]">
        <p>{user.about || "loding..."}</p>
      </div>
      <div className="pt-[20px] pb-[20px] px-[20px] even:border-l border-b-[1px] border-gray-100 flex flex-col gap-[10px]">
        <div className="flex justify-between items-center">
          <p className="text-[#fefefe] text-[14px] bg-[#0494fa] px-[10px] py-[2px] rounded-[2px] border-0">
            Age
          </p>
          <p className="text-[17px] text-[#444444]">{user.age} Years</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#fefefe] text-[14px] bg-[#0494fa] px-[10px] py-[2px] rounded-[2px] border-0">
            Mobile
          </p>
          <p className="text-[17px] text-[#444444]">{user.phone}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#fefefe] text-[14px] bg-[#0494fa] px-[10px] py-[2px] rounded-[2px] border-0">
            Address
          </p>
          <p className="text-[17px] text-[#444444]">
            {user.address.split(",").slice(3).join(", ")}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#fefefe] text-[14px] bg-[#0494fa] px-[10px] py-[2px] rounded-[2px] border-0">
            Languages
          </p>
          <p className="text-[17px] text-[#444444]">
            {user.Languages.join(", ")}
          </p>
        </div>
      </div>
    </ContentDivider>
  );
}

export default AboutTop;
