import Banner from "../Components/Banner/Banner";



import { useLoaderData } from 'react-router-dom';
import Places from "../Components/Places";
import Country from "../Components/Country";


const SecondLayout = () => {
    const places = useLoaderData();
    console.log(places);
    return (
        <div>
            <Banner></Banner>
            <Places places={places}></Places>
            <Country></Country>
            
        </div>
    );
};

export default SecondLayout;