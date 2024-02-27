import { SelectedPage } from "@/shared/types/types";
import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useMediaQuery from "@/hook/useMediaQuery";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Project: React.FC<propsType> = ({
  setSelectedPage,
}: propsType) => {
  const isTabletScreen = useMediaQuery("(max-width:980px)");
  const isUnderTabletScreen = useMediaQuery("(max-width:600px)");

  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Project)}
      className="w-11/12 mx-auto mt-20"
      id="project"
    >
      <div className="text-center sm:text-5xl text-3xl font-bold">
        Students Project
      </div>
      <div className="mt-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {projectsData.map((project) => (
              <CarouselItem
                key={project.id}
                className={`${
                  isUnderTabletScreen
                    ? "basis-full"
                    : isTabletScreen
                    ? "basis-1/2"
                    : "basis-1/3"
                } xl:basis-1/4 `}
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ms-7" />
          <CarouselNext className="me-7" />
        </Carousel>
      </div>
    </motion.div>
  );
};

export default Project;
