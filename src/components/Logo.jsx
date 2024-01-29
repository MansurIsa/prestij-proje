import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSettingsList } from '../actions/MainAction'

const Logo = () => {
    const dispatch = useDispatch();
    const settingsListArr = useSelector(state => state.Data.settingsListArr);


    useEffect(() => {
        dispatch(getSettingsList())
    }, [dispatch])
    return (
        <Link to='/'>
            {
                settingsListArr[0]?.logo_active ?
                    <img className='logo' src={settingsListArr[0]?.logo} alt="" />
                    : null
            }
        </Link>

    )
}

export default Logo