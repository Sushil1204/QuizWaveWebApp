import {
  BetweenHorizontalStart,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  UserRound,
} from "lucide-react";
import quizwave_logo_dark from "@/assets/quizwave_logo_dark.png";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUser } from "@/lib/react-query/queriesAndMutation";

const Sidebar = () => {
  const navigate = useNavigate();
  const { mutate: logout, isSuccess: logoutSuccessful } = useLogoutUser();
  const handleLogout = async () => {
    logout();
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  return (
    <div className="hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px] bg-[#3c34ab]">
      <div className="flex flex-col  gap-11">
        <Link to="/" className="flex items-center gap-3">
          <img src={quizwave_logo_dark} alt="logo" width={200} height={50} />
        </Link>

        <ul className="flex flex-col gap-2">
          <Link
            to={"/"}
            className="flex items-center gap-3 p-4 rounded-xl text-white text-sm font-medium lg:text-base lg:font-medium hover:bg-black hover:bg-opacity-35"
          >
            <LayoutDashboard />
            Dashboard
          </Link>

          <Link
            to={"/"}
            className="flex items-center gap-3 p-4 rounded-xl text-white text-sm font-medium lg:text-base lg:font-medium hover:bg-black hover:bg-opacity-35"
          >
            <BetweenHorizontalStart />
            Join Game
          </Link>

          <Link
            to={"/"}
            className="flex items-center gap-3 p-4 rounded-xl text-white text-sm font-medium lg:text-base lg:font-medium hover:bg-black hover:bg-opacity-35"
          >
            <ClipboardList />
            Game history
          </Link>
        </ul>
      </div>
      <div className="">
        <Link
          to={"/profile"}
          className="flex items-center gap-3 p-4 rounded-xl text-white text-sm font-medium lg:text-base lg:font-medium hover:bg-black hover:bg-opacity-35 cursor-pointer"
        >
          <UserRound />
          Profile
        </Link>
        <div
          className="flex items-center gap-3 p-4 rounded-xl text-white text-sm font-medium lg:text-base lg:font-medium hover:bg-black hover:bg-opacity-35 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
