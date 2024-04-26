import Banner from "../Components/Banner/Banner";



import { useLoaderData } from 'react-router-dom';
import Places from "../Components/Places";
import Country from "../Components/Country";
import Contact from "../Components/Contact";
import Offer from "../Components/Offer";


const SecondLayout = () => {
    const places = useLoaderData();
    console.log(places);
    return (
        <div>
            <Banner></Banner>
            <Places places={places}></Places>
            <Country></Country>  
            <Offer></Offer>
            <Contact></Contact>
            
        </div>
    );
};

export default SecondLayout;