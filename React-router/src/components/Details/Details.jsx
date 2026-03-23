import React, { use } from 'react';

const Details = ({userpromisse}) => {
    const userpromisseData = use(userpromisse)
    console.log(userpromisseData.address.geo);
    return (
        <div>
            <h1 style={{color:"red"}}>{userpromisseData.address.street}</h1>
            <h1 style={{color:"red"}}>{userpromisseData.address.suite}</h1>
            <h1 style={{color:"red"}}>{userpromisseData.address.city}</h1>
            <h1 style={{color:"red"}}>{userpromisseData.address.geo.lat}</h1>
            <h1 style={{color:"red"}}>{userpromisseData.address.geo.lng}</h1>
        </div>
    );
};

export default Details;