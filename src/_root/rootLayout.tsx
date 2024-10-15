import ProfileCard from "@/components/shared/profileCard";
import Sidebar from "@/components/shared/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      {/* <ProfileCard /> */}
      <Sidebar />
      <section className="flex  flex-1 h-full">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
