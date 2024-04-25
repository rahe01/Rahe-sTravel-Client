import Banner from "../Components/Banner/Banner";



import { useLoaderData } from 'react-router-dom';
import Places from "../Components/Places";


const SecondLayout = () => {
    const places = useLoaderData();
    console.log(places);
    return (
        <div>
            <Banner></Banner>
            <Places places={places}></Places>
            
        </div>
    );
};

export default SecondLayout;