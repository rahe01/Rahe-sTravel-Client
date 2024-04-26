import { useEffect, useState } from "react";

const Country = () => {

    const [country , setCountry] = useState([])
    
    useEffect(() => {
      fetch('http://localhost:5000/countryyy',   {
          method : 'GET',
          headers : {
              'content-type' : 'application/json'
          }
          
          
      })
      .then(res => res.json())
      .then(data => setCountry(data))  
    },[])

    console.log(country)




    return (
        <div>
            
        </div>
    );
};

export default Country;