import { useState } from "react";
import { useLoaderData } from "react-router-dom"


const DisplayUser = () => {
    const users = useLoaderData();
    const [updatedUser, setUpdatedUser] = useState(users)
    const handleDelete = (_id) => {
        console.log(_id);

        const URL = `http://localhost:5001/users/${_id}`
        fetch(URL, {
            method: "DELETE", 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                const filterdData = updatedUser.filter(item => item._id !== _id)
                setUpdatedUser(filterdData)
            }
            
        })
    }
    console.log(users);
    return (
        <div>
            <h1>User:</h1>
            {updatedUser.map(user => <div key={user._id}>
                {user.email}
                <button onClick={() =>handleDelete(user._id)} type="submit">Delete</button>
            </div>)}
           
        </div>
    )
}

export default DisplayUser