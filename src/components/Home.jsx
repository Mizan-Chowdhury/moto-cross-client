import OurAim from "../extraRoute/OurAim";
import OurGallery from "../extraRoute/OurGallery";
import Banner from "./banner/Banner";
import Brand from "./brands/Brand";
import MotoShop from "./motoCrossShop/MotoShop";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <MotoShop></MotoShop>
            <OurAim></OurAim>
            <OurGallery></OurGallery>
        </div>
    );
};

export default Home;