import HomeBanner from "./HomeBanner/HomeBanner";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/Trending";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Popular />
      <Trending />
      <TopRated />
    </div>
  );
};

export default Home;
