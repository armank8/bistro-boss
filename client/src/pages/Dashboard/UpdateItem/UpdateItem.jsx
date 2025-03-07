import { useLoaderData } from "react-router-dom"
import SectionHeader from "../../../components/SectionHeader/SectionHeader"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

// cloudinary credentials
const cloudName = "drnbidwis";
const uploadPreset = "bistro-boss-img";
const cloudinaryApi = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

const UpdateItem = () => {
    const { name, category, image, recipe, price,_id } = useLoaderData();
    // const item = useLoaderData();
    // console.log(item);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        console.log(data);
        // image upload to cloudinary and then get an url
        // const imageFile = { image: data.image[0] };
        const formData = new FormData();
        formData.append('file', data.image[0]);
        formData.append('upload_preset', uploadPreset);

        const res = await axiosPublic.post(cloudinaryApi, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.secure_url) {
            // now send the menu item data to the server with the image 
            // console.log(res.data.secure_url);
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.secure_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount>0) {
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
    }
    return (
        <div>
            <SectionHeader heading="Update an Item" subHeading="refresh info" className='pt-4'></SectionHeader>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Name */}
                    <div className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text" defaultValue={name} {...register("name", { required: true })} placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>

                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category}  {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input type="number" defaultValue={price} {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>

                    {/* Details */}
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>
                            </div>
                            <textarea defaultValue={recipe} {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </label>
                    </div>

                    {/* file */}
                    <div className="my-4">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn bg-yellow-300" type="submit">
                        Update menu Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateItem