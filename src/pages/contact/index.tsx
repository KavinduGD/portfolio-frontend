import ContentDivider from "../../components/contentDivider";
import Map from "./components/map";
import type { User } from "../../types";
import ContactForm from "./components/contatnctForm";

function ContactPage({ user }: { user: User }) {
  return (
    <div className="bg-[#FEFEFF] dark:bg-slate-800">
      <ContentDivider title="Get in Touch" style="block">
        <Map />
        <div className="mt-[20px] px-[20px]">
          <div className="flex gap-[20px] sm:flex-row flex-col">
            <div className="flex-1 flex justify-between items-center border-b-[1px] border-gray-200 dark:border-gray-700 py-[5px]">
              <p className="text-[#fefefe] bg-[#0494FA] dark:bg-blue-600 text-[14px] px-[8px]">
                Address
              </p>
              <p className="text-[17px] text-[#444] dark:text-gray-300">
                {user.address.split(",").slice(3).join(", ")}
              </p>
            </div>
            <div className="flex-1 flex justify-between items-center border-b-[1px] border-gray-200 dark:border-gray-700 py-[5px]">
              <p className="text-[#fefefe] bg-[#0494FA] dark:bg-blue-600 text-[14px] px-[8px]">
                Email
              </p>
              <p className="text-[17px] text-[#444] dark:text-gray-300">{user.email}</p>
            </div>
          </div>

          <div className="flex gap-[20px] mt-[20px] sm:flex-row flex-col">
            <div className="flex-1 flex justify-between items-center border-b-[1px] border-gray-200 dark:border-gray-700 py-[5px]">
              <p className="text-[#fefefe] bg-[#0494FA] dark:bg-blue-600 text-[14px] px-[8px]">
                Phone
              </p>
              <p className="text-[17px] text-[#444] dark:text-gray-300">{user.phone}</p>
            </div>
            <div className="flex-1 flex justify-between items-center border-b-[1px] border-gray-200 dark:border-gray-700 py-[5px]">
              <p className="text-[#fefefe] bg-[#0494FA] dark:bg-blue-600 text-[14px] px-[8px]">
                Freelance
              </p>
              <p className="text-[17px] text-[#444] dark:text-gray-300">Available</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </ContentDivider>
    </div>
  );
}
export default ContactPage;
