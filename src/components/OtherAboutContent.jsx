import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsList } from '../actions/MainAction';
import DOMPurify from 'dompurify';

const OtherAboutContent = () => {
    const dispatch = useDispatch();
    const settingsListArr = useSelector(state => state.Data.settingsListArr);


    useEffect(() => {
        dispatch(getSettingsList())
    }, [dispatch])

    console.log(settingsListArr);
    return (
        <div className='other_about_content'>
            {
                settingsListArr[0]?.about_active ?
                    <div>
                        <h3>PRESTIJ-S tədris mərkəzi 2010-cu ildən keyfiyyətli tədrisi ilə xidmətinizdədir!</h3>
                        <p>{DOMPurify.sanitize(settingsListArr[0]?.about_us).replace(/<[^>]+>/g, '')}</p>

                    </div>: null
                
            }



        </div>
    )
}

export default OtherAboutContent