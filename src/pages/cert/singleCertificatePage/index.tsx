import ContentDivider from "../../../components/contentDivider";
import type { Cert } from "../../../types";
import { useParams } from "react-router-dom";

function SingleCertificatePage({ certificates }: { certificates: Cert[] }) {
  const { certificateID } = useParams<{ certificateID: string }>();
  const certificate = certificates.find(
    (c) => c.certificateID === certificateID,
  );

  if (!certificate) {
    return (
      <div>
        <div>Certificate not found</div>
      </div>
    );
  }

  return (
    <div className="bg-[#FEFEFE] dark:bg-slate-800 min-h-full">
      <ContentDivider
        title={certificate.name}
        style="flex xl:flex-row flex-col xl:gap-[10px] xl:px-[5px] sm:px-[20px] px-[10px]"
      >
        {/* image */}
        <img
          src={certificate.imageUrl}
          alt="cert image"
          className=" object-cover xl:w-5/8 w-full"
        />
        {/* link*/}
        <div className="xl:w-3/8 pt-[10px] w-full">
          <a
            href={certificate.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] bg-[#0494FA] text-[#fefefe] px-[6px] py-[1px] rounded-[6px] hover:text-blue-700 "
          >
            Click here to view Certificate
          </a>

          <div className="flex gap-[10px] items-start text-[13px] mt-[10px]">
            <p className="text-[#999] dark:text-gray-400">Issuer:</p>
            <p className="text-gray-500 dark:text-gray-300">{certificate.issuer}</p>
          </div>
          <div className="flex gap-[10px] items-start text-[13px]">
            <p className="text-[#999] dark:text-gray-400">Issue Date:</p>
            <p className="text-gray-500 dark:text-gray-300">{certificate.issueDate}</p>
          </div>
          <div className="flex gap-[10px] items-start text-[13px]">
            <p className="text-[#999] dark:text-gray-400">Credentials ID:</p>
            <p className="text-gray-500 dark:text-gray-300 text-[12px]">
              {certificate.credentialsId}
            </p>
          </div>
          <div className="flex gap-x-[20px] mt-[10px] flex-wrap gap-y-[10px]">
            {certificate.tags.map((tag) => {
              return (
                <p className="text-[#0494FA] dark:text-blue-300 border-[1px] border-[#0494FA] dark:border-blue-300 px-[4px] text-[13px] bg-[#e7f6ff] dark:bg-blue-900/40">
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </ContentDivider>
    </div>
  );
}

export default SingleCertificatePage;
