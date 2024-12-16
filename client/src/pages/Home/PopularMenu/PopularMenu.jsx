import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

export default function PopularMenu() {
  const [menus] = useMenu();
  
  const popular = menus.filter((menu) => menu.category === "popular");
  // console.log(popular);

  return (
    <section>
      <SectionHeader
        heading="FROM OUR MENU"
        subHeading="Check it out"
      ></SectionHeader>
      <div className="grid grid-cols-2 gap-10 my-16">
        {
          popular.map((menu)=><MenuItem key={menu._id} menu={menu}></MenuItem>)
        }
      </div>
    </section>
  );
}
