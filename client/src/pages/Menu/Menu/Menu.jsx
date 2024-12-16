import { Helmet } from "react-helmet-async";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import banner3 from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

export default function Menu() {
  const [menus] = useMenu();
  const offered = menus.filter((item) => item.category === "offered");
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const salad = menus.filter((item) => item.category === "salad");
  const soup = menus.filter((item) => item.category === "soup");
  // console.log(offered);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      
      <MenuCategory items={offered} bannerImg={banner3} title={'our menu'}></MenuCategory>
      <MenuCategory items={dessert} bannerImg={dessertBg} title={'Dessert'}></MenuCategory>
      <MenuCategory items={pizza} bannerImg={pizzaBg} title={'pizza'}></MenuCategory>
      <MenuCategory items={salad} bannerImg={saladBg} title={'salad'}></MenuCategory>
      <MenuCategory items={soup} bannerImg={soupBg} title={'soup'}></MenuCategory>
    </div>
  );
}
