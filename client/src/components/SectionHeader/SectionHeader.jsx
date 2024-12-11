export default function SectionHeader({ heading, subHeading }) {
  return (
    <div className="mt-32 mb-10   w-4/12  mx-auto text-center">
      <p className="text-yellow-600">-- {subHeading} --</p>
      <h2 className="font-bold text-4xl text-black border-y-4 py-2 uppercase">{heading}</h2>
    </div>
  );
}
