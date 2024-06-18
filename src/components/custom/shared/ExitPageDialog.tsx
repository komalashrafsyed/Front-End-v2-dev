import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog";
import CustomOutlineButton from "./CustomOutlineButton";
import { useNavigate } from "react-router-dom";

interface IProp {
  children: any;
  redirectPath: string;
  title: string;
  description: string;
  resetData: () => void;
}

const ExitPageDialog = ({ children, description, title, redirectPath, resetData }: IProp) => {
  const navigate = useNavigate();


  const handleExit = () => {
    resetData();
    navigate(redirectPath);
  };


  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>

      <DialogContent className="w-[400px] p-4" >
        <div className="space-y-3" >
          {/* header */}
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h2 className="font-semibold text-xl" >{title}</h2>

              <DialogClose className="p-1 rounded-xs hover:bg-su_active_bg" >
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </DialogClose>
            </div>

            <p className="text-base font-medium text-secondary dark:text-su_secondary">{description}</p>
          </div>


          <div className="w-full grid grid-cols-2 gap-4" >
            <CustomOutlineButton onClick={handleExit} >
              Exit
            </CustomOutlineButton>

            <div className="group relative" >
              <Button className="w-full" variant={"default"}>Cancel</Button>
              <DialogClose className="absolute bg-transparent w-full h-full left-0 top-0 cursor-pointer" >
              </DialogClose>
            </div>


          </div>

        </div>
      </DialogContent>
    </Dialog >
  );
};

export default ExitPageDialog;