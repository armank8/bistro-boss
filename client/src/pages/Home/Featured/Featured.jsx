import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import img from "../../../assets/home/featured.jpg";

export default function Featured() {
  return (
    <section
      className="bg-fixed my-20"
      style={{ backgroundImage: `url(${img})` }}
    >
      <SectionHeader
        heading={"From our Menu"}
        headingColor={"text-white"}
        subHeading={"Check it out"}
        className={"bg-black bg-opacity-50 mb-0"}
      ></SectionHeader>
      <div className="flex items-center text-white  px-40 py-20 space-x-10 bg-black bg-opacity-50">
        <div>
          <img className="" src={img} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <p className="text-2xl font-bold my-5">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-none border-b-4 border-b-blue-500 text-white font-bold">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
