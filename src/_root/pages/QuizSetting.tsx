import { Button } from "@/components/ui/button";
import { CircleArrowLeft, CircleX } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const QuizSetting = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full px-4 py-10 md:px-8 bg-[#5b4fcb] space-y-4 ">
      <div className="w-full px-4 py-6 space-y-6">
        {/* Navigation Buttons */}
        <div className="flex items-center justify-between w-full h-24">
          <Button
            variant={"secondary"}
            className="p-4 gap-2 shadow-[10px_10px_20px_rgba(0,0,0,2)]"
            onClick={() => navigate("/")}
          >
            <CircleArrowLeft size={30} />
            <p className="text-base md:text-xl font-medium">Back</p>
          </Button>
          <Button
            variant={"destructive"}
            className="p-4 gap-2 shadow-[10px_10px_20px_rgba(0,0,0,2)]"
          >
            <CircleX size={30} />
            <p className="text-base md:text-xl font-medium">Quit</p>
          </Button>
        </div>

        {/* Quiz Categories Title */}
        <div className="text-white text-xl md:text-4xl font-bold tracking-wide text-center">
          Quiz Category: {params?.title}
        </div>

        {/* Play Button */}
        <div className="w-full flex flex-col items-center space-y-8">
          {/* Timer Input using Simple Dropdown */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* <div className="w-64 md:w-80">
              <label className="block mb-2 text-white text-sm md:text-lg font-medium">
                Set Timer for the Quiz
              </label>
              <select className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
                <option value="20">20 minutes</option>
              </select>
            </div> */}
            <div className="w-64 md:w-80">
              <label className="block mb-2 text-white text-sm md:text-lg font-medium">
                Set Number of Players
              </label>
              <select className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                <option value="2">2 Players</option>
                <option value="4">4 Players</option>
                <option value="6">6 Players</option>
                <option value="8">8 Players</option>
                <option value="10">10 Players</option>
              </select>
            </div>
            <div className="w-64 md:w-80">
              <label className="block mb-2 text-white text-sm md:text-lg font-medium">
                Difficulty
              </label>
              <select className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
          <div className="w-64 md:w-96 h-20 bg-white flex items-center justify-center rounded-lg cursor-pointer transition hover:shadow-xl hover:scale-105">
            <p className="text-lg md:text-3xl font-medium">Create Game</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSetting;
