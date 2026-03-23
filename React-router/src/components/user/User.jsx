import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import Details from '../Details/Details';


const User = ({user}) => {
    const {id,name,email,phone} = user;
    const [shawInfo,setShawInfo] = useState(false)
    const userpromisse = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
    // console.log(userpromisse);
    const handleDeleteInfo = () =>{
        setShawInfo(!shawInfo)
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>Phone: {phone}</p>
            <p>
                <small>
                    {email}
                </small>
            </p>
            {/* <button> */}
                <Link to={`/user/${id}`}>View Details</Link>
            {/* </button> */}
            <br />
            <button onClick={handleDeleteInfo}>{shawInfo? "Show": "hide"} Info</button>

            {
                shawInfo && <Suspense fallback={<h1>Loading...</h1>}>
                    <Details userpromisse={userpromisse}></Details>
                </Suspense>
            }
        </div>
    );
}; 

export default User;