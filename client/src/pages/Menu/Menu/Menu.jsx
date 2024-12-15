import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import banner3 from '../../../assets/menu/banner3.jpg';
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

export default function Menu() {
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={banner3}></Cover>       
        <PopularMenu></PopularMenu>

        <Cover img={banner3}></Cover>
        <PopularMenu></PopularMenu>

        <Cover img={banner3}></Cover>
        <PopularMenu></PopularMenu>
        
        <Cover img={banner3}></Cover>
        <PopularMenu></PopularMenu>
        
    </div>
  )
}
