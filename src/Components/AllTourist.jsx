import { useState, useEffect } from "react";

import AllSpotCard from "./AllSpotCard";

const AllTourist = () => {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAndSortData = async () => {
      try {
        
        const response = await fetch("http://localhost:5000/sortTourist"); 
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        data.sort((a, b) => parseFloat(a.averageCost.slice(1)) - parseFloat(b.averageCost.slice(1)));

      
        setItems(data);
      } catch (error) {
        console.error("Error fetching and sorting data:", error);
       
      }
    };

    fetchAndSortData();
  }, []); 

  const handleSortByAverageCost = () => {
   
    const sortedData = [...items].reverse();
    setItems(sortedData);
  };

  return (
    <div>
      <div className="navbar-center hidden lg:flex justify-center ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Sort</summary>
              <ul className="p-2 z-[20]">
                <li>
                  <button onClick={handleSortByAverageCost}>Sort by Average Cost</button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((place, idx) => (
          <AllSpotCard key={idx} place={place}></AllSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTourist;
