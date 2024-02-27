import React from "react";
import UnderlineImage from "@/assets/images/underlineElement.png";
import BlueBg from "@/assets/images/bgtblue.png";
import HomePeople from "@/assets/images/homepeople.png";
import AngularIcon from "@/assets/images/angular.png";
import ReactIcon from "@/assets/images/react.jpg";
import VueIcon from "@/assets/images/vue.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useMediaQuery from "@/hook/useMediaQuery";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import User1 from "@/assets/images/usr1.jpg";
import User2 from "@/assets/images/usr2.jpg";
import User3 from "@/assets/images/usr3.jpg";
import User4 from "@/assets/images/usr4.jpg";
import User5 from "@/assets/images/usr5.jpg";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types/types";
import { VideoDialog } from "./VideoDialog";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home: React.FC<propsType> = ({ setSelectedPage }: propsType) => {
  const secLists: string[] = [
    "Learn with experts",
    "Get certificate",
    "Get membership",
  ];

  const homeResponsive = useMediaQuery("(max-width:1150px)");
  const mediumHomeResponsive = useMediaQuery("(max-width: 730px");
  const smallHomeResponsive = useMediaQuery("(max-width: 610px)");

  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      className="w-11/12 mx-auto mt-10"
      id="home"
    >
      <div
        className={`flex  ${
          homeResponsive ? "flex-col" : "flex-row items-center "
        } `}
      >
        {/* <div className=""> */}
        <div
          className={`${
            homeResponsive ? "w-full text-center mt-28" : "w-7/12"
          } me-20 mt-16`}
        >
          <h2
            className={`font-heebo font-bold  ${
              mediumHomeResponsive ? "text-4xl" : "text-5xl"
            }`}
          >
            Limitless learning at your{" "}
            <span className="relative z-10">
              fingertips{" "}
              <div>
                {" "}
                <img
                  src={UnderlineImage}
                  className=" w-72 h-12  absolute right-0 top-0 z-[-1]"
                />{" "}
              </div>{" "}
            </span>
          </h2>
          <p className="mt-6 font-heebo text-xl opacity-70">
            Online learning and teaching marketplace with 5K+ courses & 10M
            students. Taught by experts to help you acquire new skills
          </p>

          <div
            className={`mt-5 flex flex-wrap ${
              homeResponsive && "justify-center gap-3"
            }`}
          >
            {secLists.map((secList) => (
              <div key={secList} className="flex items-center me-2">
                <CheckBadgeIcon className="w-6 h-6" />
                <p className="ms-1 font-heebo opacity-70">{secList}</p>
              </div>
            ))}
          </div>

          <div
            className={`mt-8 flex items-center ${
              homeResponsive && "justify-center"
            }`}
          >
            <div className="me-6">
              <button className=" rounded-[8px] text-red-500 py-3 px-4 text-xl bg-red-200 transition-all duration-150 hover:text-white hover:bg-red-500 font-heebo">
                Get Started
              </button>
            </div>
            <div className="flex items-center">
              <VideoDialog />
              {/* <Dialog>
                <DialogTrigger asChild>
                  <PlayCircleIcon className="w-12 h-12 hover:text-blue-300 transition-all duration-150 text-blue-500 cursor-pointer me-2" />
                </DialogTrigger>
                <DialogContent>Hello buddy</DialogContent>
              </Dialog> */}
              <p className="font-heebo">Watch Video</p>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className={` mt-44 mx-auto`}>
          <div
            className={` relative ${homeResponsive ? "w-11/12" : "w-10/12"} ${
              mediumHomeResponsive && "w-full "
            }`}
          >
            <img src={BlueBg} />
            <div
              className={`absolute  ${
                homeResponsive ? "left-[18%] -top-10" : "-top-28 left-16"
              } ${smallHomeResponsive && " left-[12%]"}`}
            >
              <img
                src={HomePeople}
                className={`${mediumHomeResponsive && ""}`}
              />
            </div>
            <div className="w-12 h-12 absolute -top-28 right-0">
              <img
                src={AngularIcon}
                className="w-full h-full object-cover shadow-xl rounded-xl"
              />
            </div>
            <div className="w-12 h-12 absolute top-24 left-0">
              <img
                src={ReactIcon}
                className="w-full h-full object-cover shadow-xl rounded-xl"
              />
            </div>
            <div className="w-12 h-12 absolute bottom-40 -right-6">
              <img
                src={VueIcon}
                className="w-full h-full object-cover shadow-xl rounded-xl"
              />
            </div>
            <div
              className={`absolute top-20 -right-20 p-3 px-5 bg-green-500 rounded-xl ${
                mediumHomeResponsive && "hidden"
              }`}
            >
              <h2 className="mb-2 text-white font-heebo font-bold">
                Our daily new students
              </h2>
              <div className="  flex items-center">
                <div>
                  <Avatar>
                    <AvatarImage
                      src={User1}
                      className=" border-2 rounded-full  border-white"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                {[User2, User3, User4, User5, User1].map((x) => (
                  <div className="-ms-3 " key={x}>
                    <Avatar>
                      <AvatarImage
                        src={x}
                        className="border-2 rounded-full border-white"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={` absolute flex bottom-16 border-2 left-2 shadow-lg border-white backdrop-filter backdrop-blur-[5px] p-4 rounded-xl ${
                mediumHomeResponsive && "hidden"
              }`}
            >
              <div className="p-4 rounded-full bg-yellow-300 text-white">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              <div className="font-heebo text-white ms-2">
                <div className=" flex justify-between">
                  <h3 className=" font-bold">Congratulations</h3>
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                </div>
                <p>Your admission completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
