import Sidebar from "@/components/shared/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex overflow-hidden">
      {/* <ProfileCard /> */}
      <Sidebar />
      <section className="flex flex-1 h-screen">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
