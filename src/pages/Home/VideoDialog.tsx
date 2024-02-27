import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
import HomeVideo from "@/assets/videos/home.mp4";

export function VideoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlayCircleIcon className="w-12 h-12 hover:text-blue-300 transition-all duration-150 text-blue-500 cursor-pointer me-2" />
      </DialogTrigger>
      <DialogContent className="">
        <div className="h-[600px] ">
          <video
            src={HomeVideo}
            width="100%"
            height="100%"
            className="fixed top-0 left-0 h-[80vh] object-cover"
            controls
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
