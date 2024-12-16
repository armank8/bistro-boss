import MenuItem from "../../../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items }) {
  console.log(items);
  return (
    <div className="grid grid-cols-2 gap-5">
      {items.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
    </div>
  );
}
