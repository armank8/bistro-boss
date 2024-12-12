import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

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
      <div className="">
        {
          menu.map((menu)=>console.log(menu))
        }
      </div>
    </section>
  );
}
