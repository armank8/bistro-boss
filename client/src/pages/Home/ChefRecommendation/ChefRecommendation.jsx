import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import img from "../../../assets/home/slide5.jpg";

export default function ChefRecommendation() {
  const ChefRecommends = {
    img: img,
    title: "Caeser Salad",
    desc: "Caeser Salad",
  };
  return (
    <section>
      <SectionHeader
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionHeader>
      <div className="my-10 grid grid-cols-3 gap-7">
        {/* 1st */}
        <div className="" style={{ background: "#F3F3F3", width: "400px" }}>
          <img className="w-full h-[300px]" src={img} alt="" />
          <div className="text-center p-10">
            <p className="text-2xl">Caeser Salad</p>
            <p className="my-3">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button
              className="bg-[#E8E8E8] px-5 py-3 text-yellow-500"
              style={{ borderBottom: "3px solid #BB8506", borderRadius: "8px" }}
            >
              Add to Cart
            </button>{" "}
          </div>
        </div>
        {/* 2nd */}
        <div className="" style={{ background: "#F3F3F3", width: "400px" }}>
          <img className="w-full h-[300px]" src={img} alt="" />
          <div className="text-center p-10">
            <p className="text-2xl">Caeser Salad</p>
            <p className="my-3">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button
              className="bg-[#1F2937] px-5 py-3 text-yellow-500"
              style={{ borderBottom: "3px solid #BB8506", borderRadius: "8px" }}
            >
              Add to Cart
            </button>{" "}
          </div>
        </div>
        {/* 3rd */}
        <div className="" style={{ background: "#F3F3F3", width: "400px" }}>
          <img className="w-full h-[300px]" src={img} alt="" />
          <div className="text-center p-10">
            <p className="text-2xl">Caeser Salad</p>
            <p className="my-3">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button
              className="bg-[#E8E8E8] px-5 py-3 text-yellow-500"
              style={{ borderBottom: "3px solid #BB8506", borderRadius: "8px" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
