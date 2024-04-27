
import { useLoaderData } from "react-router-dom";
import { FaCommentDollar } from "react-icons/fa";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { LuCalendarDays } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";

const ViewDetails = () => {
    
    const data = useLoaderData(); 
    const {  image,
        touristsSpotName,
        country_Name,
        location,
        shortDescription,
        averageCost,
        seasonality,
        travelTime,
        totalVisitorsPerYear,} = data; 

    // Render the details of the tourist spot
    return (
        <div className="container mx-auto mt-10">
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image} 
                        alt={touristsSpotName}
                        className="rounded-xl h-44 w-full object-cover"
                    />
                </figure>
                <div className="p-6">
                    <p className="text-2xl font-bold">{touristsSpotName}</p>
                    <p className="flex items-center gap-2"> <FaMagnifyingGlassLocation /> {location}</p>
                    <p className="">{country_Name}</p>
                    <p className="flex items-center gap-2"> <FaCommentDollar /> {averageCost}</p>
                    <p className="flex items-center gap-2"> <WiDaySunnyOvercast /> {seasonality}</p>
                    <p className="flex items-center gap-2">  <LuCalendarDays></LuCalendarDays>{travelTime}</p>
                    <p className="flex items-center gap-2"> <FaPeopleGroup /> {totalVisitorsPerYear}</p>
                    
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
