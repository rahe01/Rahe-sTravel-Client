import { FaLocationArrow } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const SpeaceficCountry = () => {

    const place = useLoaderData()
    console.log(place) 
    const { _id } = place[0]
    console.log(_id)




    return (
        <div>
            <div>
            <div className="container mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={place[0].image} // Assuming each place object has an 'image' property
            alt={place[0].touristsSpotName} // Assuming each place object has a 'touristsSpotName' property
            className="rounded-xl h-44 w-full object-cover"
          />
        </figure>
        <p className="text-2xl font-bold py-5 pl-4">{place[0].touristsSpotName}</p>
        <h1 className="flex items-center gap-2 pl-4"><FaLocationArrow /> {place[0].country_Name}</h1>
        <div className="flex flex-col pl-4">
        <p>{place[0].location}</p>
        <p>{place[0].seasonality}</p>
        <p><p>{place[0].averageCost}</p></p>
        </div>

        <p className="pl-4">{place[0].shortDescription}</p>
        
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
        </div>
    );
};

export default SpeaceficCountry;