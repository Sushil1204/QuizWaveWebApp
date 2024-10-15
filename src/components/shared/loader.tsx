import loader from "@/assets/loader.gif";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
