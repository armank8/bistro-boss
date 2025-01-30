import { useForm } from "react-hook-form"
import SectionHeader from "../../../components/SectionHeader/SectionHeader"
import { FaUtensils } from "react-icons/fa"
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    console.log(image_hosting_key);

    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const formData = new FormData();
        formData.append('image', data.image[0]);
        const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
    }
    return (
        <div>
            <SectionHeader heading="add an item" subHeading="whats new" className="pt-4"></SectionHeader>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Name */}
                    <div className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text" {...register("name", { required: true })} placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>

                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue="default"  {...register("category", { required: true })} className="select select-bordered w-full">
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
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>

                    {/* Details */}
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>
                            </div>
                            <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </label>
                    </div>

                    {/* file */}
                    <div className="my-4">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn" type="submit">
                        Add Items <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddItems