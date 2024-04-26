import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";

const Country = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/countryyy', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(error => console.error('Error fetching countries:', error));
    }, []);
    console.log(countries);

    return (
        <div className="container mx-auto px-10 mt-10">
            <h1 className="text-3xl font-bold text-center mb-5">List of Countries</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                countries.map((countrie , idx) => <SingleCountry key={idx} countrie={countrie}></SingleCountry>)
            }
            </div>
        </div>
    );
};

export default Country;
