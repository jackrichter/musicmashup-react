import Navbar from "./Navbar";
import HeadComponent from "./HeadComponent";
import BannerComponent from "./BannerComponent";
import SearchComponent from "./SearchComponent";
import FooterComponent from "./FooterComponent";

const ContainerComponent = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <HeadComponent />
        <BannerComponent />
        <SearchComponent />
        <FooterComponent />
      </div>
    </>
  );
};

export default ContainerComponent;
