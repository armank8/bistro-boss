import { Parallax } from 'react-parallax';

export default function Cover({ img }) {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[700px]">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className=" bg-black bg-opacity-80 px-32 py-10">
            <h1 className="mb-5 text-5xl font-bold">OUR MENU</h1>
            <p className="mb-5">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
