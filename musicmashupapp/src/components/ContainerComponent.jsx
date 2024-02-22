import Navbar from "./Navbar";
import HeadComponent from "./HeadComponent";
import BannerComponent from "./BannerComponent";

const ContainerComponent = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <HeadComponent />
        <BannerComponent />
      </div>
    </>
  );
};

export default ContainerComponent;
