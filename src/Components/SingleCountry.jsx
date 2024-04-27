import { Link } from "react-router-dom";

const SingleCountry = ({ countrie }) => {
  console.log(countrie);

  const { country_Name, image, short_description } = countrie;

  return (
    <div>
    <Link to={`/country/${country_Name}`}>
    <div className="container mx-auto p-5">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={image} className="rounded-xl h-44 w-full object-cover" />
          </figure>
          <p className="text-2xl font-bold py-5 pl-4">{country_Name}</p>
          <h1 className="flex items-center gap-2 pl-4 text-lg">
            {short_description}
          </h1>
        </div>
      </div></Link>
    </div>
  );
};

export default SingleCountry;
