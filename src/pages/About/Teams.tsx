import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { teamMembers } from "@/data/teams";
import useMediaQuery from "@/hook/useMediaQuery";

export const Teams: React.FC<{}> = () => {
  const isTabletScreen = useMediaQuery("(max-width: 940px)");
  const isUnderTabletScreen = useMediaQuery("(max-width: 710px)");
  const isPhoneScreen = useMediaQuery("(max-width: 570px)");
  const isMiniPhoneScreen = useMediaQuery("(max-width: 380px)");

  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold mb-6">Our Team Members</h1>
      <Carousel>
        <CarouselContent>
          {teamMembers.map((member) => (
            <CarouselItem
              className={`${isTabletScreen ? "basis-1/4" : "basis-1/5"} ${
                isUnderTabletScreen && "basis-1/3"
              } ${isPhoneScreen && "basis-1/2"} ${
                isPhoneScreen && "basis-1/2"
              }  ${isMiniPhoneScreen && " basis-full"} mt-4`}
              key={member.id}
            >
              <div className="p-3 text-center flex justify-center items-center flex-col">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold mt-3">{member.name}</h4>
                <p className="opacity-70">{member.position}</p>

                <div className="flex gap-3 mt-3">
                  <div className="p-2 bg-white shadow-xl transition-all duration-150 hover:bg-blue-100 cursor-pointer rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      className="text-blue-500"
                    >
                      <path
                        fill="currentColor"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-2 bg-white shadow-xl transition-all duration-150 hover:bg-blue-100 cursor-pointer rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 32 32"
                      className="text-blue-500"
                    >
                      <path
                        fill="currentColor"
                        d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7M11.1 24.4H7.6V13h3.5zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1m15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={`${isUnderTabletScreen ? "ms-[10%]" : "ms-[3%]"} ${
            isMiniPhoneScreen && "ms-[16%]"
          } bg-gray-500 text-white`}
        />
        <CarouselNext
          className={`${isUnderTabletScreen ? "me-[9%]" : "me-[4%]"} ${
            isUnderTabletScreen && "me-[16%]"
          } bg-gray-500 text-white`}
        />
      </Carousel>
    </div>
  );
};

export default Teams;
