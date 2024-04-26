import Swal from "sweetalert2";

const AddCountry = () => {


    const handleAdd = (e) => {
        
        e.preventDefault();
        const form = e.target;
        const country_name = form.country_name.value;
        const short_description = form.short_description.value;
        const image = form.image.value;
        const item = {
            country_name,
            short_description,
            image
        }
        console.log(item);
        fetch('http://localhost:5000/addcountry', {
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
                        text: 'Country Added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
                form.reset()
            })
        
    }




  return (
    <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">Add Country</h1>
      <form onSubmit={handleAdd}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Country Name</span>
          
        </div>
        <input
          type="text"
          placeholder="Type here"
          name="country_name"
          className="input input-bordered w-full max-w-xs"
        />
        
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Short Description</span>
          
        </div>
        <input
          type="text"
          placeholder="Type here"
          name="short_description"
          className="input input-bordered w-full max-w-xs"
        />
        
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Image</span>
          
        </div>
        <input
          type="text"
          placeholder="Enter image url"
          name="image"
          className="input input-bordered w-full max-w-xs"
        />
        
      </label>

      <input type="submit" value="Add Tourist" className="btn btn-block" />
      </form>
      
    </div>
  );
};

export default AddCountry;
