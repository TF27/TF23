import React, {useEffect, useState} from 'react';
import { UserAuth } from './AuthContext';

const IsLeader = ({children}) => {
    const {user} = UserAuth();
    const [isLeader, setIsLeader] = useState(false);

    return children;
}
 
export default IsLeader;