import { useLoaderData } from "react-router-dom"
import SectionHeader from "../../../components/SectionHeader/SectionHeader"

const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item);
    return (
        <div>
            <SectionHeader heading="Update an Item" subHeading="refresh info" className='pt-4'></SectionHeader>
        </div>
    )
}

export default UpdateItem