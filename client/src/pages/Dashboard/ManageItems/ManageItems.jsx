import { FaEdit, FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionHeader from "../../../components/SectionHeader/SectionHeader"
import useMenu from "../../../hooks/useMenu"

const ManageItems = () => {
    const [menu] = useMenu();
    const handleDeleteItem = (item) => { };
    return (
        <div>
            <SectionHeader heading="manage all items" subHeading="hurry up" className="pt-4"></SectionHeader>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price </th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className="text-right">${item.price}</td>
                                    <th>
                                        <button
                                            className="btn  btn-md bg-orange-500"
                                        >
                                            <FaEdit className="text-white"></FaEdit>
                                        </button>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageItems