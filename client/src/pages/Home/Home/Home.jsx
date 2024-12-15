import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Category from "../Category/Category";
import ChefRecommendation from "../ChefRecommendation/ChefRecommendation";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Banner2></Banner2>
      <PopularMenu></PopularMenu>
      <ChefRecommendation></ChefRecommendation>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
