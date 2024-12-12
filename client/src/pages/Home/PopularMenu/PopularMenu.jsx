import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

export default function PopularMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((menu) => menu.category === "popular");
        setMenu(popularMenu);
      });
  }, []);

  console.log(menu);

  return (
    <section>
      <SectionHeader
        heading="FROM OUR MENU"
        subHeading="Check it out"
      ></SectionHeader>
      <div className="grid grid-cols-2 gap-10 my-16">
        {
          menu.map((menu)=><MenuItem key={menu._id} menu={menu}></MenuItem>)
        }
      </div>
    </section>
  );
}
