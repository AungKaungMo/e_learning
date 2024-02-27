import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StudentProjectTypes } from "@/shared/types/types";

type CombinePropsType = {
  project: StudentProjectTypes;
  //   selectedCompo: PopularCourseTypes;
};

export const ProjectCard: React.FC<CombinePropsType> = ({
  project,
}: //   selectedCompo,
CombinePropsType) => {
  const { image, type, title, description } = project;
  return (
    <>
      {/* categoryType.includes(selectedCompo) && */}
      {
        <Card className="rounded-[15px] overflow-hidden">
          <CardHeader className="w-full h-56">
            <img src={image} className="w-full h-full object-cover" />
          </CardHeader>
          <CardContent className="mt-3 !pb-2">
            <div className="flex justify-between items-center">
              <button className=" p-1 bg-purple-100 rounded-[5px] hover:bg-purple-100 text-purple-500 text-sm">
                {type}
              </button>
              {/* <HeartIcon className="w-6 h-6" /> */}
            </div>
            <div className="mt-3">
              <h2 className=" font-[500] text-xl h-14">
                {title.length > 45 ? title.slice(0, 45) + "..." : title}
              </h2>
              <p className="mt-3 opacity-70 text-sm  h-24">
                {description.length > 200
                  ? description.slice(0, 200) + "..."
                  : description}
              </p>
            </div>
          </CardContent>
        </Card>
      }
    </>
  );
};

export default ProjectCard;
