import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUser } from '../actions/MainAction';

const PrivateRouteRegister = ({ Element }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser(localStorage.getItem('loggedInEmail')))
    }, [dispatch])
    const { loggedInUser } = useSelector(state => state.Data);
    console.log(loggedInUser);
    const isLoggedIn = localStorage.getItem('ACCESS_TOKEN') && loggedInUser.is_accountant === false && loggedInUser.is_staff === true;
    console.log(isLoggedIn);
    return isLoggedIn===true ? (
        <Element />
    ) : (
        <Navigate to="/login" />
    );
    

}

export default PrivateRouteRegister

