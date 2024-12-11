import banner2 from "../../../assets/home/chef-service.jpg";
export default function Banner2() {
  return (
    <div className="py-20 px-40 my-20" style={{ backgroundImage: `url(${banner2})` }}>
      <div className="flex flex-col justify-center items-center text-black bg-white p-10 my-10">
        <h3 className="font-bold text-3xl mb-5 pt-5">Bistro Boss</h3>
        <p className="max-w-[762px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit a
          dolorum suscipit, beatae incidunt autem, dolor quo necessitatibus
          saepe officiis, totam iure laborum! Eius architecto dicta placeat
          eaque esse! Distinctio!
        </p>
      </div>
    </div>
  );
}
