import Place from "./Place";



const Places = ({ places  }) => {
    console.log(places)
    return (
        <div>
            {
                places.map((place , idx) => <Place key={idx} place={place}></Place>)
            }
        </div>
    );
};

export default Places;