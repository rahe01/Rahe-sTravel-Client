import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


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
        <div>
            <h1>My List</h1>
            {
                myList.map((item) => {
                    return (
                        <div key={item._id}>
                            <h2>{item.image}</h2>
                            <p>{item.description}</p>
                            <p>{item.email}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default MyList;