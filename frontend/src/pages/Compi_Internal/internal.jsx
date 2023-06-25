import React from 'react';
import { useParams } from 'react-router-dom';



const Internal = () => {

    const { compiName } = useParams();

    return ( 
        <div>
            You are here to explore the world
            <h1>{compiName}</h1>
        </div>
     );
}
 
export default Internal;