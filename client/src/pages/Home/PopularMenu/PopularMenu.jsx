import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

export default function PopularMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => 
      {data.filter=>}
        setMenu(data));
  }, []);
  console.log(menu);
  return (
    <section>
      <SectionHeader heading="FROM OUR MENU" subHeading="Check it out"></SectionHeader>
    </section>
  );
}
