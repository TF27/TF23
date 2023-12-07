import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const Protected = ({children}) => {

    const {user} = UserAuth();
    if( !user) {
        // console.log('I am the protected lord')
        return <Navigate to='/workshops' />
    }
    return children;
}

export default Protected;