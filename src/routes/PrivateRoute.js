import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();


    if (loading){
        return <Loading></Loading>
    }


    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
    
};

export default PrivateRoute;