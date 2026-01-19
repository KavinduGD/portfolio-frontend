import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ContentDivider from "../../../components/contentDivider";
import type { ICert } from "../../../types";
import { useNavigate } from "react-router-dom";

function AllCertificatePage({ certificates }: { certificates: ICert[] }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#FEFEFE]">
      <ContentDivider title="Certificates">
        {certificates.map((certificate) => {
          return (
            <div
              className="xl:px-[20px] xl:py-[20px] px-[5px] py-[5px] border-gray-100 odd:border-r-[1px] border-b-[1px] "
              key={certificate.certificateID}
            >
              <div
                className="group bg-gray-100/10 px-[20px] py-[10px] rounded-lg shadow-2xs border-[1px] border-gray-100 overflow-hidden cursor-pointe"
                onClick={() => {
                  navigate(`/certificates/${certificate.certificateID}`);
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img
                    src={certificate.ImageUrl}
                    alt=""
                    className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>

                <div className="flex justify-between mt-[10px]">
                  <p className="text-[17px] text-gray-700 font-bold group-hover:text-blue-600 ">
                    {certificate.name}
                  </p>
                  <FaArrowUpRightFromSquare className="text-gray-700  group-hover:text-blue-600" />
                </div>
              </div>
            </div>
          );
        })}
      </ContentDivider>
    </div>
  );
}

export default AllCertificatePage;
