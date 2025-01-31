export default function SectionHeader({ heading, subHeading, className,headingColor }) {
  return (
    <div className={`pt-32 mb-10  text-center ${className || ""} `}>
      <p className="text-yellow-600">--- {subHeading} ---</p>
      <h2 className={`font-bold text-3xl text-black border-y-4 w-4/12 mx-auto py-2 uppercase ${headingColor || ''}`}>
        {heading}
      </h2>
    </div>
  );
}
