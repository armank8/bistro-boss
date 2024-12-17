export default function FoodCard({ item }) {
    const {_id,name,recipe,image,category,price} = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={`${image}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p>{price}</p>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To cart</button>
        </div>
      </div>
    </div>
  );
}
