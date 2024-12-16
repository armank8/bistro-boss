import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items, bannerImg, title,subTitle }) {
  console.log(items);
  return (
    <div>
      {title && <Cover img={bannerImg} title={title} subTitle={subTitle}></Cover>}

      <div className="grid grid-cols-2 gap-8 my-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
}
