import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetAllCategories } from "@/lib/react-query/queriesAndMutation";
import { Search } from "lucide-react";
import { lazy, Suspense } from "react";

const LazyImageCard = lazy(() => import("@/components/shared/lazyImageCard"));
type ICategory = {
  title: string;
  imageUrl: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: any[];
  $databaseId: string;
  $collectionId: string;
};
const Home = () => {
  const { data: categories, isPending } = useGetAllCategories();
  const mappedCategories = categories?.map((category) => ({
    title: category.title, // Adjust this to match actual structure
    imageUrl: category.imageUrl, // Adjust as needed
    $id: category.$id,
    $createdAt: category.$createdAt,
    $updatedAt: category.$updatedAt,
    $permissions: category.$permissions,
    $databaseId: category.$databaseId,
    $collectionId: category.$collectionId,
  })) as ICategory[]; // Casting after mapping
  return (
    <div className="h-screen w-full px-4 py-10 md:px-8 bg-[#5b4fcb] ">
      <div className="w-full px-5 py-3 md:py-5 sm:px-10 flex flex-col items-center bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d] border-none">
        <CardContent className="space-y-6 mt-4 text-center animate-fadeIn">
          <CardTitle className="px-6 py-0 text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wide text-white">
            Welcome Sushil, to QuizWave! 🎉
            <span className="hidden md:block mt-3   md:text-base text-gray-200">
              Ready to challenge your brain? Dive into thrilling trivia
              categories and test your knowledge. Let the fun begin!
            </span>
          </CardTitle>
        </CardContent>
      </div>

      <div className="h-3/4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-8 overflow-y-scroll no-scrollbar">
        {isPending ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse h-40 flex items-center justify-center text-white font-semibold text-lg relative rounded-lg cursor-pointer"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Add a semi-transparent overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                {/* Add dynamic text or placeholder content */}
                <p className="z-10">Loading....</p>{" "}
                {/* Example: display Card 1, Card 2, etc. */}
              </div>
            ))}
          </>
        ) : (
          mappedCategories?.map((category) => (
            <Suspense
              key={category.$id}
              fallback={<div className="h-40 bg-gray-200"></div>}
            >
              <LazyImageCard category={category} />
            </Suspense>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
