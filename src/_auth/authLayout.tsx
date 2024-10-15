import { Outlet, Navigate } from "react-router-dom";
import quiz_vector from "../assets/quiz_vector.png";
import authBg from "../assets/authBg.png";
import quizwave_logo_light from "../assets/quizwave_logo_light.png";

const AuthLayout = () => {
  // const isAuthenticated = false;
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center justify-evenly min-h-screen p-5 lg:space-x-8 bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Left Section (Visible only on larger screens) */}
        <div className="hidden lg:flex flex-col items-center space-y-8 lg:w-1/2">
          <img
            src={quizwave_logo_light}
            alt="QuizWave Logo"
            width={300}
            height={200}
            className="aspect-auto transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <img
            src={quiz_vector}
            alt="Quiz Vector"
            width={500}
            height={300}
            className="aspect-auto transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right Section (Visible on all screens) */}
        <div className="flex flex-col items-center justify-center space-y-10 w-full lg:w-1/2 h-auto lg:h-screen">
          {/* Mobile Logo (Visible only on smaller screens) */}
          <img
            src={quizwave_logo_light}
            alt="QuizWave Logo"
            width={300}
            height={200}
            className="block lg:hidden aspect-auto mb-8"
          />

          {/* Main Content */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
