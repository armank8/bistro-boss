import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios';

export default function FoodCard({ item }) {
  const { _id, name, recipe, image, category, price } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  // console.log(user);

  // Add to Cart
  const handleAddToCart = (food) => {
    // console.log(food);
    if (user && user.email) {
      // TODO:  Send cart item to db
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axios.post("http://localhost:5000/carts",cartItem).then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been added to cart`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please Login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
}
