import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import img from "../../../assets/home/featured.jpg";

export default function Featured() {
  return (
    <section
      className="bg-fixed w-full mx-0 h-[848px] bg-black pt-1 my-20"
      style={{ backgroundImage: `url(${img})` }}
    >
      <SectionHeader
        heading={"From our Menu"}
        subHeading={"Check it out"}
      ></SectionHeader>
      <div className="flex text-white px-40 py-20 space-x-10 bg-opacity-30">
        <div>
          <img className="w-[648px] h-[400px]" src={img} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </section>
  );
}
