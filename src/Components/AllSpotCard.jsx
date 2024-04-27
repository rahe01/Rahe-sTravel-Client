import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllSpotCard = ({place}) => {

    const {_id} = place;
    return (
        <div>
            <div className="container mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={place.image} // Assuming each place object has an 'image' property
            alt={place.touristsSpotName} // Assuming each place object has a 'touristsSpotName' property
            className="rounded-xl h-44 w-full object-cover"
          />
        </figure>
        <p className="text-2xl font-bold py-5 pl-4">{place.touristsSpotName}</p>
        <h1 className="flex items-center gap-2 pl-4"><FaLocationArrow /> {place.country_Name}</h1>
        <p className="pl-4">{place.shortDescription}</p>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <Link to={`/touristSports/${_id}`} place='place' >
              <button className="btn btnglass bg-violet-600 rounded-3xl">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AllSpotCard;