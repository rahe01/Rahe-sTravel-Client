import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const AddTouristSport = () => {


    const { user } = useContext(AuthContext);

    // Check if user exists before accessing its properties
    const name =  user.displayName ;
    const email =  user.email;
    console.log(name, email)
    
        const handleadd = (e) => {
            e.preventDefault();
            const form = e.target;
            const image = form.image.value;
            const touristsSpotName = form.tourists_spot_name.value;
            const country_Name = form.country_Name.value;
            const location = form.location.value;
            const shortDescription = form.short_description.value;
            const averageCost = form.average_cost.value;
            const seasonality = form.seasonality.value;
            const travelTime = form.travel_time.value;
            const totalVisitorsPerYear = form.totaVisitorsPerYear.value;
           
            const item = {
                image,
                touristsSpotName,
                country_Name,
                location,
                shortDescription,
                averageCost,
                seasonality,
                travelTime,
                totalVisitorsPerYear,
                name,
                email
                
            }
            console.log(item);

            fetch('http://localhost:5000/addtouristSports', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Tourists Spot Added',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                    form.reset()
                })
    
        }
  return (
    <div>
      <div className="bg-[#ebe9e5] p-24">
        <h2 className="text-3xl font-extrabold">Add Tourists Spot</h2>
        <form onSubmit={handleadd}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Tourists Spot Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="tourists_spot_name"
                  placeholder="Tourists Spot Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <label className="input-group">
              <input
      type="text"
      name="country_Name" 
      placeholder="Country Name"
      className="input input-bordered w-full"
    />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="short_description"
                  placeholder="Short Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Average Cost</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="average_cost"
                  placeholder="Average Cost"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seasonality</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="seasonality"
                  placeholder="Seasonality"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Travel Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="travel_time"
                  placeholder="Travel Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Tota Visitors PerYear</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="totaVisitorsPerYear"
                  placeholder="Tota Visitors PerYear"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Tourist" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default AddTouristSport;
