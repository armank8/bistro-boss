export default function FoodCard({ item }) {
  const { _id, name, recipe, image, category, price } = item;
  return (
    <div className="card  bg-slate-100 w-96 shadow-md">
      {/* <figure className="m-0 p-0"></figure> */}
      <div>
        <img className="w-full" src={image} alt="Shoes" />
      </div>
      <p className="absolute top-8 right-8 bg-black px-5 text-white">
        ${price}
      </p>
      {/* Card Body */}
      <div className="card-body pt-6">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add To cart</button>
        </div>
      </div>
    </div>
  );
}
