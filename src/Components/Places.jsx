import Place from "./Place";



const Places = ({ places  }) => {
    console.log(places)
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center pt-5 lg:pt-10">Discover Nearby Places</h1>
            <p className="text-center text-xl font-medium pt-4 pb-8">Exploring the local area, one can uncover a variety of intriguing spots waiting to be discovered</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-10">
            {
                places.map((place , idx) => <Place key={idx} place={place}></Place>)
            }
            </div>
        </div>
    );
};

export default Places;