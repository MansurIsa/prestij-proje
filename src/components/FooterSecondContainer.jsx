import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchList, getSettingsList } from '../actions/MainAction';
import FooterSecondCard from './FooterSecondCard';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';


const FooterSecondContainer = () => {
    const dispatch = useDispatch();
    const { branchListArr, settingsListArr } = useSelector(state => state.Data);


    useEffect(() => {
        dispatch(getBranchList())
        dispatch(getSettingsList())
    }, [dispatch])






    return (
        <div className='footer_second_container container'>
            <div className="footer_second_card">
                <h4>HAQQIMIZDA</h4>
                <p>{DOMPurify.sanitize(settingsListArr[0]?.about_us).replace(/<[^>]+>/g, '').length ? `${DOMPurify.sanitize(settingsListArr[0]?.about_us).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').substring(0, 200)}...` : DOMPurify.sanitize(settingsListArr[0]?.about_us).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')}</p>
                <div className='header_middle_container_content footer_second_btn'>
                    <Link to="/haqqimizda"><button><span>Daha çox</span></button></Link>
                </div>
            </div>
            <div className="footer_second_cards">
                {
                    [...branchListArr]?.reverse().map((data, i) => {
                        return data.is_active ? <FooterSecondCard key={i} data={data} /> : null
                    })
                }

            </div>

        </div>
    )
}

export default FooterSecondContainer