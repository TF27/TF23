import React from 'react';
import { useParams } from 'react-router-dom';

const Reg = () => {

    const { compiName } = useParams();

    return ( 
        <div>
            Register Here
            <h1>{compiName}</h1>
        </div>
     );
}
 
export default Reg;