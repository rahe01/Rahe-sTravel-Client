
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    
    const data = useLoaderData(); // Fetch the data using useLoaderData hook
    const { image, touristsSpotName, country_Name, shortDescription } = data; // Destructure data object

    // Render the details of the tourist spot
    return (
        <div className="container mx-auto mt-10">
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image} // Assuming each place object has an 'image' property
                        alt={touristsSpotName} // Assuming each place object has a 'touristsSpotName' property
                        className="rounded-xl h-44 w-full object-cover"
                    />
                </figure>
                <div className="p-6">
                    <p className="text-2xl font-bold">{touristsSpotName}</p>
                    <p className="text-gray-500 mt-2">{country_Name}</p>
                    <p className="mt-4">{shortDescription}</p>
                </div>
                <div className="card-actions flex justify-center pb-6">
                    <button className="btn bg-violet-600 text-white rounded-full px-6 py-2">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
