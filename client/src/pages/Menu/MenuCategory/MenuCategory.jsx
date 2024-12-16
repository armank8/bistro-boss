import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


export default function MenuCategory({ items,bannerImg,title }) {
  console.log(items);
  return (
    <div>
      <Cover img={bannerImg} title={title}></Cover>
      <SectionHeader
        heading={"Today's Offer"}
        subHeading={"Don't miss"}
      ></SectionHeader>
      <div className="grid grid-cols-2 gap-8 my-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
}
