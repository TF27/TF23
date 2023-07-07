import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import WhatsappShareButton from './share/whatsapp';

const Internal = () => {

    const { compiName } = useParams();

    return ( 
        <div>
            You are here to explore the world
            <h1>{compiName}</h1>
            <Link to={`register`}>Register</Link><br/>
            <Link to={`createTeam`}>Create Team</Link><br/>
            <Link to={`joinTeam`}>Join Team</Link><br/>
            <button>Leave Team</button>
            <WhatsappShareButton />
        </div>
     );
}
 
export default Internal;