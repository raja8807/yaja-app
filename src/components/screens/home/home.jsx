import BannerSection from "./sections/banner/banner";
import DiscoverSection from "./sections/discover/dicover";
import FunSection from "./sections/fun/fun";
import ResponsibilitySection from "./sections/responsibility/responsibility";
import SpecsSection from "./sections/specs/specs";

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <DiscoverSection />
      <FunSection/>
      <SpecsSection/>
      <ResponsibilitySection/>
    </>
  );
};

export default HomeScreen;
