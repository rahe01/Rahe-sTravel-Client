const Place = ({ place }) => {
    console.log(place)
    return (
      <div className="container mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={place.image} // Assuming each place object has an 'image' property
              alt={place.name} // Assuming each place object has a 'name' property
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{place.name}</h2> {/* Display the name of the place */}
            <p>{place.description}</p> {/* Display the description of the place */}
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Place;
  