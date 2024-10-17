import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

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
const LazyImageCard = ({ category }: { category: ICategory }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load image only once
    threshold: 0.1, // Image loads when 10% of it is in view
  });

  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className="h-40 flex items-center justify-center text-white font-semibold text-base md:text-lg relative rounded-lg cursor-pointer"
      style={{
        backgroundImage: inView ? `url(${category?.imageUrl})` : "none", // Only load image when in view
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => navigate(`/quiz-setup/${category?.title}`)}
    >
      {/* Add a semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
      <p className="z-10">{category?.title}</p>{" "}
    </div>
  );
};

export default LazyImageCard;
