
import {  useLoaderData } from "react-router-dom";
import SpeaceficCountryCard from "./SpeaceficCountryCard";

const SpeaceficCountry = () => {
  const place = useLoaderData();
  console.log(place);
  const { _id } = place[0];
  console.log(_id);

  return (
    <div>
     {
      place.map((place) => (
        <SpeaceficCountryCard key={place._id} place={place} ></SpeaceficCountryCard>
      ))
     }
    </div>
  );
};

export default SpeaceficCountry;
