import TechnologyCard from "../technologyCard";
import ContentDivider from "../../../../components/contentDivider";
import type { Technology } from "../../../../types";

function reOrganizeTechnologiesByType(
  technologyList: Technology[],
): { type: string; technologies: Technology[] }[] {
  //create  object which has type as key {"type":technology[],"type":technology[]}
  interface TechnologyListObject {
    [key: string]: Technology[];
  }

  const technologyListObject: TechnologyListObject = {};

  for (let i = 0; i < technologyList.length; i++) {
    const technology = technologyList[i];
    const type = technology.type;
    if (!technologyListObject[type]) {
      technologyListObject[type] = [];
    }
    technologyListObject[type].push(technology);
  }

  const technologyListArray: { type: string; technologies: Technology[] }[] =
    [];

  for (const key in technologyListObject) {
    technologyListArray.push({
      type: key,
      technologies: technologyListObject[key],
    });
  }

  technologyListArray.sort(
    (a, b) => b.technologies.length - a.technologies.length,
  );

  return technologyListArray;
}

function Technologies({ technologyList }: { technologyList: Technology[] }) {
  return (
    <ContentDivider title="Technologies" style="block">
      {reOrganizeTechnologiesByType(technologyList).map(
        (technologyListForaType) => {
          return (
            <div className="px-[20px] pt-[20px]">
              <span className="text-[15px] font-bold1 text-[#222] text-white bg-[#0494fa] px-[10px] py-[3px] rounded-md">
                {technologyListForaType.type}
              </span>
              <div className="gap-[20px] grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-[10px]">
                {technologyListForaType.technologies.map((technology) => {
                  return <TechnologyCard {...technology} />;
                })}
              </div>
            </div>
          );
        },
      )}
    </ContentDivider>
  );
}

export default Technologies;
