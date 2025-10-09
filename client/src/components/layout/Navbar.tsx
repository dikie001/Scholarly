import { useSidebar } from "@/components/ui/sidebar";
import { AlignJustify } from "lucide-react";
import { AppSidebar } from "./side-bar";

const Navbar = () => {
  const {
    // state,
    open,
    // setOpen,
    // openMobile,
    setOpenMobile,
    // isMobile,
    // toggleSidebar,
  } = useSidebar();
  return (
    <div
      className="fixed   w-full rounded-lg p-4  shadow  z-50 backdrop-blur-xl
    "
    >
      {" "}
      <AppSidebar />
      {/* Header */}
      <header
        className={`flex ml-4 items-center justify-between ${
          open && "md:ml-56"
        } transition-all ease-in duration-300`}
      >
        <div className="flex items-center gap-2 md:ml-8">
          <span className="text-3xl font-bold">
            <span className="text-blue-600">N</span>
            <span className="text-gray-800">ewton </span>
            <span className="text-blue-600">D</span>
            <span className="text-gray-800">elivery</span>
          </span>
        </div>

        {/* <Button onClick={()=>navigate("request-pickup")} variant="default">Request Pickup</Button> */}
        <AlignJustify
          className="md:hidden"
          onClick={() => setOpenMobile(true)}
        />
      </header>
    </div>
  );
};

export default Navbar;
