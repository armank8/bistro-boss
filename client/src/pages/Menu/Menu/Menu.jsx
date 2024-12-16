import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import banner3 from '../../../assets/menu/banner3.jpg';
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";

export default function Menu() {
  const [menus] = useMenu();
  const offered = menus.filter((menu) => menu.category === "offered");
  const dessert = menus.filter((menu) => menu.category === "dessert");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const salad = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  console.log(offered);
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={banner3}></Cover>       
        <MenuCategory items={}></MenuCategory>
        
    </div>
  )
}
