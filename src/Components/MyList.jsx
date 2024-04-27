import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MylistTable from "./MylistTable";


const MyList = () => {
    const {user} = useContext(AuthContext)
    const [myList, setMyList] = useState([])
    console.log(user.email)

    useEffect(() => {
        // Make sure user exists before making the request
        if (user && user.email) {
            fetch(`http://localhost:5000/touristSports/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setMyList(data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [user]);

    console.log(myList)





    return (
        <div className="container mx-auto">
            <h1>My List</h1>
      <table className="table table-zebra">
      <thead>
      <tr className="flex justify-between">
        <th></th>
        <th>Sopt Name</th>
        <th>Country</th>
        <th>Seasonality</th>
      </tr>
    </thead>
      </table>
            {
                myList.map((item) => <MylistTable key={item._id} item={item}></MylistTable>)
                 
            }
        </div>
    );
};

export default MyList;